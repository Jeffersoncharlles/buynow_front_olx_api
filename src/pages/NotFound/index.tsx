import {
    Container,
} from './styles';
import { Link } from 'react-router-dom'

export const NotFound = () => {

    return (
        <Container>
            <h1>404!not found</h1>
            <Link to="/">Voltar para a Home</Link>
        </Container>
    );
}