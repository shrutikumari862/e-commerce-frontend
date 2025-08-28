import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './index.css'
import { ShopProvider } from './context/ShopContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopProvider>
    <App />
   </ShopProvider>
  </BrowserRouter>,
)
