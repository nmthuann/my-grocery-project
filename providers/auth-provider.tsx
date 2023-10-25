"use client";
import axios from "axios";
import React, { createContext, useContext, ReactNode } from "react";
import toast from "react-hot-toast";

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = React.useState<User | null>(null);

    const login = (userData: User) => {
        setUser(userData);
    };

    const logout = async () => {
        const res = await axios.post("/api/auth/logout", {});
        toast.success(res.data);
        setUser(null);
    };

    const contextValue = { user, login, logout };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
