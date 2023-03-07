import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
const Header = () => {


    const { items } = useCart()

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <p className="navbar-brand" href="#">Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/products'>Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/cart'>Cart</NavLink>
                                <span style={{color:'#fff'}}>{items.length == 0 ? '' : items.length }</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header