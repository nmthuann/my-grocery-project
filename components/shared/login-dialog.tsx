"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { LoginForm } from "./login-form";
import CreateAccount from "./create-account";
interface LoginDialogProps {
    loginOption: boolean;
}

export const LoginDialog: React.FC<LoginDialogProps> = ({ loginOption }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [optionDialog, setOptionDialog] = useState(loginOption);

    const [title, setTitle] = useState(
        loginOption ? "Đăng nhập" : "Tạo một tài khoản"
    );
    const [description, setDescription] = useState(
        loginOption ? "Don’t have an account?" : "Already have an account?"
    );
    const [option, setOption] = useState(loginOption ? "Join here" : "Sign in");

    useEffect(() => {
        setTitle(optionDialog ? "Đăng nhập" : "Tạo một tài khoản");
        setDescription(
            optionDialog ? "Don’t have an account?" : "Already have an account?"
        );
        setOption(optionDialog ? "Đăng ký " : "Đăng nhập");

        console.log("optionDialog changed");
    }, [optionDialog]);

    function handleCloseDialog(): void {
        setOpenDialog(false);
    }

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutSideClick = (event: MouseEvent) => {
            if (ref?.current && !ref?.current.contains(event.target as Node)) {
                alert("Outside Clicked.");
                console.log("Outside Clicked. ");
                setOpenDialog(true);
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    return (
        <div>
            <Dialog onOpenChange={setOpenDialog}>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className="text-base text-blue-900 font-bold"
                    >
                        {title}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] ">
                    <DialogHeader>
                        <DialogTitle className="text-xl text-red-700">
                            {title}
                        </DialogTitle>
                        <div className="">
                            <DialogDescription>
                                {description}
                                <Button
                                    className="text-red-700 text-xs justify-end"
                                    variant="link"
                                    onClick={() => {
                                        if (optionDialog) {
                                            console.log("Login === false");
                                            setOptionDialog(false);
                                            // setLoginOption(true);
                                        } else {
                                            console.log("Login === true");
                                            setOptionDialog(true);
                                        }
                                    }}
                                >
                                    {option}
                                </Button>
                            </DialogDescription>
                        </div>
                    </DialogHeader>

                    {optionDialog ? (
                        <LoginForm />
                    ) : (
                        <CreateAccount onCloseDialog={handleCloseDialog} />
                    )}
                    <p className="px-8 text-center text-xs text-muted-foreground">
                        By clicking continue, you agree to our{" "}
                        <Link
                            href="/"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </DialogContent>
            </Dialog>
        </div>
    );
};
