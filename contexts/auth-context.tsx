// import React, { createContext, useContext, ReactNode } from "react";

// interface User {
//     name: string;
//     email: string;
// }

// interface AuthContextType {
//     user: User | null;
//     login: (userData: User) => void;
//     logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export function useAuth() {
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// }
