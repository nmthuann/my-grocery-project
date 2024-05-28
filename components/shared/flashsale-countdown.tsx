"use client";
import { useState, useEffect } from "react";

interface FlashSaleCountdownProps {
    endTime: string;
}

const FlashSaleCountdown: React.FC<FlashSaleCountdownProps> = ({ endTime }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(endTime) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, endTime]);

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (timeLeft[interval as keyof typeof timeLeft]) {
            timerComponents.push(
                <span key={interval}>
                    {timeLeft[interval as keyof typeof timeLeft]} {interval}{" "}
                </span>
            );
        }
    });

    return (
        <div className="flex items-center space-x-2 text-2xl font-semibold text-blue-900">
            {timerComponents.length ? (
                timerComponents
            ) : (
                <span>Flash Sale Ended!</span>
            )}
            <span className="relative flex  h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-300"></span>
            </span>
        </div>
    );
};

export default FlashSaleCountdown;
