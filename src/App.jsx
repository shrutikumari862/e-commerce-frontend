import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import './App.css'
import { Collection } from './pages/Collection.jsx'
import { Cart } from './pages/Cart.jsx'
import { Login } from './pages/Login.jsx'
import { Oders } from './pages/Oders.jsx'
import { Placeorder } from './pages/Placeorder.jsx'
import { Product } from './pages/Product.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Signup } from './pages/Signup.jsx'
import { SellerLogin } from './pages/SellerLogin.jsx'
import { Seller } from './pages/Seller.jsx'
import { Selleraddproduct } from './pages/Selleraddproduct.jsx'
import { Profile } from './pages/profile.jsx'

function App() {
  

  return (
    <>
    <div className='px-2 sm:px-[3px] md:px-[5px] lg:px-[7px]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Oders/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sellerlogin' element={<SellerLogin/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/selleraddproduct' element={<Selleraddproduct/>}/>
        
       


      </Routes>
      </div>
    </>
  )
}

export default App
