import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import ProductRegistration from './pages/ProductRegistration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/product-registration' element={<ProductRegistration/>} />
        </Routes>
        <footer>Footer</footer>
      </BrowserRouter>
    </>
  )
}

export default App
