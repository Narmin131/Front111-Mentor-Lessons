import React from 'react'
import Data from "../data/Data"
import Card from './Card'

const Cards = () => {
    return (
        <div>
            {
                Data.map((user) => (
                    <Card name={user.name} age={user.age} id={user.id} img={user.img} />
                ))
            }
        </div>
    )
}

export default Cards