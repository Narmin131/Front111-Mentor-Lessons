import React from 'react'
import { useCart } from 'react-use-cart'

const SingleProduct = ({ product }) => {

  const { addItem,items } = useCart();

  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src={product.image} className="card-img-top" alt="..." style={{ width: '200px', height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.price}$</p>
          <button className='btn btn-primary' onClick={() => addItem(product)} >Add to card</button>
          
        </div>
      </div>
    </>
  )
}

export default SingleProduct