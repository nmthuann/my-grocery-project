"use client";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import ResendOTPCountdown from "./resend-otp-countdown";

interface InputOtpFormProps {
    onSendOtpSucceed: () => void;
}

export default function InputOTPForm({ onSendOtpSucceed }: InputOtpFormProps) {
    const [value, setValue] = useState("");
    // use effect size -> render ra btn
    const [otpSendBtn, setOtpSendBtn] = useState(false);
    // Kiểm tra xem có đủ 6 kí tự chưa
    const isValueComplete = value.length === 6;
    const [onBtnLoad, setOnBtnLoad] = useState(false);

    const handleSendOTP = () => {
        // Thực hiện các hành động khi gửi OTP
        if (onBtnLoad) return;
        if (isValueComplete) {
            // Đặt state để hiển thị nút loading
            setOnBtnLoad(true);

            // Thực hiện các hành động khi gửi OTP
            // Ví dụ: gửi yêu cầu OTP đến server

            // Mô phỏng việc gửi OTP bằng cách sử dụng setTimeout
            setTimeout(async () => {
                toast.success("OTP valid!");
                setOnBtnLoad(false);
                onSendOtpSucceed();
            }, 5000);
        }
    };

    return (
        <div>
            <div className="mb-4">
                <Label className="text-base text-gray-500" htmlFor="otp">
                    Enter OTP send to test@mail.com
                </Label>
            </div>

            <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
            >
                <InputOTPGroup className="pl-12">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
            <div className="mt-2 text-center text-sm text-indigo-600">
                {value === "" ? <></> : <>You entered: {value}</>}
            </div>
            <div>
                <ResendOTPCountdown resendTimeout={15} />
            </div>

            {/* {isValueComplete ? (
                <div className="p-5">
                    <Button
                        className="w-full bg-sky-500"
                        // variant="outline"
                        onClick={handleSendOTP}
                    >
                        Send OTP
                    </Button>
                </div>
            ) : (
                <></>
            )} */}
            {isValueComplete ? (
                <div className="p-5">
                    {/* Hiển thị nút "Please wait" khi đang xử lý */}
                    {onBtnLoad ? (
                        <Button
                            disabled
                            className="w-full bg-gradient-to-r from-sky-500 to-indigo-500"
                        >
                            <Loader2 className=" mr-2 h-5 w-4 animate-spin" />
                            Please wait
                        </Button>
                    ) : (
                        // Hiển thị nút "Send OTP" khi không có xử lý
                        <Button
                            className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
                            onClick={handleSendOTP}
                        >
                            Send OTP
                        </Button>
                    )}
                </div>
            ) : (
                <></>
            )}

            <div className="flex items-center justify-center">
                <h3 className="text-xs">Having trouble in create account?</h3>
                <Button className="text-indigo-500 text-xs p-2" variant="link">
                    Get Help
                </Button>
            </div>
        </div>
    );
}
