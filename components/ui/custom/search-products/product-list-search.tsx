type Product = {
    product_id: number;
    model_name: string;
    image: string;
};

type ProductListProps = {
    products: Product[];
    selectedProductIndex: number;
    handleProductClick: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({
    products,
    selectedProductIndex,
    handleProductClick,
}) => {
    return (
        <div className="bg-white max-h-96 overflow-y-scroll resultProductContainer">
            {products.map((product, index) => (
                <div
                    key={product.product_id}
                    id={`product-${index}`}
                    className={`py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-200 cursor-pointer ${
                        selectedProductIndex === index ? "bg-gray-200 " : ""
                    }`}
                    onClick={() => handleProductClick(product)}
                >
                    <p className="font-medium">{product.model_name}</p>
                    <img src={product.image} alt="" className=" w-8" />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
