import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PhotoSlide } from '../../components/PhotoSlide';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import { useAdSense } from '../../Context/adsense';
import {
    Container,
    Box,
    SkeletonFake,
    OtherContainer,
    BreadCrumb,
} from './styles';
import { CardItem } from '../../components/CardItem';
import { Card } from '../../components/Card';

export const ItemPage = () => {
    const { AdItem, adItem, otherDatas, loading } = useAdSense()
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
    const FormattedPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(price)
    }

    return (
        <>
            <BreadCrumb>
                Voce está aqui:
                <Link to='/buynow_front_olx_api/'>Home</Link>
                /
                <Link to={`/buynow_front_olx_api/ads?region=${adItem?.stateId.name}`}>{adItem?.stateId.name}</Link>
                /
                <Link to={`/buynow_front_olx_api/ads?region=${adItem?.stateId.name}&cat=${adItem?.categoryId.slug}`}>{adItem?.categoryId.name}</Link>
                /
                <Link to={`/buynow_front_olx_api/ad/${adItem?._id}`}>{adItem?.title}</Link>
            </BreadCrumb>
            <Container>
                <div className="LeftSide">
                    <Box>
                        <div className="adImage">
                            {loading && <SkeletonFake height={300} />}
                            {adItem?.imagesUrl &&
                                <Slide>
                                    {adItem.imagesUrl.map((item, index) => (
                                        <div key={index} className="each-slide">
                                            <img src={item?.original} alt="" />
                                        </div>
                                    ))}
                                </Slide>
                            }
                        </div>
                        <div className="adInfos">
                            <div className="adName">
                                <h2>{adItem?.title}</h2>
                                {adItem?.createdAt && (
                                    <small>Criado em {formatDated(Number(adItem?.createdAt))}</small>
                                )}
                                {loading && <SkeletonFake height={20} />}
                            </div>
                            <div className="adDescription">
                                <p>{adItem?.description}</p>
                                {loading && <SkeletonFake height={100} />}
                                <hr />
                                {adItem?.views && (
                                    <small>Visualizações:{Number(adItem?.views)}</small>
                                )}

                            </div>
                        </div>
                    </Box>
                </div>
                <div className="RightSide">
                    <Box className='padding'>
                        {loading && <SkeletonFake height={40} />}
                        {adItem?.priceNegotiable && (
                            "Preço Negociável"
                        )}
                        {!adItem?.priceNegotiable && adItem?.price && (
                            <div className="price">
                                Preço: <span>{FormattedPrice(Number(adItem?.price))}</span>
                            </div>
                        )}
                    </Box>
                    {adItem?.userId && (
                        <>
                            <a href={`mailto:${adItem.userId.email}`} target="_blank">Fale com o vendedor</a>
                            <Box className='padding createdBy'>
                                {loading && <SkeletonFake height={50} />}
                                <strong>{adItem.userId.name}</strong>
                                <small>E-mail:{adItem.userId.email}</small>
                                <small>Region: {adItem.stateId.name}</small>

                            </Box>
                        </>
                    )}
                </div>


            </Container>
            <OtherContainer>
                {otherDatas && (
                    <>
                        <h2>Outras ofertas do vendedor</h2>
                        <div className="list">
                            {otherDatas.map((item, index) =>
                                <Card key={String(index)} data={item} />
                            )}
                        </div>
                    </>
                )}
            </OtherContainer>
        </>
    );
}