import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export function Profile() {
    const [user,setUser]=useState([])
  useEffect(()=>{
    axios.get("https://e-commerce-backend-4908.onrender.com/user/profile",{
    headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`

      }
   })
   .then((res)=>{console.log(res.data.user)
    setUser(res.data.user)
   })
  },[])  
   
    return (
        <>
        <div className='h-screen bg-black p-8'>
            <div className=' rounded-full flex items-center justify-center'>
                <img className='border-2 border-amber-200 rounded-full h-50' src={user?.[0]?.profilepic?.secure_url}/>
            </div>
            <div className='flex flex-col items-center justify-center text-4xl font-light text-amber-100'>
                <span>User Name: {user?.[0]?.userName}</span>
                <span>Email: {user?.[0]?.email}</span>
                <span>Phone: {user?.[0]?.phone}</span>
                <div className='flex flex-col border-2 rounded-4xl p-6 w-[60%] m-5'>
                    <span>Address:</span>
                    <span>Country:  {user?.[0]?.address?.[0]?.country}</span>
                    <span>State:  {user?.[0]?.address?.[0]?.state}</span>
                    <span>City:  {user?.[0]?.address?.[0]?.city}</span>
                    <span>Street:  {user?.[0]?.address?.[0]?.street}</span>
                    <span>Label:  {user?.[0]?.address?.[0]?.label}</span>
                </div>
            </div>
        </div>
            
        </>
    )
}
