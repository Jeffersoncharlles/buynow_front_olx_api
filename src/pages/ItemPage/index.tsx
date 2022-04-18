import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAdSense } from '../../Context/adsense';
import {
    Container,
    Box,
    SkeletonFake,

} from './styles';

export const ItemPage = () => {
    const { AdItem, adItem, loading } = useAdSense()
    const { id } = useParams()



    useEffect(() => {
        if (id) {
            AdItem(String(id))
        }
    }, [])

    const formatDated = (date: number) => {
        return new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return (
        <Container>
            <div className="LeftSide">
                <Box>
                    <div className="adImage">
                        {loading && <SkeletonFake height={300} />}
                    </div>
                    <div className="adInfos">
                        <div className="adName">
                            <h2>{adItem?.title}</h2>
                            <small>Criado em {formatDated(Number(adItem?.createdAt))}</small>
                            {loading && <SkeletonFake height={20} />}
                        </div>
                        <div className="adDescription">
                            <p>{adItem?.description}</p>
                            {loading && <SkeletonFake height={100} />}
                            <hr />
                            <small>Visualizações:{adItem?.views}</small>
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