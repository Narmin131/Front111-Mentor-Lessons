import React from 'react'
import myLogo from "../assets/img/download.png"

const Card = (info) => {

    function myFunc() {
        alert(`${info.name}`)
    }

    return (
        <div className='col-lg-4'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={myLogo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">User Info</h5>
                    <p className="card-text">User Name : {info.name} </p>
                    <button onClick={myFunc}>Get more info</button>
                </div>
            </div>
        </div>
    )
}

export default Card