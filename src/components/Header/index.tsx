import {
    Container,
} from './styles';
import { Link } from 'react-router-dom'

export const Header = () => {

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
                        <li>
                            <Link to="signin">Login</Link>
                        </li>
                        <li>
                            <Link to="signup">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="signup" className='created'>Post um anúncio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    );
}