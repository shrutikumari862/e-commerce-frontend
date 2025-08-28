import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
//import {Navigate, useNavigate} from 'react-router-dom'

export function LatestCollection() {
     
     const {fetchproduct,filteredProducts}=useContext(ShopContext)
     
     useEffect(()=>{
        fetchproduct()
     },[])
      
    return (
        <>
              <div className=' bg-black'>
                  <div className='text-center py-8 text-3xl flex items-center gap-8 flex-wrap justify-center '>
                       {filteredProducts && filteredProducts?.map((prod)=>{
                       return (
                            <Link to={`/product/${prod?._id}`}>
                             <div key={prod?.id} className='h-90 w-60 border-2 border-amber-400 bg-gray-500 p-2 sm:p-5' >
                               <div >
                                <img src={prod?.img?.img1?.secure_url} alt="" className='h-50 w-50' />
                
                               </div>
                               <div className='flex flex-col items-start'>
                                <span className=' font-light text-sm text-red-300 '>{prod?.productName}</span>
                                <span className=' font-light text-sm text-green-400' ><span className='text-gray-400'>price:</span>  {prod?.price}</span>
                               <span className=' font-light text-sm text-green-400' ><span className='text-gray-400'>rating:</span>  {}</span>
                               </div>
                               </div>
                               </Link>
                            
                           
                        ) 
                     })}  
                    

                </div>

          </div>  
        </>
    )
}
