import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface IProduct {
    id: number;
    title: string;
    category: string;
    image: string | StaticImageData;
    sale: boolean | undefined;
    price: number;
    quantity:number;
    range: any;
    sortby: string;
    rating: number;
}

const initialState: Array<IProduct> = []

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if(state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                return state.map((item) => {
                    return item.id === action.payload.id
                    ? {...item, quantity: item.quantity + 1 }
                    : item;
                });
            }
        },
        
    
    
removeFromCart: (state, action: PayloadAction<number>) => {
    const id = action.payload 
    return state.filter((item) => item.id !== id)
}

},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
