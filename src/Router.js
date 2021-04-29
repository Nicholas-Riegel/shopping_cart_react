import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/Home'
import Shop from './Components/Shop'
import Nav from './Components/Nav'

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
