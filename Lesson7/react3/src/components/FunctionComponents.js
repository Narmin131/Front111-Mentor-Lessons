import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from "../components/Todo"


const FunctionComponents = () => {

    const [state, setState] = useState([])


    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log(res.data);
                setState(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className='myTodos'>

            {
                state.map((item, index) => (
                    <Todo melumat={item.title} id={item.id} />
                ))
            }

        </section>
    )
}

export default FunctionComponents