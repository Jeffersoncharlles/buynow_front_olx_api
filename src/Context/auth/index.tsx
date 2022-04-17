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
        validateCookie();
    }, [])

    const validateCookie = () => {
        const token = Cookies.get('token')
        if (token) {
            setUser(JSON.parse(token))
        }
        return (token) ? true : false
    }


    const SignUp = ({ email, name, password, state }: ISignUp) => {

    }

    const SignIn = async ({ email, password, remember }: ISignIn) => {

        try {
            const { data } = await api.post('/user/session', { email, password })
            const { token, name, id } = data
            if (!token) {
                return data.error
            }

            setUser({
                token,
                name,
                email,
                id
            })

            if (remember) {
                Cookies.set('token', token, { expires: 999 });
            }
            Cookies.set('token', JSON.stringify(data),);

        } catch (error: any) {
            return error.response.data
        }
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