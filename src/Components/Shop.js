import {useState, useEffect} from 'react'

export default function Shop() {
    
    const [items, setItems] = useState([])

    useEffect(
        () => {
            fetch('https://fakestoreapi.com/products')
                .then(x => x.json())
                .then(x => setItems(x.map(y => ({ ...y, count: 0 }) )))
        },
        []
    )
    
    return (
        <div>
            <h1>This is the Shopping page</h1>
            {items.map(x =>(
                <div key={x.id} className='item_div'>
                    <h3>{x.title}</h3>
                    <img src={x.image} alt={x.title}/>
                    <p>Price: ${x.price}</p>    
                    <p>Add to Cart:</p> 
                    
                    <button
                        onClick={() => setItems(items.map(y => (y.id === x.id) ? ({ ...y, count: y.count += 1 }) : (y)))}
                    >+</button>
                    
                    <p>{x.count}</p>
                    
                    <button
                        onClick={() => setItems(items.map(y => (y.id === x.id && y.count > 0) ? ({ ...y, count: y.count -= 1 }) : (y)
                        ))}
                    >-</button>
                </div>
            ))}
        </div>
    )
}