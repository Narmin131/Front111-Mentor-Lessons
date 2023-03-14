import React from 'react'
import { Outlet, Navigate } from "react-router-dom"
const PrivateRoute = () => {


    const user = localStorage.getItem('User')

    if (user) {
        return <Outlet />
    }
    else {
        return <Navigate to='/login' />
    }



}

export default PrivateRoute