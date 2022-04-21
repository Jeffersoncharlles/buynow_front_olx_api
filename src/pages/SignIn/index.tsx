import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import * as yup from 'yup'
import {
    Container,
    Title,
    Email,
    Password,
    Check,
} from './styles';

interface IResponse {
    error?: string;
    isAuthenticated: boolean;
}

const schema = yup.object().shape({
    email: yup.string().email('E-mail deve ser válido').trim().required(),
    password: yup.string().min(6, 'Senha deve ser maior que ${min} caracteres').trim().required(),
})

export const SignIn = () => {
    const { SignIn } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await schema.validate({ email, password }).then(async ({ email, password }) => {
            const data: IResponse = await SignIn({ email, password, remember })
            if (data?.error) {
                setError(data?.error)
                setEmail('')
                setPassword('')
                return;
            }
            navigate('/buynow_front_olx_api/')

        }).catch((err) => {
            setError(err.errors)
        })
    }

    return (
        <Container>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <Email>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Email>
                <Password className="">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Password>

                <Check>
                    <label htmlFor="remember password">
                        Remember
                    </label>
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                    />
                </Check>
                <label htmlFor="SingIn">
                    <button>Login</button>
                </label>
            </form>
        </Container>
    );
}