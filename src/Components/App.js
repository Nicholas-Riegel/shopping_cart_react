import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Shop from './Shop'
import Nav from './Nav'
import Cart from './Cart'
import { ProductsProvider } from './ProductsContext'

export default function App() {
    
    return (
        <ProductsProvider>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route
                        path='/' exact
                        component={Home}
                    />
                    <Route
                        path='/shop'
                        component={Shop}
                    />
                    <Route
                        path='/cart'
                        component={Cart}
                    />
                </Switch>
            </BrowserRouter>
        </ProductsProvider>
    )
}
