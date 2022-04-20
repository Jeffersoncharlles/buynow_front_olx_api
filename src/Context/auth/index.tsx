import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAuthContext, IAuthProps, ISignIn, ISignUp, User } from "./types";
import Cookies from 'js-cookie'

const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: IAuthProps): JSX.Element => {
    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user?.token

    useEffect(() => {
        validateCookie();
    }, [])

    const validateCookie = () => {
        const token = Cookies.get('token')
        let isUser
        if (token) {
            isUser = JSON.parse(String(token))
            if (isUser?.token && user !== null) {
                setUser(isUser)
            }

        }
        return (isUser !== null) ? true : false
    }

    const SignUp = async ({ email, name, password, state }: ISignUp) => {
        try {
            const { data } = await api.post('/user/signup', { name, email, password, state })
            const { token, id } = data
            setUser({ token, name, email, id })
            Cookies.set('token', JSON.stringify(data));
        } catch (error: any) {
            return error.response.data
        }
    }

    const SignIn = async ({ email, password, remember }: ISignIn) => {
        try {
            const { data } = await api.post('/user/session', { email, password })
            const { token, name, id } = data
            if (!token) {
                return data.error
            }
            setUser({ token, name, email, id })
            if (remember) {
                Cookies.set('token', token, { expires: 60 * 60 * 24 * 30 });// 30 days
            }
            Cookies.set('token', JSON.stringify(data));

        } catch (error: any) {
            return error.response.data
        }
    }

    const Logout = async () => {
        Cookies.remove('token')
    }

    return (
        <AuthContext.Provider
            value={{
                SignUp, SignIn, validateCookie, Logout,
                user, isAuthenticated
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}