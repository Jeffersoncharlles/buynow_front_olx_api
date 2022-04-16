import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { AxiosPromise } from 'axios'
import { IAuthContext, IAuthProps, ISignIn, ISignUp, User } from "./types";
import Cookies from 'js-cookie'



const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProps): JSX.Element => {
    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user

    useEffect(() => {

    }, [])

    const validateCookie = () => {
        const token = Cookies.get('token')
        return (token) ? true : false
    }


    const SignUp = ({ email, name, password, state }: ISignUp) => {

    }

    const SignIn = ({ email, password, }: ISignIn) => {
        const response = api.post<AxiosPromise<User>>('/user/session', { email, password })

        console.log(response)

    }


    return (
        <AuthContext.Provider value={{ SignUp, SignIn, validateCookie, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}