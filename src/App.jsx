import { Routes,Route } from 'react-router-dom'
import { Home } from './pages/home'
import './App.css'
import { Collection } from './pages/Collection'
import { Cart } from './pages/cart'
import { Login } from './pages/Login'
import { Oders } from './pages/Oders'
import { Placeorder } from './pages/Placeorder'
import { Product } from './pages/Product'
import { Navbar } from './components/Navbar'
import { Signup } from './pages/signup'
import { SellerLogin } from './pages/SellerLogin'
import { Seller } from './pages/Seller'
import { Selleraddproduct } from './pages/Selleraddproduct'
import { Profile } from './pages/profile'

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
        
       


      </Routes>
      </div>
    </>
  )
}

export default App
