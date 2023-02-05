import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

    const [state, setState] = useState([])

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setState(data);
        })

    return (
        <>
            <section className='mySection'>
                <div className="container">
                    <div className="row">
                        <Card name='Narmin' />
                        <Card name='Selcan' />
                        <Card name='Ramil' />
                    </div>
                </div>
            </section>

            <section>
                {
                    state.map((item) => (
                        <h2>{item.name}</h2>
                      )
                    )
                }
            </section>
        </>

    )
}

export default App