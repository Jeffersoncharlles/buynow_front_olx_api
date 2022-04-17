import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/auth';
import * as yup from 'yup'
import {
    Container,
} from './styles';
import { useAdSense } from '../../Context/adsense';

const schema = yup.object().shape({
    email: yup.string().email('E-mail deve ser válido').trim().required(),
    name: yup.string().trim().required('Nome Obrigatório'),
    password: yup.string().min(6, 'Senha deve ser maior que ${min} caracteres').trim().required(),
})

interface IResponse {
    error?: string;
    isAuthenticated: boolean;
}

export const SignUp = () => {
    const { SignUp } = useAuth()
    const { } = useAdSense()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await schema.validate({ email, password }).then(async ({ email, password, name, region }) => {
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

        </Container>
    );
}