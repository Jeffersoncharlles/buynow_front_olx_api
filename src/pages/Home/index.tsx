import { useAdSense } from '../../Context/adsense';
import { Link } from 'react-router-dom'
import {
    Container,
    SearchContainer,
    SearchBox,
    CategoryList
} from './styles';
import { CardItem } from '../../components/CardItem';

export const Home = () => {
    const { regions, categories, ads, } = useAdSense()

    return (
        <>
            <SearchContainer>
                <Container>
                    <SearchBox>

                        <form method='get' action='/ads'>
                            <input type="text" name='q' placeholder='search now' />
                            <select name="region">
                                <option>Qualquer</option>
                                {regions.map((opt, index) => (
                                    <option key={index} value={opt._id}>{opt.name}</option>
                                ))}
                            </select>
                            <button>Search</button>
                        </form>

                    </SearchBox>
                    <CategoryList>

                        {categories.map((c) => (
                            <Link key={c._id} to={`/ads?cat=${c.slug}`} className={`categoryItem  ${c.slug}`}>
                                <img src={c.img} alt={c.name} />
                                <span>{c.name}</span>
                            </Link>

                        ))}

                    </CategoryList>
                </Container>
            </SearchContainer>
            <Container>
                <h2>Anúncios Recentes</h2>
                <div className="list">
                    {ads.map((item, index) => (
                        <CardItem key={index} data={item} />
                    ))}
                </div>
                <Link to="/ads" className='seeAllLink'>View all</Link>

                <hr />

                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi alias nihil provident sunt dignissimos, nostrum eligendi quia, incidunt autem voluptatem fugit. Dolore qui dignissimos tempore vero, deleniti laborum repellendus nihil!</p>
            </Container>
        </>
    );
}