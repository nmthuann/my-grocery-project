"use client";

import { Button, buttonVariants } from "@/components/ui/button";
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
    email: "",
    address: "",
};

export function RegisterForm() {
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues,
    });

    // 2. Define a submit handler.
    function onSubmit(data: registerFormValues) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(`Submit ${JSON.stringify(data, null, 2)}`);
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
                {/* Tên  */}
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name that will be displayed on your
                                profile and in emails.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Họ */}
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Họ</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Surname" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name that will be displayed on your
                                profile and in emails.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Giới Tính */}
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
                                            "w-[200px] appearance-none bg-transparent font-normal"
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
                            <FormDescription>
                                Set the font you want to use in the dashboard.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Sinh nhật */}
                <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Date of birth</FormLabel>
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
                            <FormDescription>
                                Your date of birth is used to calculate your
                                age.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Địa Chỉ */}
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Địa Chỉ</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Address" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name that will be displayed on your
                                profile and in emails.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Số Điện thoại */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Số điện thoại</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
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
                            <FormDescription>
                                This is the name that will be displayed on your
                                profile and in emails.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Đăng Ký</Button>
            </form>
        </Form>
    );
}

const registerFormSchema = z.object({
    firstName: z
        .string()
        // .min(10, {
        //     message: "First Name must be at least 2 characters.",
        // })
        .max(30, {
            message: "First Name must not be longer than 30 characters.",
        }),
    lastName: z.string().min(10, {
        message: "Username must be at least 2 characters.",
    }),
    gender: z.enum(["male", "female", "other"], {
        invalid_type_error: "Select gender",
        required_error: "Please select gender.",
    }),
    dob: z.date({
        required_error: "A date of birth is required.",
    }),
    address: z.string().min(10, {
        message: "Please type Address",
    }),
    // phone: z.number().gte(5, {
    //     message: "Please type Phone",
    // }),
    phone: z.coerce // SOLUTION
        .number(),
    email: z
        .string({
            required_error: "Please select an email to display.",
        })
        .email(),
    // taxCode: z.number().min(10, {
    //     message: "Please type Phone",
    // }),
});
