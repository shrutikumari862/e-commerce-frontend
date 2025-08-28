import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Selleraddproduct() {
   const Navigate=useNavigate()
    const [productName,setProductName]=useState('')
    const [image1,setImage1]=useState(null)
    const [image2,setImage2]=useState(null)
    const [image3,setImage3]=useState(null)
    const [image4,setImage4]=useState(null)
    const [price,setPrice]=useState('')
    const [materialType,setMaterialType]=useState('')
    const [color,setColor]=useState('')
    const [sizeAvailable1,setSizeAvailable1]=useState('S')
    const [sizeAvailable2,setSizeAvailable2]=useState('M')
    const [sizeAvailable3,setSizeAvailable3]=useState('L')
    const [category,setCategory]=useState('')
    const [description,setDescription]=useState('')
  

const callApi = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("materialType", materialType);
    formData.append("color", color);
    formData.append("category", category);
    formData.append("description", description);

    // sizes as array
    formData.append("sizesAvailable", sizeAvailable1);
    formData.append("sizesAvailable", sizeAvailable2);
    formData.append("sizesAvailable", sizeAvailable3);

    // images (only if selected)
    if (image1) formData.append("img1", image1);
    if (image2) formData.append("img2", image2);
    if (image3) formData.append("img3", image3);
    if (image4) formData.append("img4", image4);

    const res = await axios.post(
      "https://e-commerce-backend-4908.onrender.com/seller/addProduct",
      formData,
      {
        headers: {

          "Content-Type": "multipart/form-data",
           Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    console.log(res.data);
    Navigate('/seller')
  } catch (error) {
    console.log(error);
  }
};



    return (
        <>
            <div className='bg-black w-full h-screen flex justify-center items-center'>
                <div className='w-[80%] h-[80%] border-2 border-amber-300 overflow-scroll p-5 rounded-4xl bg-gray-800 text-amber-100'>
                    <form onSubmit={callApi}>
                     <div className='flex flex-col'><label>Product Name:</label><input required type='text'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2' value={productName} onChange={(e)=>setProductName(e.target.value)}></input></div>
                     <div className='flex flex-col'><label>Image 1:</label><input required type='file'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2'  onChange={(e)=>setImage1(e.target.files[0])}></input></div>
                     {image1 && (
                        <div className='border-2 border-amber-300 rounded-4xl h-[160px] flex items-center justify-center'>
                            <img src={URL.createObjectURL(image1)} alt="image1" className='h-[150px] rounded-4xl ' />
                        </div>
                     )}
                     <div className='flex flex-col'><label>Image 2:</label><input type='file'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2'  onChange={(e)=>setImage2(e.target.files[0])}></input></div>
                     {image2 && (
                        <div className='border-2 border-amber-300 rounded-4xl h-[160px] flex items-center justify-center'>
                            <img src={URL.createObjectURL(image2)} alt="image2" className='h-[150px] rounded-4xl '/>
                        </div>
                     )}
                     <div className='flex flex-col'><label>Image 3:</label><input type='file'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2'  onChange={(e)=>setImage3(e.target.files[0])}></input></div>
                      {image3 && (
                        <div className='border-2 border-amber-300 rounded-4xl h-[160px] flex items-center justify-center'>
                            <img src={URL.createObjectURL(image3)} alt="image3" className='h-[150px] rounded-4xl ' />
                        </div>
                     )}
                     <div className='flex flex-col'><label>Image 4:</label><input type='file'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2'  onChange={(e)=>setImage4(e.target.files[0])}></input></div>
                      {image4 && (
                        <div className='border-2 border-amber-300 rounded-4xl h-[160px] flex items-center justify-center'>
                            <img src={URL.createObjectURL(image4)} alt="image4" className='h-[150px] rounded-4xl '/>
                        </div>
                     )}
                     <div className='flex flex-col'><label>Price:</label><input required type='text'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2'  value={price} onChange={(e)=>setPrice(e.target.value)}></input></div>
                     <div className='flex flex-col'><label>Material Type:</label><input required type='text'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2' value={materialType} onChange={(e)=>setMaterialType(e.target.value)}></input></div>
                     <div className='flex flex-col'><label>Color:</label><input required type='text'  className='border-2 border-amber-300 rounded-4xl flex-1 p-2' value={color} onChange={(e)=>setColor(e.target.value)}></input></div>
                     <div className='flex gap-6 m-5'>
                     <div className='flex flex-col'><label>Sizes Available:</label>
                     <select  onChange={(e)=>setSizeAvailable1(e.target.value)}>
                        <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                    </select>
                        
                        </div>
                        <div className='flex flex-col'><label>Sizes Available:</label>
                     <select onChange={(e)=>setSizeAvailable2(e.target.value)}>
                       <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                    </select>
                        
                        </div>
                        <div className='flex flex-col'><label>Sizes Available:</label>
                     <select onChange={(e)=>setSizeAvailable3(e.target.value)}>
                       <option value='S'>S</option>
                        <option value='M'>M</option>
                        <option value='L'>L</option>
                    </select>
                        </div>
                        </div>
                        <div className='flex flex-col'><label>Category:</label>
                        <select className='border-2 border-amber-300 rounded-4xl p-4' required onChange={(e)=>setCategory(e.target.value)}>
                        <option value=''>Select Category</option>    
                        <option value='Men'>Men</option>
                        <option value='Women'>Women</option>
                        <option value='Kid'>Kid</option>
                        </select>
                        <label>Add Description:</label><textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='w-[90%] h-[100px] border-2 border-amber-300 rounded-4xl overflow-scroll p-9'></textarea>
                        </div>
                        
                        <div className='flex justify-center items-center'>
                          
                        <button className='bg-green-400 rounded-full p-4 m-5' type='Submit'>Add</button>
                        
                        </div>
                    </form>
                </div>
            </div>
           
               



            
        </>
    )
}
