import React, { useContext } from 'react'
import hero from '../assets/hero.webp'
import { ShopContext } from '../context/ShopContext'

export function Hero() {
    const {searchproduct}=useContext(ShopContext)

    return (
        <>  {!searchproduct &&
            <div className=' flex flex-col sm:flex-row border-2 border-amber-300 justify-between  bg-gray-900'>
                {/* hero left */}
                   <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
                   <div className='text-[#e6d8d8]'>
                    <div className='flex items-center gap-2'>
                        <p className=' w-8 md:w-11 h-[2px] bg-[#414141] '></p>
                        <p className='macondo-regular font-medium text-sm md:text-base'>OUR BEST SELLER</p>
                    </div>

                    <h1 className='roboto-slab-tag text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    

                    <div className='flex items-center gap-2'>
                        <p className='macondo-regular font-semibold text-sm md:text-base'>Shop Now</p>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141] '></p>
                    </div>
                   </div >
                        
                        
                   </div>

                   {/* hero right */}
                   <div className=' sm:w-[40%]'>
                       <img src={hero} alt='heroimg' className=' sm:w-[60%]' />
                   </div>
            </div>
     }
        </>
    )
}
