import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAdsFormatted, IGetAds } from "./types";
import { IAdSense, IAdSenseContext, IAdSenses, ICategories, IRegions } from "./types";


export const AdSenseContext = createContext({} as IAdSenseContext)

export const AdSenseProvider = ({ children }: IAdSense) => {
    const [regions, setRegions] = useState<IRegions[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])
    const [adSenses, setAdSenses] = useState<IAdsFormatted[]>([])

    useEffect(() => {
        Region();
        Category();
        AdSenses();
    }, [])

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

    const AdSenses = async () => {
        try {
            const query = {
                params: {
                    sort: 'desc',
                    limit: 8
                }
            }
            const { data } = await api.get(`ad`)
            console.log(data)
            if (data) {
                setAdSenses(data.adsFormatted);
            }
        } catch (error) {

        }
    }


    return (
        <AdSenseContext.Provider
            value={{
                regions, categories, adSenses,
                AdSenses

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