import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import * as yup from 'yup'
import {
    Container,
    Email,
    Password,
    Name,
    Check,
    Region
} from './styles';
import { useAdSense } from '../../Context/adsense';

const schema = yup.object().shape({
    email: yup.string().email('E-mail deve ser válido').trim().required(),
    name: yup.string().trim().required('Nome Obrigatório'),
    region: yup.string().required(),
    password: yup.string().min(6, 'Senha deve ser maior que ${min} caracteres').trim().required()
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

interface IResponse {
    error?: string;
    isAuthenticated: boolean;
}

export const SignUp = () => {
    const { SignUp } = useAuth()
    const { regions } = useAdSense()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await schema.validate({ email, name, region, password, confirmPassword })
            .then(async ({ email, name, password, region }) => {
                const data = await SignUp({ email, password, name, state: region })
                if (data?.error) {
                    setError(data?.error)
                    setEmail('')
                    setPassword('')
                    return;
                }
                navigate('/')

            }).catch((err) => {
                setError(err.errors)
            })
    }

    return (
        <Container>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <Name >
                    <label htmlFor="name">Name</label>
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Name>
                <Email>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Email>
                <Password>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Password>
                <Password>
                    <label htmlFor="Confirme Password">Confirme Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Password>
                <Region >
                    <label htmlFor="region">Region</label>
                    <select
                        required
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    >
                        <option value="0">Selecione um...</option>
                        {regions.map((opt, index) => (
                            <option key={index} value={opt._id}>{opt.name}</option>
                        ))}
                    </select>
                </Region>
                <label htmlFor="SingIn">
                    <button>Cadastrar</button>
                </label>
            </form>
        </Container>
    );
}