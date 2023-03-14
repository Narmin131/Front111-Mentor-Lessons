import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Login from "../pages/Login"
import Header from '../components/Header'
import UserInfo from "../user-routes/UserInfo"
import Books from "../pages/Books"
import Wishlist from "../pages/Wishlist"
import PrivateRoute from '../private-routes/PrivateRoute'
import { ToastContainer } from 'react-toastify';
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={1000} pauseOnHover={false}/>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/products' element={<Books />}></Route>
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path='/user' element={<UserInfo />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter