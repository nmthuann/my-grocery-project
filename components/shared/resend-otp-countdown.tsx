"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

interface ResendOTPCountdownProps {
    resendTimeout: number;
}

const ResendOTPCountdown: React.FC<ResendOTPCountdownProps> = ({
    resendTimeout,
}) => {
    const [countdown, setCountdown] = useState<number>(resendTimeout);
    const [resending, setResending] = useState<boolean>(false);

    useEffect(() => {
        if (countdown === 0) return;

        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 1) {
                    clearInterval(interval);
                    setResending(true);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    const handleResendOTP = () => {
        toast.success("Pleace check again email to recieve new OTP.");
        // call API: send Mail agaim=n + update OTP in redis
        setCountdown(resendTimeout);
        setResending(false);
    };

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    const formattedCountdown = `${String(minutes).padStart(2, "0")}:${String(
        seconds
    ).padStart(2, "0")}`;

    return (
        <div>
            {resending ? (
                <div className="flex items-center justify-start">
                    <h3 className=" text-sm">
                        Resend OTP in {formattedCountdown}
                    </h3>
                    <Button
                        variant="link"
                        className="text-xs mt-2 text-indigo-500"
                        onClick={handleResendOTP}
                    >
                        Resend
                    </Button>
                </div>
            ) : (
                <h3 className="mr-8 text-sm text-indigo-500">
                    Resend OTP in {formattedCountdown}
                </h3>
            )}
        </div>
    );
};

export default ResendOTPCountdown;
