import React, { useEffect, useState } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([])

    const [inputValue, setInputValue] = useState('')


    const addToDo = (e) => {
        e.preventDefault()
        setTodos([...todos, inputValue])
        setInputValue('')

        localStorage.setItem('Todos', JSON.stringify([...todos, inputValue]))
    }

    useEffect(() => {
        if (localStorage.getItem('Todos')) {
            const List = JSON.parse(localStorage.getItem('Todos'))
            setTodos(List)
        }
    })

    const deleteTodo = (e) => {
        const filteredArray = todos.filter((item, index) => (
             e !== item
        ))
   
        localStorage.setItem('Todos', JSON.stringify(filteredArray)) 
    }

    return (
        <>
            <form onSubmit={addToDo}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button>Add todo</button>
            </form>

            {
                todos.map((item, index) => (
                    <li>{item}<button onClick={() => deleteTodo(item)}>Delete todo</button></li>
                ))
            }
        </>
    )
}

export default Todos