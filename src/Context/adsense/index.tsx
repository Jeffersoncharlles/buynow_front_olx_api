import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { IAdSense, IAdSenseContext, IRegions } from "./types";


export const AdSenseContext = createContext({} as IAdSenseContext)

export const AdSenseProvider = ({ children }: IAdSense) => {
    const [regions, setRegions] = useState<IRegions[]>([])

    useEffect(() => {
        Region();
    }, [])

    const Region = async () => {
        const { data } = await api.get<IRegions[]>('states')
        if (data) {
            setRegions(data)
        }
    }


    return (
        <AdSenseContext.Provider value={{ regions }}>
            {children}
        </AdSenseContext.Provider>
    );
}

export const useAdSense = () => {
    const context = useContext(AdSenseContext)
    return context;
} 