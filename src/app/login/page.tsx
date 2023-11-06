"use client"
import React from 'react'
import { MDBCheckbox } from 'mdb-react-ui-kit'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-green-300'>
    <div className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-gray-200 rounded-2xl shadow-2xl flex lg:w-1/3 max-w-4xl w-[36vh]'>
        <div className=' p-5 '>
            <h1 className='py-4 font-bold text-2xl '>Login Form</h1>
            <h2 className='text-left font-semibold py-4'>Email</h2>
            <div className='flex flex-col items-center'>
            <div className='flex w-full max-w-[400px]'>
        <input className="border-2 border-accent px-6 py-2 w-full" type='text' placeholder='Search for products...'/>
        </div>
      </div>

      <h2 className='text-left font-semibold py-4'>Password</h2>
            <div className='flex flex-col items-center'>
            <div className='flex w-full max-w-[400px]'>
        <input className="border-2 border-accent px-6 py-2 w-full" type='text' placeholder='Search for products...'/>
        </div>
        <div className=" mx-3  my-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      </div>
      <button className='px-6 py-2 bg-green-600 border-gray-600 border-2 text-white'>Submit</button>

            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default page