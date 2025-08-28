import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function SellerLogin() {
    const Navigate=useNavigate()
    
    const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

   const callLogin=async(e)=>{
    e.preventDefault();
     await axios.post("https://e-commerce-backend-4908.onrender.com/seller/login",{
        email:email,
        password:password
        
     }).then(res=>{
    console.log(res.data)
    Navigate('/seller')
    
       localStorage.setItem("email",email );
       localStorage.setItem("userName",res.data.user.userName );
       localStorage.setItem("token",res.data.token);
       localStorage.setItem("userID",res.data.user._id );
       localStorage.setItem("role",res.data.user.role );
       localStorage.setItem("address",JSON.stringify(res.data.user.address) )
   })}

    return (
        <>
             <div className='flex flex-col h-screen bg-black items-center'>
             <div className='text-white p-4 w-full bg-amber-400'>Seller Login</div>
             <div className='w-full  bg-black flex justify-center items-center'>
             <div className='bg-gray-400 flex justify-center  h-[90%] w-[90%]  border-2 border-amber-300 rounded-4xl overflow-scroll p-8'>
             <form className='flex flex-col gap-6' onSubmit={callLogin}>
                
             <div className='flex flex-col'><label className='mr-2'>Email:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} /></div>
             <div className='flex flex-col'><label className='mr-2'>Password:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} /></div>
               

                 
            <div className=' flex items-center justify-center'><button className='bg-green-400 rounded-3xl p-4 border-2 border-amber-300 m-5 ' type='submit'>SUBMIT</button></div>
                
            </form>
           
            </div>
            
            </div>
             
             <Link to='/login'>
             <button className='text-white p-4 w-55 bg-red-500 rounded-full inline cursor-pointer'>SignUp</button>
             </Link>
             <Link to='/signup'>
              <button className='text-white p-4 w-55 bg-red-500 rounded-full inline cursor-pointer m-4'>LogIn As Customer</button>
              </Link>
            </div>
        </>
    )
}
