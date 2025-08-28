import React, { useContext } from 'react'
import logo from "../assets/logo.jpg"
import profile from "../assets/profile.jpg"
import search from "../assets/search.webp"
import menuicon from "../assets/menuicon.jpg"
import cart from "../assets/cart.avif"
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

export function Navbar() {
    const {searchproduct,setsearchproduct,isdropdownopen,ismenu,toggledropdown,togglemenu}=useContext(ShopContext)
    

    return (
        <>
            <div className='bg-black w-[100] h-[150px] flex justify-between items-center p-[10px] border-b-5 border-amber-300'>
                <div>
                    <img src={logo} className='h-[130px]'/>
                </div>
                <div className='hidden sm:flex justify-center items-center  text-amber-300 gap-3'>
                    <ul className='flex gap-5 items-center justify-center'>
                         <NavLink to='/' className={({isActive})=>` ${isActive?"text-green-600 text-2xl ":""} hover:text-white transition duration-500 ease-out`}> 
                        <p>Home</p>
                        <hr className='h-0.5  rounded-full bg-amber-900 border-none '></hr>
                        </NavLink>
                        <NavLink to='/collection' className={({isActive})=>` ${isActive?"text-green-600 text-2xl ":""} hover:text-white transition duration-500 ease-out`}>
                        <p>Collection</p>
                        <hr className='h-0.5  rounded-full bg-amber-900 border-none '></hr>
                       </NavLink>

                    </ul>
                </div>
                       <div>
                            <img src={menuicon} alt='menuicon' className='w-10 cursor-pointer rounded-lg sm:hidden' onClick={togglemenu}/>
                        </div>
                <div>
                    <ul className='flex gap-5'>
                        <div className='flex gap-3 items-center justify-center'>
                            <input type='text' value={searchproduct} onChange={(e)=>(setsearchproduct(e.target.value))}  placeholder="Search Items" className='text-white border-2 border-amber-300 rounded-full p-[3px] hover:p-[5px] hover:border-white'/>
                             <button >
                                <div className=' border-2 border-amber-300 rounded-full p-[5px] hover:border-white cursor-pointer' >
                                <img src={search} alt='searchicon' className='w-[35px]  rounded-full ' />
                                </div>
                             </button>
                        </div>
                        <button>
                        <div className=' rounded-full border-2 border-amber-300 hover:border-white cursor-pointer  ' onClick={toggledropdown}>
                            <img src={profile} className='rounded-full w-[40px]'/>
                        </div>
                        </button>
                        <div>
                            <NavLink to='/cart'>
                           <img src={cart} alt='cartimg' className='w-[70px] '/>
                           <p className='absolute text-white right-[40px] top-[80px] w-4 text-center leading-4 bg-black aspect-square rounded-full text-[8px]'>10</p>
                           </NavLink>
                        </div>
                        
                    </ul>
                </div>
            </div>




            {isdropdownopen && 
            <div className='absolute  right-0 border-4 border-amber-500 rounded-lg shadow-lg z-50 w-[150px] gap-5 p-4 bg-black text-white'>
               <NavLink to='/profile' className={({isActive})=>`block p-[4px] bg-green-500 ${isActive?'bg-red-800':''}`}>
               <p >My Profile</p>
               </NavLink>
                <NavLink to='/login' className={({isActive})=>`block p-[4px] bg-green-500 ${isActive?'bg-red-800':''}`}>
               <p >Login</p>
               </NavLink>
               
            </div>
            }


            {ismenu && 
            <div className='absolute top-[100px] left-[150px] p-4 flex flex-col justify-center items-center  text-amber-300 gap-3 border-2 bg-amber-950'>
                    <ul className='flex flex-col  gap-5 items-center justify-center'>
                         <NavLink to='/' className={({isActive})=>` ${isActive?"text-green-600 text-2xl ":""} hover:text-white transition duration-500 ease-out`}> 
                        <p>Home</p>
                        <hr className='h-0.5  rounded-full bg-amber-900 border-none '></hr>
                        </NavLink>
                        <NavLink to='/collection' className={({isActive})=>` ${isActive?"text-green-600 text-2xl ":""} hover:text-white transition duration-500 ease-out`}>
                        <p>Collection</p>
                        <hr className='h-0.5  rounded-full bg-amber-900 border-none '></hr>
                       </NavLink>

                    </ul>
                </div>}
        </>
    )
}


