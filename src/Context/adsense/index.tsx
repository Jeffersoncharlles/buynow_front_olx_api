import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAdSense, IAdSenseContext, ICategories, IRegions } from "./types";


export const AdSenseContext = createContext({} as IAdSenseContext)

export const AdSenseProvider = ({ children }: IAdSense) => {
    const [regions, setRegions] = useState<IRegions[]>([])
    const [categories, setCategories] = useState<ICategories[]>([])

    useEffect(() => {
        Region();
        Category();
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


    return (
        <AdSenseContext.Provider value={{ regions, categories }}>
            {children}
        </AdSenseContext.Provider>
    );
}

export const useAdSense = () => {
    const context = useContext(AdSenseContext)
    return context;
} 