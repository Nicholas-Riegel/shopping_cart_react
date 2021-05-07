import { useContext, useLayoutEffect, useEffect} from 'react'
import { Context } from './Context'

const Cart = () => {

    const {products, tabs} = useContext(Context)
    const [items, setItems] = products
    const [active, setActive] = tabs

    const cartList = items.filter(x => x.count > 0)

    useEffect(
        () => {
            setActive(3)        
        },
        []
    )

    useLayoutEffect(() => {
            window.scrollTo(0, 0)
        },
        []
    )

    return (
        <div className='cart_div'>
            {cartList.map( (x, i) => (
                <div key={i} className='item_cart_div' style={{paddingRight: '20px'}}>
                    <div className="title_div">
                        <h3>{x.title}</h3>
                        <img src={x.image} alt={x.title} style={{height: '50px', marginTop: '10px'}}/>
                    </div>
                    <div className="wrap_price_divs">
                        <p className='price_add'>Price: ${x.price}</p>    
                        <p className='price_add'>Quantity:</p> 
                        <div className="buttons_div">
                            <button onClick={() => setItems(
                                items.map(
                                    y => y.id === x.id ? { ...y, count: (y.count === "" ? 1 : y.count + 1 )} : y
                                )
                            )}>+</button>
                            <input
                                type="text"
                                value={x.count}
                                style={{ width: '30px', height: '20px', margin: '0 10px' }}
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
            <div className='checkout_div'>
                <h3>Total: ${
                    items
                        .filter(x => x.count > 0)
                        .reduce((sum, x) => sum + x.count * x.price, 0)
                        .toFixed(2)
                }</h3>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart