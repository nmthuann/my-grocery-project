import { getProducts } from "@/actions/get-products";
import getCategory from "@/actions/get-category";
import NoResults from "@/components/ui/custom/no-results";
import Container from "@/components/ui/custom/container";
import Carousel from "@/components/pages/home/carousel";
import ProductCard from "@/components/ui/custom/product-card";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import { Colors, Memories } from "@/data/mock-data";

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        category_id: string;
    };
    searchParams: {
        color_id: string;
        memory_id: string;
    };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams,
}) => {
    const products = await getProducts({
        category_id: parseInt(params.category_id, 10),
        color: searchParams.color_id,
        memory: searchParams.memory_id, // parseInt(searchParams.memory, 10),
    });

    // const memories = [64, 128, 256];
    // const colors = ["blue", "red", "white", "gray", "black"];
    const memories = Memories;
    const colors = Colors;
    const category = await getCategory(params.category_id);

    return (
        <div className="bg-white">
            <Container>
                <Carousel />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters memories={memories} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={memories}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard
                                        key={item.product_id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryPage;
