import React from 'react'
import './header.styles.scss'
import {BrowserRouter as Router, Link , withRouter } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () =>  {
    return (
        <Router>
        <div className='header'>
            <Link to='/'  className='logo-container' >
                <Logo className ='logo' />
            </Link>
            <div className="options">
                <Link to="/shop" className ='option' >Shop</Link>
            </div>
        </div>
        </Router>
    )
}
export default withRouter(Header)
