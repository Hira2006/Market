"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineHeart} from "react-icons/ai"
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

export interface IProduct {
    id: number;
    image: string | StaticImageData;
    category: string;
    title: string;
    price:string ;
    sale: boolean | undefined;
    range: any;
    sortby: string;
    rating: number;
}



const ProductCard = ({ id, image, category, sale, title, price, range, sortby, rating}: IProduct) => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const getRating = () => {
        const randomNumber = (min: number, max: number) => {
            return Math.ceil(Math.random() * (max - min) + min);
        };
    
        switch (randomNumber(0, 5)) {
            case 0:
             return (
                <div className='flex justify-center pt-4 pb-2'>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                </div>
             );
             case 1:
                return (
                    <div className='flex justify-center pt-4 pb-2'>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                 );
                 case 2:
                return (
                    <div className='flex justify-center pt-4 pb-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                 );
                 case 3:
                return (
                    <div className='flex justify-center pt-4 pb-2 '>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                 );
                 case 4:
                return (
                    <div className='flex justify-center pt-4 pb-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                 );
                 case 5:
                return (
                    <div className='flex justify-center pt-4 pb-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                 );

    
            default:
                return <div></div>
        }
    };

    const addProductToCart = () => {

        const payload = {
            id,
            image,
            title,
            category,
            sale,
            price: parseFloat(price),
            quantity: 1,
            range,
            sortby,
            rating
        };

        dispatch(addToCart(payload));
        toast.success("Added to Cart!!")
    };


  return (
    <div className='group cursor-pointer ' onClick={() => router.push(`/details/${id}`)}>

    <div className='border border-r-gray-200'>
        <div className='text-center border-b border-gray-200'>
            
        <Image className='w-full h-[350px] ' width={1000} height={1142} src={image} alt={title} />
        </div>

<div className='px-8 py-4'>
    <p className='text-gray-500 text-[14px] font-medium'>{category}</p>
    <h2 className='font-medium'>{title}</h2>

    <div className='mt-3 flex text-[#ffb21d] items-center'>
    {getRating()}
        <p className='text-gray-600 text-[14px] ml-2'>(3 Review)</p>
    </div>

    <div className='flex justify-between items-center mt-4'>
        <h2 className='font-medium text-accent text-xl'>${price}</h2>
        <div
        className='flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent'>
            <AiOutlineHeart />
    </div>
        <div
        className='flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent'
        onClick={addProductToCart}>
            <AiOutlineShoppingCart />
    </div>
</div>
</div>
    </div>
    </div>
  )
}

export default ProductCard