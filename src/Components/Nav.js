import { Link } from 'react-router-dom'

export default function Nav() {
    
    return (
        <nav>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/cart'>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}
