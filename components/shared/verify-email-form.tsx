"use client";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthExceptionMessages, ErrorInput } from "@/constants/errors/errors";
import { Messages } from "@/constants/notifications/message";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

import { Loader2 } from "lucide-react";
import GoogleButton from "./google-button";

const formSchema = z.object({
    email: z
        .string()
        .min(2, {
            message: `${ErrorInput.MIN_ERROR} 2 kí tự.`,
        })
        .email({
            message: ErrorInput.EMAIL_INVALID,
        }),
});

interface VerifyEmailFormProps {
    onEmailConfirmed: () => void;
}

export default function VerifyEmailForm({
    onEmailConfirmed,
}: VerifyEmailFormProps) {
    const [loading, setLoading] = useState(false);
    const [onBtnLoad, setOnBtnLoad] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // console.log("values:::", values);
        // callLoginRefetch(values);

        try {
            setLoading(true);
            console.log("onSubmit  ::: setOnBtnLoad ::: true");
            setOnBtnLoad(true);

            // Giả lập đợi trong 5 giây
            setTimeout(async () => {
                toast.success(Messages.EMAIL_VALID);
                setOnBtnLoad(false);
                onEmailConfirmed();
            }, 5000);
            // setOnBtnLoad(false);
        } catch (error) {
            toast.error(AuthExceptionMessages.REGISTER_CUSTOMER_FAILED);
        } finally {
            setLoading(false);
            // setOnBtnLoad(false); // Kết thúc loading sau khi hoàn thành
        }
    }

    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base text-blue-900 font-bold">
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

                    <div className="mt-5">
                        {onBtnLoad ? (
                            <Button
                                disabled
                                className="w-full mt-2 mb-3 ml-px bg-gradient-to-r from-blue-700 to-red-700 hover:from-slate-500 hover:to-slate-50"
                            >
                                <Loader2 className=" mr-2 h-5 w-4 animate-spin" />
                                Vui lòng chờ
                            </Button>
                        ) : (
                            <Button
                                disabled={loading}
                                className="w-full mt-2 mb-3 ml-px bg-gradient-to-r from-blue-700 to-red-700 hover:from-slate-500 hover:to-slate-50 hover:text-slate-50 text-sm font-bold "
                                type="submit"
                            >
                                Xác thực tài khoản
                            </Button>
                        )}

                        <div className="relative mb-3">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t-2" />
                            </div>
                            <div className="relative flex justify-center text-[10px] uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <GoogleButton option={false} />
                    </div>
                </form>
            </Form>
        </div>
    );
}
