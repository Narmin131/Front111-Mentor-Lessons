import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Header from "../components/Header"
import Todos from '../pages/Todos'
const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/todos' element={<Todos/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter