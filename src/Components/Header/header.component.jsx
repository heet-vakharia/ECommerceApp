import React from 'react'
import './header.styles.scss'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

export default function Header() {
    return (
        <Router>
        <div className='header'>
            <Link href='/'  className='logo-container' >
                <Logo className ='logo' />
            </Link>
            <div className="options">
                <Link to="/shop" className ='option' >Shop</Link>
            </div>
        </div>
        </Router>
    )
}
