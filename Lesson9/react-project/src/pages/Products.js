import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleProduct from '../components/SingleProduct'
import TopToBtn from '../components/TopToBtn'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
                console.log(products);
            })
    }, [])


    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            products.map((item, index) => (
                                <SingleProduct product={item}/>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* <TopToBtn/> */}

        </>
    )
}

export default Products