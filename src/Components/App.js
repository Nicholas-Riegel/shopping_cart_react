import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ContextFunction } from './Context'
import Nav from './Nav'
import Shop from './Shop'
import Cart from './Cart'

const Home = () => (
    <div className='home_div'>
        <h1>Welcome Home</h1>
    </div>
)

const App = () => (
    <ContextFunction>
        <Router>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </Router>
    </ContextFunction>
)

export default App