import React from 'react'

const Card = (props) => {

    const userDetail = () => {
        alert(`User age : ${props.age} id : ${props.id}`)
    }
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <button className='btn btn-primary' onClick={userDetail}>USER DETAIL</button>
                </div>
            </div>
        </>

    )
}

export default Card