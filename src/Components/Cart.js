import { useContext } from 'react'
import {ProductsContext} from './ProductsContext'

export default function Cart() {

    const [items, setItems] = useContext(ProductsContext)

    const cartList = items.filter(x => x.count > 0)

    return (
        <div>
            <h1>Cart Page</h1>
            {cartList.map(x =>(
                <div key={x.id} className='item_div'>
                    <h3>{x.title}</h3>
                    <img src={x.image} alt={x.title}/>
                    <p>Price: ${x.price}</p>    
                    <p>Add to Cart:</p> 
                    
                    <button
                        onClick={() => setItems(items.map(y => (y.id === x.id) ? ({ ...y, count: y.count += 1 }) : y ))}
                    >+</button>
                    
                    <p>{x.count}</p>
                    
                    <button
                        onClick={() => setItems(items.map(y => (y.id === x.id && y.count > 0) ? ({ ...y, count: y.count -= 1 }) : y
                        ))}
                    >-</button>
                </div>
            ))}
        </div>
    )
}