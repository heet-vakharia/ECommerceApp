import React from 'react'
import SignIn from '../../Components/SignIn/SignIn.component' 
import SignUp from '../../Components/sign-up/sign-up.compoent'
import './Sign-in-and-Sign-up-page.styles.scss'

export default function SignInAndSignUpPage() {
    return (
    <div className = 'sign-in-and-sign-up'>
            <SignIn / >
            <SignUp />

        </div>
    )
}
