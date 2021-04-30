import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Shop from './Shop'
import Nav from './Nav'

export default function Router() {
    return (    
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
            </Switch>
        </BrowserRouter>
    )
}
