import { z } from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { AuthExceptionMessages, ErrorInput } from "@/constants/errors/errors";
import { Messages } from "@/constants/notifications/message";
import { useRouter } from "next/navigation";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import GoogleButton from "./google-button";

export function LoginForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            console.log("values:::", values);
            toast.success(Messages.EMAIL_VALID);
        } catch (error) {
            console.log("onSubmit :: Login ::", error);
            toast.error(AuthExceptionMessages.LOGIN_FAILED);
        } finally {
            setLoading(false);
        }

        // callLoginRefetch(values);
        // try {
        //     setLoading(true);
        //     const res = await axios.post(`/api/auth/login`, values);
        //     if (res.data.message) {
        //         toast.error(res.data.message);
        //         return;
        //     }

        //     toast.success(Messages.EMAIL_VALID);
        //     router.push("/");
        // } catch (error) {
        //     console.log("onSubmit :: Login ::", error);
        //     toast.error(AuthExceptionMessages.LOGIN_FAILED);
        // } finally {
        //     setLoading(false);
        // }
    }
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-blue-900 text-base font-bold">
                                    Tài khoản Email
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="example@mail.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-blue-900 text-base font-bold">
                                    Mật khẩu
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="*******"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        className="bg text-blue-900 text-xs"
                        variant="link"
                        onClick={() => router.push("/")}
                    >
                        Quên mật khẩu ?
                    </Button>
                    {/*  */}
                    <div className=" w-full ">
                        <Button
                            disabled={loading}
                            className="bg-gradient-to-r from-blue-700 to-red-700 hover:from-slate-500 hover:to-slate-50 w-full mt-2 mb-3 hover:bg-slate-600 hover:text-slate-50 text-sm font-bold"
                            type="submit"
                        >
                            {/* {action} */}
                            Đăng nhập
                        </Button>
                        <div className="relative mb-3">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t-2" />
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    hoặc sử dụng với
                                </span>
                            </div>
                        </div>
                        <GoogleButton option={true} />
                    </div>
                </form>
            </Form>
        </div>
    );
}

const formSchema = z.object({
    email: z
        .string()
        .min(2, {
            message: `${ErrorInput.MIN_ERROR} 2 kí tự.`,
        })
        .email({
            message: ErrorInput.EMAIL_INVALID,
        }),
    password: z.string().min(8, {
        message: `${ErrorInput.MIN_ERROR} 8 kí tự.`,
    }),
});
