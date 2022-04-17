import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    Box,
    SkeletonFake,

} from './styles';

export const ItemPage = () => {
    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [adInfo, setInfo] = useState([]);

    return (
        <Container>
            <div className="LeftSide">
                <Box>
                    <div className="adImage">
                        {loading && <SkeletonFake height={300} />}
                    </div>
                    <div className="adInfos">
                        <div className="adName">
                            {loading && <SkeletonFake height={20} />}
                        </div>
                        <div className="adDescription">
                            {loading && <SkeletonFake height={100} />}
                        </div>
                    </div>
                </Box>
            </div>
            <div className="RightSide">
                <Box className='padding'>
                    {loading && <SkeletonFake height={40} />}
                </Box>

                <Box className='padding'>
                    {loading && <SkeletonFake height={50} />}
                </Box>
            </div>
        </Container>
    );
}