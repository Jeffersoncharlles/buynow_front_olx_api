import { ReactNode } from "react";

export interface IAdSense {
    children: ReactNode;
}


export interface IAdSenseContext {
    regions: IRegions[]
    categories: ICategories[]
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