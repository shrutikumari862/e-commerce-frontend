import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'
export function Login() {
 const Navigate=useNavigate()
 const [userName,setUserName]=useState('') 
 const [phone,setPhone]=useState('')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const [label,setLabel]=useState('')
 const [country,setCountry]=useState('')
 const [city,setCity]=useState('')
 const [state,setState]=useState('')
 const [street,setStreet]=useState('')
 const [role,setRole]=useState('customer')
 const [profile,setProfile]=useState('')






const createUser=async(e)=>{
   e.preventDefault() 
  
    const formData=new FormData();
    formData.append("userName", userName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("profile", profile); // if it's a file, keep it directly

// address array (index 0)
    const address = [{
  label,
  country,
  city,
  state,
  street
}];

formData.append("address", JSON.stringify(address));
  await axios.post("https://e-commerce-backend-4908.onrender.com/user/signup", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
 })
.then((res) => {
  console.log(res.data);
  Navigate("/signup");
})
.catch((err) => {
  console.error(err);
})};




    return (
        <>
        <div className='flex flex-col bg-black items-center'>
             <div className='text-white p-4 w-full bg-amber-400'>SignUp</div>
        <div className='w-full h-screen bg-black flex justify-center items-center'>
           <div className='bg-gray-400 flex justify-center  h-[90%] w-[90%]  border-2 border-amber-300 rounded-4xl overflow-scroll p-8'>
            <form className='flex flex-col gap-6' onSubmit={createUser}>
                <div className='flex flex-col'><label className='mr-2'>User Name:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1 ' required type='text' placeholder='User Name' value={userName} onChange={(e)=>setUserName(e.target.value)}/></div>
                <div className='flex flex-col'><label className='mr-2'>Phone:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1 ' required type='number' placeholder='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/></div>
                <div className='flex flex-col'><label className='mr-2'>Email:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                <div className='flex flex-col'><label className='mr-2'>Password:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/></div>

                <div className='border-2 border-amber-300 rounded-4xl p-4 w-120 flex flex-col gap-2 items-center justify-between'>
                <label>Address</label>
                <div className='flex flex-col'><label className='mr-2'>Label:</label><select placeholder='label' required className='border-2 border-amber-300 rounded-4xl' value={label} onChange={(e)=>setLabel(e.target.value)}>
                    <option value=''>select label</option>
                     <option value='Home'>Home</option >
                     <option value='Shop'>Shop</option >
                     <option value='Office'>Office</option >
                     <option value='Others'>Others</option >
                </select></div>
                <div className='flex flex-col'><label className='mr-2'>Country:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='text' placeholder='country' value={country} onChange={(e)=>setCountry(e.target.value)}/></div>
                <div className='flex flex-col'><label className='mr-2'>City:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='text' placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)}/></div>
                <div className='flex flex-col'><label className='mr-2'>State:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='text' placeholder='state' value={state} onChange={(e)=>setState(e.target.value)}/></div>
                <div className='flex flex-col'><label className='mr-2'>Street:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' required type='text' placeholder='street' value={street} onChange={(e)=>setStreet(e.target.value)}/></div>
                </div>
                <div className='flex flex-col'><label className='mr-2'>Role:</label>
                <select placeholder='role' required className='border-2 border-amber-300 rounded-4xl' value={role} onChange={(e)=>setRole(e.target.value)}>
                    <option value=''>select role</option>
                     <option value='customer'>customer</option >
                     <option value='seller'>seller</option >
                     <option value='others'>others</option >
                </select>
                 <label>Profile Picture:</label><input className=' border-2 border-amber-200 rounded-4xl p-3 flex-1' type='file' onChange={(e)=>{setProfile(e.target.files[0])
                     
                 }} ></input> 
                 {profile && (
                    <div className=' flex items-center justify-center m-2 border-2 border-amber-200'><img className='h-[200px]' src={URL.createObjectURL(profile)}></img></div>
                 ) }
               
                </div>

                 
                <div className=' flex items-center justify-center'><button className='bg-green-400 rounded-3xl p-4 border-2 border-amber-300 m-5 ' type='submit'>SUBMIT</button></div>
                
            </form>
           
            </div>
            
            </div>

             <Link to='/signup'>
             <button className='text-white p-4 w-55 bg-red-500 rounded-full inline cursor-pointer'>Login</button>
             </Link>
            </div>
            
        </>
    )
}
