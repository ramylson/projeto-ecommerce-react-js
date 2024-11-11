import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import { Home, Cart, Checkout, ProductDetail, SignUp } from "./pages";
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
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
              <Route path='/signup' element={<SignUp/>} />
            </Routes>
            </div>
            <Footer/>
            </div>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App
