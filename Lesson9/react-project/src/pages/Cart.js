import React from 'react'
import { useCart } from 'react-use-cart'
import SingleProduct from '../components/SingleProduct'


const Cart = () => {


  const { items, isEmpty, setItems, removeItem, updateItemQuantity } = useCart()


  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
              items.map((a, index) => {
                return (
                  <>
                  <div></div>
                    <SingleProduct product={a} />
                    <button className='btn btn-warning' onClick={() => removeItem(a.id)}>Remove</button>
                    <button className='btn btn-success'
                      onClick={() => updateItemQuantity(a.id, a.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{a.quantity}</span>
                    <button className='btn btn-success'
                      onClick={() => updateItemQuantity(a.id, a.quantity + 1)}
                    >
                      +
                    </button>
                  </>
                )
              }
              )
            }
          </div>
        </div>
        <button onClick={() => setItems([])}>But now all products</button>
      </section>
    </>
  )
}

export default Cart