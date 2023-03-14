import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
const LoginButton = () => {


    const user = JSON.parse(localStorage.getItem('User'))

    const location = useNavigate()

    const LogOut = () => {
        localStorage.clear()
        location('/login')
    }

    const authUser = () => {
        if (user === null) {
            return (
                <NavLink to='/login'>Login</NavLink>
            )
        }

        else {
            return (
                <>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {user.email}
                        </button>
                        <ul className="dropdown-menu">
                            <li onClick={() => LogOut()}><a className="dropdown-item" href="#">LogOut</a></li>
                        </ul>
                    </div>
                    <NavLink to='/user'>User </NavLink>
                </>

            )
        }
    }


    return (
        <>
            {authUser()}
        </>
    )
}

export default LoginButton