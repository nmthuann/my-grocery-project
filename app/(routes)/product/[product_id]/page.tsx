import getProduct from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/custom/container";
import Info from "@/components/ui/custom/info";
import ProductList from "@/components/ui/custom/product-list";

export const revalidate = 0;

interface ProductPageProps {
    params: {
        product_id: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
    const product = await getProduct(params.product_id);
    const suggestedProducts = await getProducts({
        category_id: product?.category?.category_id,
    });

    if (!product) {
        return null;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList
                        title="Related Items"
                        items={suggestedProducts}
                    />
                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
