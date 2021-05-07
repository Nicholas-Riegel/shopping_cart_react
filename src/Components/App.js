import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext, useEffect } from 'react'

import { ContextFunction, Context } from './Context'
import Nav from './Nav'
import Shop from './Shop'
import Cart from './Cart'

const Home = () => {
    
    const {tabs} = useContext(Context)
    const [active, setActive] = tabs

    useEffect(() => setActive(1), [])
    
    return (
        <div className='home_div'>
            <h1>Welcome Home</h1>
        </div >
    )
}

const App = () => (
    <ContextFunction>
        <Router>
            <Nav />
            <Switch>
                <Route path='' exact component={Home} />
                <Route path='/shop' component={Shop} />
                <Route path='/cart' component={Cart} />
                <Route path="*" component={Home} />
            </Switch>
        </Router>
    </ContextFunction>
)

export default App