import {
    Container,
} from './styles';

export interface Image2 {
    url: string;
    default: boolean;
}

export interface OtherData {
    id: string;
    title: string;
    price: number;
    image: Image2[];
}
interface ICard {
    data: OtherData
}

export const Card = ({ data }: ICard) => {

    return (
        <Container>

        </Container>
    );
}