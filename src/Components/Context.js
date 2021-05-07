import { useState, createContext, useEffect } from 'react'

export const Context = createContext()

export const ContextFunction = (x) => {

    const [items, setItems] = useState([])
    const [active, setActive] = useState(0)

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(x => x.json())
                .then(x => setItems(x.map(x => ({ ...x, count: 0 }) )))
        },
        []
    )

    return (
        <Context.Provider value={{ products: [items, setItems], tabs: [active, setActive]}}>
            {x.children}
        </Context.Provider>
    )
}