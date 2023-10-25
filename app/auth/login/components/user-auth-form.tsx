"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthExceptionMessages, ErrorInput } from "@/constants/errors/errors";
import { Messages } from "@/constants/notifications/message";
import { useAuth } from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

// interface LoginFormProps {
//     onLoginSuccess(): void;
// }

const formSchema = z.object({
    email: z
        .string()
        .min(2, {
            message: `${ErrorInput.MIN_ERROR} 2 kí tự.`,
        })
        .email(),
    password: z.string().min(8, {
        message: `${ErrorInput.MIN_ERROR} 8 kí tự.`,
    }),
});
// export const LoginForm: React.FC<LoginFormProps> = () => {
//{ onLoginSuccess }
export function LoginForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("values:::", values);
        // callLoginRefetch(values);
        try {
            setLoading(true);
            const res = await axios.post(`/api/auth/login`, values);
            if (res.data.message) {
                toast.error(res.data.message);
                return;
            }
            login({
                email: values.email,
                name: await res.data.first_name,
            });
            //onLoginSuccess();
            toast.success(Messages.LOGIN_SUCCESS);
            router.push("/");
        } catch (error) {
            console.log("onSubmit :: Login ::", error);
            toast.error(`${AuthExceptionMessages.LOGIN_FAILED}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="nhập email để đăng nhập ..."
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="mật khẩu ..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between ">
                    <Link href="/auth/register">Đăng ký</Link>
                    <Link href="/">Quên mật khẩu ?</Link>
                </div>

                <Button className="w-full" type="submit">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
