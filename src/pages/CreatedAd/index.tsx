import { useRef, useState } from 'react';
import { useAdSense } from '../../Context/adsense';
import { useNavigate } from 'react-router-dom'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import * as yup from 'yup'
import {
    Container,
    Title,
    Category,
    Price,
    PriceNegotiable,
    Description,
    Imagens,
} from './styles';

const schema = yup.object().shape({
    title: yup.string().trim().required(),
    category: yup.string().trim().required(),
    price: yup.string().min(4)
})

export const CreatedAd = () => {

    const { categories, createdAd } = useAdSense()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [priceNegotiable, setPriceNegotiable] = useState(false)
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const fileField: any = useRef();

    const priceMaskBR = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,//incluir separador de milhares
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await schema.validate({ title, category, price }).then(async ({ title, category, price }) => {
            setError('')
            const formData = new FormData()
            formData.append('title', title)
            formData.append('price', String(price))
            formData.append('priceNegotiable', String(priceNegotiable))
            formData.append('categoryId', category)
            formData.append('description', description)

            if (fileField.current.files.length > 0) {
                for (let i = 0; i < fileField.current.files.length; i++) {
                    formData.append('img', fileField.current.files[i])
                }
            }
            createdAd(formData)
        }).catch((err) => {
            setError(err.errors)
        })
    }

    return (
        <Container>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
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
                    <MaskedInput
                        mask={priceMaskBR}
                        placeholder="R$"
                        disabled={priceNegotiable}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Price>
                <PriceNegotiable>
                    <label htmlFor="Preço Negociável">Preço Negociável</label>
                    <input
                        type="checkbox"
                        checked={priceNegotiable}
                        onChange={e => setPriceNegotiable(!priceNegotiable)}
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