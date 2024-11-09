import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import { Home, Cart, Checkout, ProductDetail } from "./pages";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div id="wrapper">
          <Header />
          <div id="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/product/:id' element={<ProductDetail/>} />
          </Routes>
          </div>
          <Footer/>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
