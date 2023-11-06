'use client'
import Hero from '@/components/Hero'
import TrendingCard from '@/components/TrendingProduct'
import { Provider } from 'react-redux';
import {store} from "../redux/store"
import React from 'react'
import { Toaster } from 'react-hot-toast'



const page = () => {
  return (
    <main>
      <Provider store={store}>
      <Hero />
      <TrendingCard />
      <Toaster position='bottom-center' reverseOrder={false}/>
      </Provider>
    </main>
  )
}

export default page