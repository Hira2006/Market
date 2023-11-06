import React from 'react'
import Image from 'next/image'
import img from "../../../public/banner-about-us1.png"
import img2 from "../../../public/banner-about-us-2.jpg"
import img3 from "../../../public/banner-about-us-3.jpg"
import icon1 from "../../../public/icon-about-1.png"
import icon2 from "../../../public/icon-about-2.png"
import icon3 from "../../../public/icon-about-3.png"
import icon4 from "../../../public/icon-about-4.png"

const page = () => {
  return (
    <div>
      
      <div className='lg:flex pt-8'>
        <div className='py-14 lg:pl-24 lg:10'>
          <h1 className='text-amber-700 font-semibold'>ABOUT OUR ONLINE STORE</h1>
          <h2 className='text-5xl pt-4'>Hello,</h2>
          <h3 className='text-4xl pt-4 font-semibold '>With 25+ Years Of Experience</h3>
          <h4 className='text-xl pt-4'>&quot;Over 25 years Outstock helping companies reach their<br></br>financial and branding goals.&quot;</h4>
          <p className='font-semibold text-gray-600 pt-4'>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel<br></br> eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum<br></br> dolore eu feugiat nulla facilisis. For me, the most important part of improving at<br></br> photography. The perfect way to enjoy brewing tea on low hanging fruit to identify.<br></br> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
        </div>
        <Image src={img} alt='hero' className='lg:w-[64vh] lg:h-[64vh] w-[48vh] h-[48vh] pl-6 pt-14' /> 
        </div>


        <div className='bg-gray-200'>
          <h1 className='text-amber-700 font-semibold pt-20 text-center'>HOW IT WORKS</h1>
          <h2 className='text-center text-4xl font-semibold'>Complete Customer Ideas</h2>
          <p className='text-gray-600 text-center'>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit<br></br>in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>

          <div className='lg:flex gap-x-4 justify-evenly py-16  '>
            <div className='bg-white rounded-xl h-[350px] w-[350px] ml-2 mt-2'>
              <div className='flex '>
            <Image src={icon1} alt='hero' className='w-[20vh] h-[20vh] pl-6 pt-14' /> 
            <h1 className='text-8xl font-bold text-gray-100 pt-9 lg:pl-32 pl-16'>01</h1>
              </div>
              <h1 className='text-xl font-semibold pl-6 pt-6'>Admin Verify Details</h1>
              <p className='text-gray-500 pl-6 pt-6'>sed ut prspiciatis unde omnis iste natus<br></br> error sit accsusantium dolormque <br></br>laudantium totam rem aperiam,<br></br> eaqueipsa quae veritatis.
              </p>
            </div>

            <div className='bg-white rounded-xl h-[350px]  w-[350px] ml-2 mt-2'>
              <div className='flex '>
            <Image src={icon2} alt='hero' className='w-[20vh] h-[20vh] pl-6 pt-14' /> 
            <h1 className='text-8xl font-bold text-gray-100 pt-9 lg:pl-32 pl-16'>02</h1>
              </div>
              <h1 className='text-xl font-semibold pl-6 pt-6'>Send The Solution</h1>
              <p className='text-gray-500 pl-6 pt-6'>sed ut prspiciatis unde omnis iste natus<br></br> error sit accsusantium dolormque <br></br>laudantium totam rem aperiam,<br></br> eaqueipsa quae veritatis.
              </p>
            </div>

            <div className='bg-white rounded-xl h-[350px]  w-[350px] ml-2 mt-2'>
              <div className='flex '>
            <Image src={icon3} alt='hero' className='w-[20vh] h-[20vh] pl-6 pt-14' /> 
            <h1 className='text-8xl font-bold text-gray-100 pt-9 lg:pl-32 pl-16'>03</h1>
              </div>
              <h1 className='text-xl font-semibold pl-6 pt-6'>Complete Profile</h1>
              <p className='text-gray-500 pl-6 pt-6'>sed ut prspiciatis unde omnis iste natus<br></br> error sit accsusantium dolormque <br></br>laudantium totam rem aperiam,<br></br> eaqueipsa quae veritatis.
              </p>
            </div>

          </div>
        </div>


        <div className=''>
          <h1 className='text-amber-700 font-semibold pt-20 text-center'>TECHNOLOGY INDEX</h1>
          <h2 className='text-center text-4xl font-semibold pt-4'>Let’s Get Creative</h2>
          <p className='text-gray-600 text-center pt-4'>The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit<br></br>in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>
          <div className='flex justify-evenly'>
            <div>
          <Image src={img2} alt='hero' className='w-[96vh] h-auto pl-6 pt-14 pb-14' /> </div>
          <div>
          <Image src={img3} alt='hero' className='w-[96vh] h-auto pl-6 pt-14 pb-14' /> </div>
          </div>
          </div>


          </div>
  )
}

export default page