import { useContext, useLayoutEffect } from 'react'
import { Context } from './Context'

const Shop = () => {
    
    const [items, setItems] = useContext(Context)
    
    useLayoutEffect(() => {
            window.scrollTo(0, 0)
        },
        []
    )

    return (
        <div className='shop_div'>
            {items.map( (x, i) => (
                <div key={i} className='item_div'>
                    <div className="title_div">
                        <h3>{x.title}</h3>
                        <img src={x.image} alt={x.title} />
                    </div>
                    <div className="wrap_price_divs">
                        <p className='price_add'>Price: ${x.price}</p>    
                        <p className='price_add'>Add to Cart:</p> 
                        <div className="buttons_div">
                            <button onClick={() => setItems(
                                items.map(
                                    y => y.id === x.id ? { ...y, count: (y.count === "" ? 1 : y.count + 1 )} : y
                                )
                            )}>+</button>
                            <input
                                type="text"
                                value={x.count}
                                style={{ width: '30px', height: '20px' }}
                                onChange={(e) => setItems(
                                    items.map(
                                        y => y.id === x.id ? { ...y, count: (parseInt(e.target.value) || e.target.value === "0" ? parseInt(e.target.value) : '' )} : y
                                    )
                                )}
                            />
                            <button onClick={() => setItems(
                                items.map(
                                    y => y.id === x.id && y.count > 0 ? { ...y, count: y.count -= 1 } : y
                                )
                            )}>-</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Shop