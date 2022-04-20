import { useAdSense } from '../../Context/adsense';
import {
    Container,
} from './styles';

export const Ads = () => {
    const { categories, regions, ads } = useAdSense()

    return (
        <Container>

        </Container>
    );
}