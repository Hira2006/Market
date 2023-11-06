import React from 'react'
import { useAppDispatch } from "../redux/hooks"
import { RxCross1 } from 'react-icons/rx'
import { removeFromCart } from "../redux/features/cartSlice"
import Image, { StaticImageData } from 'next/image';

interface propsType {
    id: number;
    image: string | StaticImageData ;
    title: string;
    price: string;
    quantity: number;
}

const CartProduct: React.FC<propsType> = ({
    id,
    image,
    title,
    price,
    quantity,
}) => {
    const dispatch = useAppDispatch();

return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
            <Image className='h-[40px] w-[40px]' src={image} alt={title} width={1000} height={1200} />
            <div className='space-y-2'>
                <h3 className='font-medium'>{title}</h3>
                <p className='text-gray-600 text-[14px]'>
                    {quantity} x ${price}.00
                </p>
            </div>
        </div>

        <RxCross1
        className='cursor-pointer'
        onClick={() => dispatch(removeFromCart(id))}
        />
    </div>
  );
};

export default CartProduct;