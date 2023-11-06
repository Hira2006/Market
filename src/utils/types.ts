import { StaticImageData } from "next/image";

export type Product = {
    type: string ;
    id : number;
    title : string;
    category : string;
    price : number;
    sale: boolean | undefined;
    image : StaticImageData | undefined;
    range: any;
    sortby: string;
    rating: number;
}