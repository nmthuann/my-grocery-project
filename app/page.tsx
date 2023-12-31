import getNewestProducts from "@/actions/get-newest-product";
import { getProducts } from "@/actions/get-products";
import Carousel from "@/components/pages/home/carousel";
import Container from "@/components/ui/custom/container";
import ProductList from "@/components/ui/custom/product-list";

const HomePage = async () => {
    const products = await getNewestProducts();
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Carousel />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Sản phẩm nổi bật" items={products} />
                </div>
            </div>
        </Container>
    );
};
export default HomePage;
