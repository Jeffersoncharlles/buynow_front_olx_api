import { ReactNode } from "react";

export interface IAdSense {
    children: ReactNode;
}


export interface IAdSenseContext {
    regions: IRegions[];
    categories: ICategories[];
    ads: IAdsFormatted[];
    adFilter: IAdsFormatted[];
    Ads: () => Promise<void>;
    AdsFilter: ({ q, category, region }: IFilter) => Promise<void>;
    AdItem: (id: string) => Promise<void>;
    adItem: IData | undefined;
    otherDatas: OtherData[]
    loading: boolean;
    createdAd: (params: any) => Promise<void>
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
/////////
export interface Image {
    url: string;
    default: boolean;
}

export interface StateId {
    _id: string;
    name: string;
}

export interface UserId {
    _id: string;
    name: string;
    email: string;
}

export interface CategoryId {
    _id: string;
    name: string;
    slug: string;
    img: string;
    id: string;
}

export interface IData {
    _id: string;
    title: string;
    price: number;
    priceNegotiable: boolean;
    description: string;
    views: number;
    status: string;
    images: Image[];
    stateId: StateId;
    userId: UserId;
    categoryId: CategoryId;
    createdAt: number;
    updatedAt: number;
    __v: number;
    imagesUrl: {
        original: string;
        thumbnail: string;
    }[];
    id: string;
}

export interface Image2 {
    url: string;
    default: boolean;
}

export interface OtherData {
    id: string;
    title: string;
    price: number;
    image: Image2[];
}

export interface IAdSenseItem {
    data: IData;
    otherDatas: OtherData[];
}


export interface IFilter {
    q?: string;
    category?: string
    region?: string;
}