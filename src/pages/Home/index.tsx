import { useAdSense } from '../../Context/adsense';
import { Link } from 'react-router-dom'
import {
    Container,
    SearchContainer,
} from './styles';

export const Home = () => {
    const { regions, categories } = useAdSense()

    return (
        <>
            <SearchContainer>
                <div className="searchbox">
                    <form method='get' action='/ads'>
                        <input type="text" name='q' placeholder='search now' />
                        <select name="region">
                            <option>Qualquer estado</option>
                            {regions.map((opt, index) => (
                                <option key={index} value={opt._id}>{opt.name}</option>
                            ))}
                        </select>
                        <button>Search</button>
                    </form>
                </div>
                <div className="categorylist">
                    {categories.map((c) => (
                        <Link key={c._id} to={`/ads?cat=${c.slug}`} className={`categoryItem  ${c.slug}`}>
                            <img src={c.img} alt={c.name} />
                            <span>{c.name}</span>
                        </Link>

                    ))}
                </div>
            </SearchContainer>
            <Container>
                ...
            </Container>
        </>
    );
}