import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { toast } from 'react-toastify'

const Books = () => {

    const [data, setData] = useState([])

    const { addFavBooks } = useContext(GlobalContext)


    const getData = () => {
        axios.get('https://example-data.draftbit.com/books?_limit=10')
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            data?.map((book, index) => (
                                <div className="col-lg-4 p-3">
                                    <div className="card" style={{ width: '100%', height: '100%' }}>
                                        <img src={book.image_url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{book.title}</h5>
                                            <p className="card-text">{book.description}</p>
                                            <button className='btn btn-dark' onClick={()=>{
                                                addFavBooks(book)
                                                toast.success('Book succefully added')
                                            }}>Add to wishlist</button>
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

export default Books