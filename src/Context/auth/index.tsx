import { createContext, ReactNode, useContext } from "react";

export interface IAuthProps {
    children: ReactNode;
}


export interface IAuthContext {
    SignUp: ({ email, name, password }: ISignUp) => void

}

export interface User {
    uid?: string;
    name: string;
    email?: string | null;
    avatarUrl?: string | null
}

export interface ISignUp {
    name: string;
    password: string;
    email: string;
}


const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProps): JSX.Element => {


    const SignUp = ({ email, name, password }: ISignUp) => {

    }


    return (
        <AuthContext.Provider value={{ SignUp }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}