import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { IData, IAdsFormatted, OtherData } from "./types";
import { IAdSense, IAdSenseContext, ICategories, IRegions } from "./types";

export const AdSenseContext = createContext({} as IAdSenseContext)

export const AdSenseProvider = ({ children }: IAdSense) => {
    const navigate = useNavigate()
    const [regions, setRegions] = useState<IRegions[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [ads, setAds] = useState<IAdsFormatted[]>([])
    const [adItem, setAdItem] = useState<IData>()
    const [otherDatas, setOtherDatas] = useState<OtherData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Region();
        Category();
        Ads();
    }, [])

    useEffect(() => {
        Ads();
    }, [adItem])

    const Region = async () => {
        const { data } = await api.get<IRegions[]>('states')
        if (data) {
            setRegions(data)
        }
    }
    const Category = async () => {
        const { data } = await api.get<ICategories[]>('categories')
        if (data) {
            setCategories(data)
        }
    }

    const Ads = async () => {
        try {
            const query = {
                params: {
                    sort: 'desc',
                    limit: 8
                }
            }
            const { data } = await api.get(`ad`, query)
            if (data) {
                setAds(data.adsFormatted);
            }
        } catch (error) {

        }
    }

    const AdItem = async (id: string, other?: boolean) => {
        try {
            const { data } = await api.get(`ad/${id}/${other}`)
            if (data.data) {
                setAdItem(data.data)
                setOtherDatas(data.otherDatas)
                setLoading(false)
            }
        } catch (error) {
        }
    }

    const createdAd = async (params: any) => {
        try {
            const { data } = await api.post('/ad/add', params)
            if (data) {
                navigate(`/ad/${data._id}`)
            }
        } catch (error) {

        }
    }


    return (
        <AdSenseContext.Provider
            value={{
                regions, categories, ads, adItem, loading, otherDatas,
                Ads, AdItem, createdAd
            }}
        >
            {children}
        </AdSenseContext.Provider>
    );
}

export const useAdSense = () => {
    const context = useContext(AdSenseContext)
    return context;
} 