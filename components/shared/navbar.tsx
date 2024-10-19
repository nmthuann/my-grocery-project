import Link from "next/link";
import Container from "../ui/custom/container";
import MainNav from "../ui/custom/main-navbar";
import { getCategories } from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="text-sm font-medium">khuyến mãi</p>
                    </Link>
                    <MainNav data={categories} />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
