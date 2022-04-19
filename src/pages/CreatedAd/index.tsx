import { useRef, useState } from 'react';
import { useAdSense } from '../../Context/adsense';
import {
    Container,
    Title,
    Category,
    Price,
    PriceNegotiable,
    Description,
    Imagens,
} from './styles';

export const CreatedAd = () => {
    const { categories } = useAdSense()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [priceNegotiable, setPriceNegotiable] = useState(false)
    const [description, setDescription] = useState('')

    const fileField: any = useRef();

    return (
        <Container>
            {/* <p>{error}</p> */}
            <form>
                <Title >
                    <label htmlFor="titulo">Titulo</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Title>
                <Category>
                    <label htmlFor="Categoria">Categoria</label>
                    <select
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="0">Selecione um...</option>
                        {categories.map((opt, index) => (
                            <option key={index} value={opt._id}>{opt.name}</option>
                        ))}
                    </select>
                </Category>
                <Price>
                    <label htmlFor="Preço">Preço</label>

                </Price>
                <PriceNegotiable>
                    <label htmlFor="Preço Negociável">Preço Negociável</label>
                    <input
                        type="checkbox"
                        checked={priceNegotiable}
                        onChange={e => setPriceNegotiable(!priceNegotiable)}
                        required
                    />
                </PriceNegotiable>
                <Description >
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </Description>
                <Imagens >
                    <label htmlFor="Upload Imagens">Imagens (1 até 8 )</label>
                    <input
                        type="file"
                        multiple
                        ref={fileField}
                    />
                </Imagens>

                <label htmlFor="Criar Anuncio">
                    <button>Criar Anúncio</button>
                </label>
            </form>
        </Container>
    );
}