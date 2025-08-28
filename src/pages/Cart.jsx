import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export function Cart() {
    const [cartProducts,setCartProducts]=useState([])
    useEffect(()=>{
        axios.get('https://e-commerce-backend-4908.onrender.com/user/getItemsInCart',
             {
    headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`

      }
     }
        ).then(res=>{console.log(res.data.yourCart)
                     setCartProducts(res.data.yourCart)
        })
    },[])

    return (
        <>
            <div className='bg-black text-white m-0 h-screen'>
                <div className='flex'>
                <p className='w-44 md:w-88  h-[2px] bg-amber-500 relative top-9'></p>
                <span className='text-4xl font-light'>Your Cart</span>
                </div >
                <div className='flex flex-col items-center  h-screen overflow-y-scroll '>
                    <div className='w-full'>
                       {cartProducts && cartProducts.map((prod)=>(
                        <div key={prod?._id} className='w-full'>
                            <div className='w-full flex justify-center'>
                                {prod.products.map((items)=>(
                                    <div key={items._id} className='border-2 border-amber-200 gap-3 flex m-2 w-[90%] '>
                                        <div>
                                        <img src={items.productId?.img?.img1.secure_url} className='h-[90px]'/>
                                        </div>
                                        <div className='flex flex-col'>
                                        <span>{items.productId?.productName}</span>
                                        <span>Price: {items.productId?.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                       ))}
                    </div>

                </div>

            </div>
        </>
    )
}
