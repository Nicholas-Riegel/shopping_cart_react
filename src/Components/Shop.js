import {useState, useEffect} from 'react'

export default function Shop() {
    
    const [items, setItems] = useState([])

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(x => x.json())
                .then(x => setItems(x))
        },
        []
    )

    return (
        <div>
            <h1>This is the Shopping page</h1>
            {items.map(x =>(
                <div key={x.id} className={'item_div'}>
                    <h3>{x.title}</h3>
                    <hr></hr>
                </div>
            ) ) }
        </div>
    )
}
