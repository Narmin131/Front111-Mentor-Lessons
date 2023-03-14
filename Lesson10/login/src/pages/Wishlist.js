import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { toast } from 'react-toastify'
const Wishlist = () => {

  const { favorites, removeFavBooks } = useContext(GlobalContext)
  return (
    <>
        <section>
                <div className="container">
                    <div className="row">
                        {
                            favorites?.map((book, index) => (
                                <div className="col-lg-4 p-3">
                                    <div className="card" style={{ width: '100%', height: '100%' }}>
                                        <img src={book.image_url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{book.title}</h5>
                                            <p className="card-text">{book.description}</p>
                                            <button className='btn btn-danger' onClick={()=>{
                                                removeFavBooks(book.id)
                                                toast.info('Books removed from wishlist')
                                            }}>Remove to wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
    </>
  )
}

export default Wishlist