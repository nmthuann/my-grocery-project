import getNewestProducts from "@/actions/get-newest-product";
import BillboardSale from "@/components/pages/home/billboard-sale";
import BouncingIcon from "@/components/pages/home/bouncing-ring";
import Carousel from "@/components/pages/home/carousel";
import CustomerFeedback from "@/components/pages/home/customer-feedback";
import FlashSaleCountdown from "@/components/shared/flashsale-countdown";
import Container from "@/components/ui/custom/container";
import ProductList from "@/components/ui/custom/product-list";

const HomePage = async () => {
    const products = await getNewestProducts();
    const endTime = "2024-06-01T00:00:00";
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Carousel />
                <div className="p-20 flex flex-col items-center justify-center">
                    <h1 className=" text-4xl font-bold mb-4 text-red-600">
                        Flash Sale
                    </h1>

                    <FlashSaleCountdown endTime={endTime} />
                </div>

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Sản phẩm nổi bật" items={products} />
                </div>
                <BillboardSale />
                <CustomerFeedback />
                <BouncingIcon />
            </div>
        </Container>
    );
};
export default HomePage;
