import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Header from '../components/Header'
import { CartProvider } from 'react-use-cart'
import TopToBtn from '../components/TopToBtn'

const AppRouter = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                    </Routes>
                    <TopToBtn/>
                </BrowserRouter>
            </CartProvider>

        </>
    )
}

export default AppRouter