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
    const { categories, regions, AdsFilter, adFilter, loading, filterTotal } = useAdSense()
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
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        (async function () {
            await AdsFilter({})
        })()
    }, [currentPage])
    const offset = (currentPage - 1) * 2;


    useEffect(() => {
        let queryString: string[] = []
        q ? queryString.push(`q=${q}`) : ''
        region ? queryString.push(`region=${region}`) : ''
        category ? queryString.push(`cat=${category}`) : ''

        navigate(`?${queryString.join('&')}`, { replace: true })
        //mudar a url 

        if (time > 0) {
            clearTimeout(time)
        }
        time = setTimeout(async () => {
            await AdsFilter({ q, category, region, offset })
            setCurrentPage(1)
            setResultOpacity(1)
        }, 1000)
        setResultOpacity(0.2);

    }, [q, category, region])

    useEffect(() => {
        if (adFilter.length > 0) {
            setPageCount(Math.ceil(filterTotal / adFilter.length))
        } else {
            setPageCount(0)
        }

    }, [filterTotal])

    let pagination: any = [];
    for (let i = 1; i <= pageCount; i++) {
        pagination.push(i)
    }

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
                {loading && (
                    <p>Carregando...</p>
                )}
                {!loading && adFilter.length === 0 && (
                    <p>Nao encontramos resultados</p>
                )}

                <article style={{ opacity: resultOpacity }}>
                    {adFilter.map((item) => (
                        <CardItem key={item.id} data={item} />
                    ))}
                </article>

                <div>{pagination.map((item: any, index: any) => (
                    <p key={index}
                        className={item === currentPage ? 'active' : ''}
                        onClick={() => setCurrentPage(item)}
                    >{item}
                    </p>
                ))}</div>
            </RightSide>

        </Container>
    );
}