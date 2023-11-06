"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Data } from "@/utils/productData"
import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import {MdCompareArrows} from "react-icons/md"
import { RiFacebookBoxFill, RiTwitterFill } from 'react-icons/ri';


const DetailPage = () => {
const params = useParams()
const [productData, setProductData] = useState<any>();

 useEffect(() => {
    const id = params.id;
    const getProductData = Data.filter((product) => product.id.toString() === id)[0];
    setProductData(getProductData);
 });


  return (
    <div>
     <div className=' py-4 mb-8 '>
      <div className='container flex gap-4 items-center text-gray-500 '>
        <Link href="/" className="cursor-pointer">
          Home
        </Link>

        <div className='w-[30px] h-[2px] bg-gray-400' />
        <p className='capitalize'>{productData?.category[0]}</p>
        <div className='w-[30px] h-[2px] bg-gray-400' />
        <p>{productData?.title}</p>
      </div>
     </div>

     <div className='container pt-8 bg-gray-100'>
      <div className='grid md:grid-cols-2 gap-16'>
        <div>
          <Image 
          className='w-full h-full pl-8'
          src={productData?.image}
          width={1000}
          height={1200}
          alt={productData?.title}
          />
        </div>

        <div className='space-y-4'>
          <div className='flex items-center text-amber-700'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className='text-gray-400 text-[14px] ml-4 cursor-pointer'>
              (8 customer review)
            </p>
          </div>

          <div className='text-p-[#161616] space-y-6'>
            <h2 className='text-3xl font-semibold'>{productData?.title}</h2>
            <p className='text-xl'>${productData?.price}.00</p>
            </div>
            <div className='flex gap-x-4'>
            <button className='flex bg-blue-800 text-white text-center items-center py-1 px-2'>
              <Link href="https://web.facebook.com/?_rdc=1&_rdr">
                <RiFacebookBoxFill className='text-white'/></Link>
              Facebook
            </button>
            <button className='flex bg-blue-500 text-white text-center items-center  py-1 px-2'>
              <Link href="https://twitter.com/CraftHira79339">
              <RiTwitterFill className='text-white'/></Link>
              Twitter
            </button>
            </div>
          

          <div className='lg:w-[96vh] w-[72px] h-[2px] bg-gray-400' />
          <p className='text-gray-500 text-[14px]'>Typi non habent claritatem insitam, 
          est usus legentis in iis qui facit eorum claritatem. Investigationes 
          demonstraverunt lectores legere me lius quodii legunt saepius. </p>

           <div className='lg:w-[96vh] w-[72px] h-[2px] bg-gray-400' />
          <p className='text-gray-500 text-[14px]'>Only %1 left</p>

          <button
          className='uppercase bg-black py-4 px-8 text-white font-semibold flex gap-2 items-center hover:bg-amber-700'
          >
            <AiOutlineShoppingCart className='text-[24px]'/>
            Add To Cart
          </button>

          <div className='flex gap-4 items-center uppercase py-4 text-[14px]'>
            <button className='flex gap-1 items-center'>
              <AiOutlineHeart />
              Add to wishlist
            </button>
            <button className='flex gap-1 items-center'>
              <MdCompareArrows />
              Compare
            </button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default DetailPage; 