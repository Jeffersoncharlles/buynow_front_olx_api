import { ReactNode } from "react";

export interface IAdSense {
    children: ReactNode;
}


export interface IAdSenseContext {
    regions: IRegions[]
    categories: ICategories[]
    adSenses: IAdsFormatted[]
    AdSenses: () => Promise<void>
}

export interface IRegions {
    _id: string;
    name: string;
}

export interface ICategories {
    _id: string;
    name: string;
    slug: string;
    img: string;
    id: string;
}

export interface IAdSenses {
    adsFormatted: IAdsFormatted[]
    totalAds: number;
}

export interface IAdsFormatted {
    id: string;
    title: string;
    price: number;
    priceNegotiable: boolean;
    image: string;
}

export interface IGetAds {
    sort?: string;
    offset?: number;
    limit?: number;
    q?: string;
    cat?: string;
    region?: string;
}