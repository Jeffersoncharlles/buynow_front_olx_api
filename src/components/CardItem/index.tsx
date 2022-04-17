import { Link } from 'react-router-dom';
import {
    Container,
    ItemImage,
    ItemName,
    ItemPrice,
} from './styles';

interface ICardItem {
    data: {
        id: string;
        title: string;
        price: number;
        priceNegotiable: boolean;
        image: string;
    }
}

export const CardItem = ({ data }: ICardItem) => {

    const priceFormatted = data.priceNegotiable ?
        'Preço Negociável' :
        data.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <Container>
            <Link to={`/ad/${data.id}`}>
                <ItemImage>
                    <img src={data.image} alt={data.title} />
                </ItemImage>
                <div>
                    <ItemName >
                        {data.title}
                    </ItemName>
                    <ItemPrice >
                        {priceFormatted}
                    </ItemPrice>
                </div>
            </Link>
        </Container>
    );
}