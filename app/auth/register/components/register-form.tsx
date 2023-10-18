"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ErrorInput } from "@/constants/errors/errors";

/**
 * Yêu cầu:
 * 1. họ, tên,
 * 2. giới tính,
 * 3. ngày sinh,
 * 4. địa chỉ,
 * 5. số điện thoại,
 * 6. email,
 * 7. mã số thuế.
 */

type registerFormValues = z.infer<typeof registerFormSchema>;
const defaultValues: Partial<registerFormValues> = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
    firstName: "",
    lastName: "",
    password: "",
    confirm_password: "",
    email: "",
    // address: "",
};

export function RegisterForm() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        // Check if passwords match
        // Check if passwords match
        setPasswordsMatch(newPassword === confirmPassword);
    };

    const handleConfirmPasswordChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        // Check if passwords match
        setPasswordsMatch(password === newConfirmPassword);
    };

    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues,
    });

    // 2. Define a submit handler.
    function onSubmit(data: registerFormValues) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (passwordsMatch) {
            // Passwords match, proceed with form submission
            // console.log("Submit", data);
            console.log(`Submit ${JSON.stringify(data, null, 2)}`);
        } else {
            // Passwords do not match, show an error message or take appropriate action
            console.log("Passwords do not match");
        }

        // console.log(`Submit ${JSON.stringify(data, null, 2)}`);
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //             <code className="text-white">
        //                 {JSON.stringify(data, null, 2)}
        //             </code>
        //         </pre>
        //     ),
        // });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-row space-x-4">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="basis-1/3">
                                <FormLabel>Tên</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập Tên"
                                        {...field}
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Họ</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Nhập Họ"
                                        {...field}
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                {/* Giới Tính and Sinh nhật in the same row */}
                <div className="flex space-x-4">
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Giới tính</FormLabel>
                                <div className="relative w-max">
                                    <FormControl>
                                        <select
                                            className={cn(
                                                buttonVariants({
                                                    variant: "outline",
                                                }),
                                                "w-[125px] appearance-none bg-transparent font-normal"
                                            )}
                                            {...field}
                                        >
                                            <option value="male">Nam</option>
                                            <option value="female">Nữ</option>
                                            <option value="other">Khác</option>
                                        </select>
                                    </FormControl>
                                    <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
                                </div>
                                {/* <FormDescription>
                                Set the font you want to use in the dashboard.
                            </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Ngày Sinh</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value &&
                                                        "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="w-auto p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() ||
                                                date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Số Điện thoại */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Số điện thoại</FormLabel>
                            <FormControl>
                                <Input
                                    // type="number"
                                    placeholder="Your Phone number"
                                    {...field}
                                />
                            </FormControl>
                            {/* <FormDescrip+tion>
                                This is the name that will be displayed on your
                                profile and in emails.
                            </FormDescrip+tion> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Email" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is the name that will be displayed on your
                                profile and in emails.
                            </FormDescription> */}
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Password and Confirm Password in the same row */}
                <div className="flex space-x-8">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Mật Khẩu</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Nhập mật khẩu"
                                        onChangeCapture={handlePasswordChange}
                                        {...field}
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirm_password"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Xác nhận mật khẩu</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Nhập lại mật khẩu"
                                        onChangeCapture={
                                            handleConfirmPasswordChange
                                        }
                                        {...field}
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>

                                <FormMessage />
                                {!passwordsMatch && (
                                    <div className="text-red-500">
                                        Mật Khẩu không trùng với Xác nhận mật
                                        khẩu
                                    </div>
                                )}
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Đăng Ký</Button>
            </form>
        </Form>
    );
}

const registerFormSchema = z.object({
    firstName: z
        .string()
        .min(2, {
            message: `${ErrorInput.MIN_ERROR} 2 kí tự.`,
        })
        .max(10, {
            message: `${ErrorInput.MAX_ERROR} 10 kí tự.`,
        })
        .refine(
            (value) => {
                // Sử dụng biểu thức chính quy để kiểm tra xem giá trị không chứa chỉ khoảng trắng hoặc không có giá trị
                return (
                    !/\d/.test(value) &&
                    value.trim() !== "" &&
                    /^[^\s]*$/.test(value)
                );
            },
            {
                message: ErrorInput.NAME_INVALID,
            }
        ),
    lastName: z.string().min(2, {
        message: `${ErrorInput.MIN_ERROR} 2 kí tự.`,
    }),
    password: z.string().min(8, {
        message: ErrorInput.PASSWORD_ERROR,
    }),
    confirm_password: z.string().min(8, {
        message: ErrorInput.PASSWORD_ERROR,
    }),
    gender: z.enum(["male", "female", "other"], {
        invalid_type_error: `${ErrorInput.NOT_SELECT_FIELD} giới tính.`,
        required_error: `${ErrorInput.NOT_SELECT_FIELD} giới tính.`,
    }),
    dob: z.date({
        required_error: `${ErrorInput.NOT_SELECT_FIELD} ngày sinh.`,
    }),
    // address: z.string().min(10, {
    //     message: "Please type Address",
    // }),
    // phone: z.number().gte(9, {
    //     message: "Please type Phone",
    // }),
    phone: z.string().refine((value) => /^\d{10}$/.test(value), {
        message: ErrorInput.PHONE_NUMBER_ERROR,
    }),
    // phone: z.coerce // SOLUTION
    //     .number(),
    email: z
        .string({
            required_error: ErrorInput.EMAIL_ERROR,
        })
        .email(),
    // taxCode: z.number().min(10, {
    //     message: "Please type Phone",
    // }),
});
