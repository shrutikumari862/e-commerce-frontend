import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import bin from '../assets/bin.webp'

export function Seller() {
    const [products,setProducts]=useState([])
//    const [image1,setImage1]=useState(null)
//    const [image2,setImage2]=useState(null)
//    const [image3,setImage3]=useState(null)
//    const [image4,setImage4]=useState(null)








    useEffect(()=>{
      axios.get('https://e-commerce-backend-4908.onrender.com/seller/myproducts',
         {
    headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`

      }
    }
    )
    .then((res)=>{console.log(res.data)
                 setProducts(res.data.yourproducts)
                 console.log(products)
    })
    },[])
   

   const delProduct=async(id)=>{
         try{ await axios.delete(`https://e-commerce-backend-4908.onrender.com/seller/deleteproduct/${id}`,
             {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
          )

          setProducts((prev) => prev.filter((prod) => prod._id !== id))
        }catch(err){
            console.log(err)
        }
   }




    return (
        <>
        <div className='bg-black min-h-screen'>
             <div className='flex items-center justify-end p-8'>
            <Link to='/selleraddproduct'>
                 <button className='bg-yellow-300 rounded-full p-2 flex justify-center items-center gap-1 cursor-pointer' ><span className='text-white text-4xl'>+</span>Add Products</button>
            </Link>
             </div>
            <div >
                <div  >
                    {products.map((prod)=>(
                        <div className='border-2 border-amber-300 w-[90%] h-[120px] flex justify-between m-5 bg-gray-800 text-white ' key={prod._id}>
                           
                                <div className='flex gap-6'>
                                <img src={prod.img?.img1?.secure_url} className='w-[160px]'/>
                                <div className='flex flex-col text-2xl gap-4'>
                                    <span className='text-amber-200'>{prod.productName}</span>
                                    <span className='text-red-300'>price: {prod.price}</span>
                                    
                                </div>
                                </div>



                                <div className=' mr-10 flex items-center'>
                                    <button onClick={()=>delProduct(prod._id)}><img src={bin} className='h-[25px]'></img></button>
                                </div>
                                
                           
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}
