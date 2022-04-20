import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CardItem } from '../../components/CardItem';
import { useAdSense } from '../../Context/adsense';
import {
    Container,
    LeftSide,
    RightSide,
} from './styles';
let time = 0;
export const Ads = () => {
    const { categories, regions, AdsFilter, adFilter } = useAdSense()
    const navigate = useNavigate()


    const useQueryString = () => {
        return new URLSearchParams(useLocation().search)
    }
    const query = useQueryString()
    const SearchQ: any = query.get('q') !== null ? query.get('q') : '';
    const SearchCategory: any = query.get('cat') !== null ? query.get('cat') : '';
    const SearchRegion: any = query.get('region') !== null ? query.get('region') : '';

    const [q, setQ] = useState(SearchQ);
    const [category, setCategory] = useState(SearchCategory);
    const [region, setRegion] = useState(SearchRegion)
    const [resultOpacity, setResultOpacity] = useState(1)

    useEffect(() => {
        let queryString: string[] = []
        q ? queryString.push(`q=${q}`) : ''
        category ? queryString.push(`cat=${category}`) : ''
        region ? queryString.push(`region=${region}`) : ''

        navigate(`?${queryString.join('&')}`, { replace: true })
        //mudar a url 

        if (time > 0) {
            clearTimeout(time)
        }
        time = setTimeout(async () => {
            await AdsFilter({ q, category, region })
            setResultOpacity(1)
        }, 1000)
        setResultOpacity(0.2);

    }, [q, category, region])



    return (
        <Container>
            <LeftSide >
                <form method="get">
                    <input
                        type="text"
                        name='q'
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        placeholder='Search'
                    />
                    <label htmlFor="Region">Região</label>
                    <select name="region" value={region} onChange={e => setRegion(e.target.value)}>
                        <option></option>
                        {regions.map((item) => (
                            <option key={item._id} value={item.name}>{item.name}</option>
                        ))}
                    </select>

                    <label htmlFor="Category">Categoria</label>
                    <ul>
                        {categories.map((item) => (
                            <li onClick={() => setCategory(item.slug)} key={item._id} className={category === item.slug ? 'active' : ''}>
                                <img src={item.img} alt={item.name} />
                                <span> {item.name} </span>
                            </li>
                        ))}
                    </ul>
                </form>
            </LeftSide>
            <RightSide >
                <h2>Resultados</h2>
                <article style={{ opacity: resultOpacity }}>
                    {adFilter.map((item) => (
                        <CardItem key={item.id} data={item} />
                    ))}
                </article>
            </RightSide>

        </Container>
    );
}