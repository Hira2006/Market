import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { BsFillTelephoneFill} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div>
      <div className='lg:flex py-10'>
      <div className='lg:pl-24 '>
        <h1 className='text-semibold text-3xl pb-8'>Find us here.</h1>
        <div className='flex gap-x-3  py-3 pl-2'>
          <FaLocationDot className='text-[56px] p-2 border-gray-300 border-2'/>
          <div><p className='text-xl text-bold '>Our Address</p>
          <p className='text-gray-500 ' >Islamabad, Pakistan</p></div>
        </div>
        <div className='flex gap-x-3 py-3 pl-2'>
        <BsFillTelephoneFill className='text-[56px] p-2 border-gray-300 border-2'/>
          <div><p className='text-xl text-bold '>Phone Number</p>
          <p className='text-gray-500 ' >+92 3335196002</p></div>
        </div>
        <div className='flex gap-x-3 py-3 pl-2'>
        <MdEmail className='text-[56px] p-2 border-gray-300 border-2'/>
          <div><p className='text-xl text-bold '>Email address</p>
          <p className='text-gray-500 ' >charleswalles2006@gmail.com</p>
           </div>
        </div>
      </div>
      
      
      <div className='lg:pl-96 pr-6'>
        <h1 className='text-3xl pb-8'>Contact Us</h1>
          <form>
            <div className="grid xl:grid-cols-2 xl:gap-10">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="First Name "
                required={true}
              />

              <input
                type="text"
                name="last_name"
                id="last_name"
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Last Name "
              />
            </div>
            <input
              type="email"
              name="email"
              className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email "
              required={true}
            />
            
            <div className="flex justify-center">
              <textarea
                className="form-control block w-full px-3 py-2 mb-5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                placeholder="Your Review"
                required={true}
              ></textarea>
            </div>
           <div className="flex align-middle ml-8 gap-10 mb-5">
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              Send Your Review
            </button>
            
            
          </form>
          </div>
          </div>
    </div>
  )
}

export default Contact