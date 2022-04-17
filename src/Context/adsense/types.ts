import { ReactNode } from "react";

export interface IAdSense {
    children: ReactNode;
}


export interface IAdSenseContext {
    regions: IRegions[]
}

export interface IRegions {
    _id: string;
    name: string;
}