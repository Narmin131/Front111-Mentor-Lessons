import { createContext, useEffect, useState } from "react";


export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {


    const [favorites, setFavorites] = useState(localStorage.getItem('Books') ? JSON.parse(localStorage.getItem('Books')) : [])

    useEffect(() => {
        localStorage.setItem('Books', JSON.stringify(favorites))
    }, [favorites])

    const addFavBooks = (book) => {

        const oldFavorites = [...favorites]

        const newFavorites = oldFavorites.concat(book)
        setFavorites(newFavorites)
    }

    const removeFavBooks = (id) => {
        const oldFavorites = [...favorites]

        const newFavorites = oldFavorites.filter((item, index) => {
            return item.id !== id
        })

        setFavorites(newFavorites)
    }

    return (
        <GlobalContext.Provider value={{ favorites, setFavorites, addFavBooks, removeFavBooks }}>{children}</GlobalContext.Provider>
    )
}