"use client";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import InputOTPForm from "./input-otp-form";
import VerifyEmailForm from "./verify-email-form";
interface CreateAccountProps {
    onCloseDialog: () => void;
}

export default function CreateAccount({ onCloseDialog }: CreateAccountProps) {
    // const locations = await getTasks();
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    const [otpSucceeded, setOtpSucceeded] = useState(false);

    const router = useRouter();

    // Hàm này sẽ được gọi khi email được xác nhận thành công
    const handleEmailConfirmation = () => {
        setEmailConfirmed(true); // Cập nhật trạng thái xác nhận email
    };
    const handleSendOtpSucceeded = () => {
        setOtpSucceeded(true); // Cập nhật trạng thái xác nhận email
        router.push("/auth/create-user");
        onCloseDialog();
    };

    return (
        <div>
            {!emailConfirmed ? (
                <VerifyEmailForm onEmailConfirmed={handleEmailConfirmation} />
            ) : (
                <InputOTPForm onSendOtpSucceed={handleSendOtpSucceeded} />
            )}
        </div>
    );
}

{
    /* <Breadcrumb>
    <BreadcrumbList>
        <BreadcrumbItem>
          
            <BreadcrumbPage>Create Account</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
            <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
            <BreadcrumbPage>Confirm Email</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
            <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
            <BreadcrumbPage>Input OTP</BreadcrumbPage>
        </BreadcrumbItem>
    </BreadcrumbList>
</Breadcrumb>; */
}

// async function getTasks(): Promise<ILocation[]> {
//     const data = await fs.readFile(
//         path.join(process.cwd(), path.join(process.cwd(), "/data/vietnam.json"))
//     );

//     const location = JSON.parse(Promise.all(data));

//     return await location; // z.array(taskSchema).parse(tasks);
// }
