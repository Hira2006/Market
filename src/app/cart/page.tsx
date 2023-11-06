"use client";
import { useAppSelector } from "../../redux/hooks"
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const AddToCart = () => {
    const products = useAppSelector((state) => state.cart);


    const getTotal = () => {
        let total = 0;
        products.forEach((product) => (total = total + product.price * product.quantity));
        return total;
    };

    return (
        <section className="screen-fit">
          {products.length >  0 &&(
          <>
          {/* HEADING AND PARAGRAPH START */}
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Shopping Cart
            </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className='flex flex-col lg:flex-row gap-12 py-10'>
            {/* CART ITEMS START */}
            <div className='flex-[2]'>
             {products?.map((products: any) => {
            return (
              <div key={products.id} className="flex pt-5 ">
              
                 <div className="shrink-0  w-[50px] md:w-[120px] rounded-lg"></div>
                <Image src={products.image} alt="img" className="lg:w-[96px] lg:h-[96px] w-[60px] h-[60px] mt-5"/>
                <div className="pl-5">
                <h1 className="text-lg md:text-2xl font-semibold text-black/[0.8]">Name: {products.title}</h1>
                <h1 className="text-sm md:text-md font-bold text-black/[0.5] mt-2">MRP : &#36;{products.price}</h1>
                <h1>Quantity:{products.quantity}</h1> 
                <h1>Delivery Estimation</h1>
                <h1 className="font-semibold text-yellow-500">5 Working Days</h1>
                </div>
              </div> 
            );
          })}
            </div>
            {/* CART ITEMS END */}

            {/* SUMMARY START */}
            <div className='flex-[1] '>
             <div className='text-lg font-bold'>Summary</div>

             <div className='p-5 my-5 bg-black/[0.5] rounded-xl mr-8'>
              <div className='flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>
                  Subtotal
                  </div>
                <div className='text-md md:text-lg font-medium text-black'>
                ${getTotal()}.00
                  </div>
              </div>
              <div className='text-sm md:text-md py-5 border-t mt-5'>
                The subtotal reflects the total price of your 
                order, including duties and taxes, before any
                appicable discounts. It does not include
                delivery costs and international transaction
                fees.
              </div>
             </div>
            </div> 
            {/* SUMMARY END */}
          </div>
          {/* CART CONTENT END */}
          </>
              )}
          
          {products.length < 1 && <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
          <Image 
                src="/empty-cart.jpg" 
                alt="img"
                width={300}
                height={300}
                className='w-[300px] md:w-[400px] '
                />
                <span className='txt-xl font-bold'>
                  Your cart is empty
                </span>
                <span className='text-center mt-4'>
                  Looks like you have not added anything in your cart.
                  <br />
                  Go ahead and explore top categories.
                </span>
                <Link 
                href="/"
                className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
                >
                Continue Shopping
                </Link>
            </div>}
          </section>
              )}   

export default AddToCart;
