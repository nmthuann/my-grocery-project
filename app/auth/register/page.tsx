import { Metadata } from "next";
import { RegisterForm } from "./components/register-form";

export const metadata: Metadata = {
    title: "Đăng ký",
    description: "Authentication forms built using the components.",
};
export default function RegisterPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen my-8">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight  mb-2">
                        Đăng Ký
                    </h2>
                    <p className="text-sm text-muted-foreground ">
                        Tạo tài khoản để truy cập website!
                    </p>
                </div>
                <div className="mt-4">
                    <RegisterForm />
                    {/* <CreateEmployeeForm /> */}
                </div>
            </div>
        </div>
    );
}
