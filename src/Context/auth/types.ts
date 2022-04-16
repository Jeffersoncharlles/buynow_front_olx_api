import { ReactNode } from "react";

export interface IAuthProps {
    children: ReactNode;
}


export interface IAuthContext {
    SignUp: ({ email, name, password, state }: ISignUp) => void
    SignIn: ({ email, password }: ISignIn) => void;
    validateCookie: () => void;
    user: User | undefined;
    isAuthenticated: boolean;
}

export interface User {
    id: string;
    name: string
    email: string,
    token: string;
}

export interface ISignUp {
    name: string;
    password: string;
    email: string;
    state: string;
}
export interface ISignIn {
    password: string;
    email: string;
}
