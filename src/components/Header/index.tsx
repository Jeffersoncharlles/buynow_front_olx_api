import {
    Container,
} from './styles';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/auth';

export const Header = () => {
    const { isAuthenticated, Logout } = useAuth();


    const handleLogout = () => {
        Logout()
        window.location.href = '/'
        // navigation('/')
    }

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
                                    <Link to="/buynow_front_olx_api/post-an-ad" className='created'>Post um anúncio</Link>
                                </li>
                                <li>
                                    <Link to="/buynow_front_olx_api/profile">Minha Conta</Link>
                                </li>
                                <li>
                                    <button onClick={() => handleLogout()}>Sair</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/buynow_front_olx_api/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/buynow_front_olx_api/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/buynow_front_olx_api/signin" className='created'>Post um anúncio</Link>
                                </li>
                            </>
                        )}

                    </ul>
                </nav>
            </div>
        </Container>
    );
}