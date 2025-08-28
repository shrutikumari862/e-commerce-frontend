import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link, useParams } from "react-router-dom";
export function Product() {
    const { productId } = useParams();
    const [product,setproduct]=useState([])
    useEffect(()=>{
         axios.get(`https://e-commerce-backend-4908.onrender.com/user/product/${productId}`)
       .then((res)=>{console.log(res.data.product)
                 setproduct(res.data.product)})
        .catch((err) => console.error("Error fetching product:", err));
    },[productId])
    const [selectedImg, setSelectedImg] = useState(
   null
  );
  useEffect(() => {
  if (product?.img) {
    // Pick img1 if it exists, otherwise first available
    setSelectedImg(product?.img?.img1?.secure_url || Object.values(product.img)[0]?.secure_url);
  }
}, [product]);

const addtocart=(id)=>{
         axios.post(`https://e-commerce-backend-4908.onrender.com/user/addToCart/${id}`,
          {},
          {
    headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`

      }
     }
         ).then((res)=>{console.log(res.data)})
}

    return (

        <>  
        <div className='min-h-screen bg-black'>
        <div className='flex justify-between md:justify-normal bg-black text-amber-100 '>
            <div className="p-10 sm:w-1/2  ">
             <div className='flex items-start justify-center'>
             <div className=' flex flex-col items-start w-[50px] sm:w-[100px] md:w-[120px] gap-2 '>
             {Object.values(product?.img || {}).map((img)=>(
                <div className='border-1 border-amber-300' key={product?.public_id}>
                <div onClick={()=>setSelectedImg(img?.secure_url)} ><img src={img?.secure_url}></img></div>
                </div>
             ))}
             </div>
             <div className='border-2 border-amber-300 ml-2  '>
                <img src={selectedImg}></img>
             </div>
             </div>
            </div> 
            <div className='sm:w-69 md:w-1/2 h-120 flex flex-col items-start justify-center gap-5 overflow-y-scroll p-6'>
            <h1 className="text-lg font-light  ">{product?.productName}</h1>
            <span className=' text-lg '>Category: {product?.category}</span>
            <span className=' text-lg'>Price: {product?.price}</span>
            <span className=' text-lg'>Material Type: {product?.materialType}</span>
             <span>Color: {product?.color}</span>
             <Link to='/cart'><button className='border-amber-500 border-2 rounded-full p-4 bg-gray-900 hover:bg-amber-500 cursor-pointer' onClick={()=>addtocart(product?._id)} >Add to Cart</button></Link>
             <div className='bg-black text-amber-50 '>
                {product?.description}
            </div>
            
            </div>
            </div>
            <div className='text-amber-200'>
              <h1 className='ml-8'>If you need more details you can contact the seller</h1>
              <div className='ml-8 flex flex-col'>
                <span className=' text-lg'>Seller:  {product?.soldBy?.userName}</span>
                <span className=' text-lg'>Phone: {product?.soldBy?.phone}</span>
                <span className=' text-lg'>Email: {product?.soldBy?.email}</span>
                <span className=' text-lg'>Address</span>
                <span className=' text-lg'>Label: {product?.soldBy?.address?.[0]?.label}</span>
                <span className=' text-lg'>City: {product?.soldBy?.address?.[0]?.city}</span>
                <span className=' text-lg'>Country: {product?.soldBy?.address?.[0]?.country}</span>
                <span className=' text-lg'>State: {product?.soldBy?.address?.[0]?.state}</span>
                <span className=' text-lg'>Street: {product?.soldBy?.address?.[0]?.street}</span>
              </div>  
            </div>
           </div>
        </>
    )
}
