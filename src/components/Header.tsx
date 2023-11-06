"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import img from "../../public/Logo.webp"
import Slider from "react-slider"
import { RiArrowDropDownLine } from "react-icons/ri"
import { useAppSelector } from "../redux/hooks"
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"

const MIN = 5;
const MAX = 700;

const Header = ({ setShowCart}: any ) => {
  const cartCount = useAppSelector((state) => state.cart.length);
  const [values, setValues] = useState([MIN, MAX]);

  const [open, setOpen] = useState(false);

console.log('values:' , values)
  return (
    <div className='bg-gray-200 sticky  top-0'>
      <div className='container flex justify-between items-center'>
      <Link href="/">
        <Image src={img} alt="img" width={500} height={500} className='lg:w-[96px] w-[64px] h-auto lg:ml-16 '/></Link>
    <ul className='gap-6 pr-24 font-semibold hidden sm:flex'>
        <li><Link href="/">Home</Link></li>

        <li className='relative' onClick={()=>setOpen(!open)}>
          <div>
      <div className='flex'>
      Pages
      <RiArrowDropDownLine className='text-[32px]'/></div>
      { open && (
        <div className='bg-white w-96 absolute justify-evenly shadow-lg'>
          <h1 className='text-lg text-center py-2'>Sort & Filter</h1>
          <div className='border-t-2 border-gray-300 flex justify-between items-center py-2 px-12 mt-5 mx-6 '></div>
          <h2 className='pl-6'>Categories</h2>
      <ul className='flex gap-x-2 px-2'>
     <li className="p-2 cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2" ><Link href="http://localhost:3000/category/male">Male</Link></li> 
     <li className="p-2  cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="http://localhost:3000/category/female">Female</Link></li> 
     <li className="p-2  cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="http://localhost:3000/category/kids">Kids</Link></li> 
     <li className="p-2  cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="http://localhost:3000/category/Shoe">Shoe</Link></li>
     <li className="p-2  cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="http://localhost:3000/category/Electronic">Electronic</Link></li> 
 
    </ul>
    <div  className='pl-6 pt-4'>
        <h3>Price Range</h3>
          <span className={"values"}>${values[0]} - ${values[1]}</span>
        <small>
          Current Range: $ {234}
        </small>

        <Slider className={"slider"} 
        onChange={setValues} 
        value={values} 
        min={MIN} 
        max={MAX}/>
        </div>
        <h2 className='pl-6 py-4'>Sort By</h2>
      <ul className='flex gap-x-2 px-2 pb-4'>
     <li className="p-2 cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2" ><Link href="http://localhost:3000/sortby/Popular">Popular</Link></li> 
     <li className="p-2  cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="http://localhost:3000/sortby/MostRecent">Most Recent</Link></li> 
     <li className="p-2  cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="http://localhost:3000/sortby/Oldest">Oldest</Link></li> 
 
    </ul>
    <h2 className='pl-6 py-4 '>Rating</h2>
      <ul className='flex gap-x-4 px-2 justify-evenly pb-4'>
     <li className="p-2 w-16 text-center cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2" ><Link href="rating/all">All</Link></li> 
     <li className="p-2 w-16 text-center cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2" ><Link href="rating/5">5</Link></li> 
     <li className="p-2 w-16 text-center cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="rating/4">4</Link></li> 
     <li className="p-2 w-16 text-center cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="rating/3">3</Link></li> 
     <li className="p-2 w-16 text-center cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="rating/2">2</Link></li>
     <li className="p-2 w-16 text-center cursor-pointer rounded-full hover:bg-green-600 border-gray-500 border-2"><Link href="rating/1">1</Link></li> 
 
    </ul>
      </div>
    )
      }
      </div>
      </li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
    </ul>

    <div className='flex  gap-6 '>
      <div className='lg:flex hidden w-full max-w-[400px]'>
        <input className="border-2 border-accent px-6 py-2 w-full" type='text' placeholder='Search for products...'/>
        <div className='bg-accent text-white text-[26px] grid place-items-center px-4'>
      <AiOutlineSearch className="lg:text-[26px] hidden lg:block  "/></div>
      </div>
      <div className='relative cursor-pointer'>
        <AiOutlineShoppingCart className=' mt-3 text-[26px]'
        onClick={() => setShowCart(true)}/>
        <div className='absolute top-[-15px] right-[-10px]  mt-3 bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center '> 
        {cartCount}</div>
          </div>
          <button className='rounded-lg  bg-green-600 w-[96px] h-[48px] text-sm text-center font-bold hidden lg:block'><Link href="login">Login</Link></button>   
      </div>
    </div>
    </div>
  )
}

export default Header