import React, { useState } from 'react'

const Search = ({ getUser }) => {

    const [query, setQuery] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        console.log(query);
        getUser(query)
        console.log('Search user');
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
                <button>Seacrh user</button>
            </form>
        </>
    )
}

export default Search