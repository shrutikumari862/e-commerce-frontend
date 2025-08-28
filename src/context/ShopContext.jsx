import React, {createContext, useState} from "react";
import axios from 'axios'
const ShopContext = createContext();
const ShopProvider = ({children}) => {
       const [products,setproducts]=useState()
        const [category,setCategory]=useState('men')
        const [searchproduct,setsearchproduct]=useState('')
        const[isdropdownopen,setisdropdownopen]=useState(false)
            const [ismenu,setismenu]=useState(false)
            const toggledropdown=()=>{
                setisdropdownopen(!isdropdownopen)
            }
        
            const togglemenu=()=>{
                 setismenu(!ismenu)
            }
       
        const fetchproduct=async()=>{
                 try{
                     await axios.get('https://e-commerce-backend-4908.onrender.com/user/products')
                  .then(res=>{console.log(res.data.products)
                      setproducts(res.data.products)})            
                  
                  
                 }catch(err){
                  console.log(err)
                 }}
                  const filteredProducts = products?.filter((prod) => {
         const matchCategory = category ? prod?.category?.toLowerCase().includes(category?.toLowerCase()) : true;
         const matchSearch = searchproduct ? prod?.productName?.toLowerCase().includes(searchproduct.toLowerCase()) : true;
    return matchCategory && matchSearch;
    });
    //const filteredProducts =products?.filter((prod)=>prod.category.toLowerCase().includes(category.toLowerCase()))
      //  const filteredproduct=products?.filter((prod)=>prod.title.toLowerCase().includes(searchproduct.toLowerCase()))
       return (
         <ShopContext.Provider value={{
          products,fetchproduct,
          filteredProducts,
          setCategory,
          searchproduct,setsearchproduct,
          isdropdownopen,setisdropdownopen,
          ismenu,setismenu,
          toggledropdown,togglemenu
           
        }}>
            {children}
        </ShopContext.Provider>
    );
};
export { ShopProvider, ShopContext };