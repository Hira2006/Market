"use client"
import React,{useState, useEffect} from 'react'
import Image, {StaticImageData} from 'next/image';
import { Data } from "@/utils/productData"
import ProductCard from './ProductCard';
import { IProduct } from './ProductCard';

const TrendingProduct = () => {
  const [data, setData] = useState([]);

  const shuffleArray = (array: any) => {
    return array 
    .map((value:any) => ({value, sort: Math.random() }))
    .sort((a: any, b:any) => a.sort - b.sort)
    .map(({ value}: any) => value);
  };

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 15))
  }, [])

  return (
    <div className='container mt-32'>
        <div className='sm:flex justify-between items-center'>
            <h2 className='text-4xl font-medium'>TrendingProduct</h2>
            </div>

    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8'>

        {data.map((product: IProduct) => (
          <ProductCard 
          key={product.id} 
          id={product.id} 
          image={product.image as StaticImageData}
          title={product.title} 
          price={product.price}
          category={product.category} 
          sale={product.sale}/>
          ))}
    </div>
            </div>
  )
}

export default TrendingProduct