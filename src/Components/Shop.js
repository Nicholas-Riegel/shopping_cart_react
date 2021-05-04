import { useContext } from 'react'
import { ProductsContext } from './ProductsContext'

export default function Shop() {
    
    const [items, setItems] = useContext(ProductsContext)
    
    return (
        <div>
            {items.map(x =>(
                <div key={x.id} className='item_div'>
                    <div className="title_div">
                        <h3>{x.title}</h3>
                        <img src={x.image} alt={x.title} />
                    </div>
                    <div className="wrap_price_divs">
                        <p className='price_add'>Price: ${x.price}</p>    
                        <p className='price_add'>Add to Cart:</p> 
                        <div className="buttons_div">
                            <button
                                onClick={() => setItems(items.map(y => y.id === x.id ? { ...y, count: y.count += 1 } : y ))}
                            >+</button>
                            
                            <p>{x.count}</p>
                            
                            <button
                                onClick={() => setItems(items.map(y => y.id === x.id && y.count > 0 ? { ...y, count: y.count -= 1 } : y
                                ))}
                            >-</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}