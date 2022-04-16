import { useState } from 'react';
import {
    Container,
    Title,
    Email,
    Password,
    Check,
} from './styles';

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container>
            {/* <Title>Login</Title> */}
            <form>
                <Email>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Email>
                <Password className="">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Password>

                <Check>
                    <label htmlFor="remember password">
                        Remember
                    </label>
                    <input
                        type="checkbox"
                    />
                </Check>
                <label htmlFor="SingIn">
                    <button>Login</button>
                </label>
            </form>
        </Container>
    );
}