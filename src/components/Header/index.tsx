import {
    Container,
} from './styles';
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/auth';

export const Header = () => {
    const { isAuthenticated } = useAuth()

    return (
        <Container>
            <div className="container">
                <div className="container-logo">
                    <Link to="/">
                        <span>Buy</span><span>Now</span>
                    </Link>
                </div>

                <nav>
                    <ul>

                        {isAuthenticated ? (
                            <>
                                <li>
                                    <Link to="/post-an-ad" className='created'>Post um anúncio</Link>
                                </li>
                                <li>
                                    <Link to="/profile">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className='created'>Post um anúncio</Link>
                                </li>
                            </>
                        )}

                    </ul>
                </nav>
            </div>
        </Container>
    );
}