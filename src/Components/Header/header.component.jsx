import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../firebase/firebase.utils'

const Header = ({currentUser}) =>  {
    return (
        <div className='header'>
        <Link className='logo-container' to='/'>
                <Logo className ='logo' />
            </Link>
            <div className="options">
                <Link to="/shop" className ='option' >SHOP</Link>
                <Link to="/shop" className ='option' >CONTACT</Link>
                {
                    currentUser?(
                        <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
                    ):
                    <Link to="/signin" className ='option' >SIGN IN </Link>
                }
            </div>

        </div>
    )
}
export default Header
