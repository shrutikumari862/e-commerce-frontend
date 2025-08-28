import React from 'react'
import { useContext,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'

import { Link } from 'react-router-dom'

export function Collection() {
     const {fetchproduct,filteredProducts,category,setCategory}=useContext(ShopContext)
    
     useEffect(()=>{
        fetchproduct()
     },[])
     
     
     

    return (
        <>
           <div className='flex flex-row bg-black'>
            <div className='w-30 sm:w-60 md:w-80 border-r-4 border-amber-300 gap-3.5 flex flex-col justify-items-start text-left px-4 text-amber-200'>
                <span>Select Category</span>
                <p className='h-[2px] w-20 sm:w-40 bg-amber-200'></p>
                <div><input type="checkbox" name="category" value="men" checked={category==='men'} onChange={()=>setCategory('men')} className="accent-black " /><span>Mens</span></div>
                <div><input type="checkbox" name="category" value="women" checked={category==='women'} onChange={()=>setCategory('women')} className="accent-black" /><span>Womens</span></div>
                <div><input type="checkbox" name="category" value="kid" checked={category==='kid'} onChange={()=>setCategory('kid')} className="accent-black " /><span>Kids</span></div>


            </div>
           <div className=' flex flex-wrap gap-8 m-5 justify-center items-center'>
               { filteredProducts?.map((prod)=>{
                return(
                    <Link to={`/product/${prod?._id}`}>
                              <div key={prod?._id} className='h-90 w-60 border-2 border-amber-400 bg-gray-500 p-2 sm:p-5' >
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
