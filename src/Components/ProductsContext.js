import { useState, createContext, useEffect } from 'react'

export const ProductsContext = createContext()

export const ProductsProvider = (x) => {

    const [items, setItems] = useState([])

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(x => x.json())
                .then(x => setItems(x.map(x => ({ ...x, count: 0 }) )))
        },
        []
    )

    return (
        <ProductsContext.Provider value={[items, setItems]}>
            {x.children}
        </ProductsContext.Provider>
    )
}