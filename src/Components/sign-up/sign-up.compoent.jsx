import React, { Component } from 'react';
import { auth } from '../firebase/firebase.utils';
import {createUserProfileDocument} from '../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../form-button/custom-button.component';
import './sign-up.styles.scss'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
         }
    }
    handleSumit = async event => {
        event.preventDefault()
        const {displayName , email , password , confirmPassword } = this.state

        if(password !== confirmPassword){
            alert('Password dont match')
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email ,password)
            createUserProfileDocument(user , {displayName} )

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        } catch (error) {
            console.log(error)
        }

    }

    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }
    render() { 
        const {displayName , email , password , confirmPassword } = this.state
        return ( 
            <div className="sign-up">
                <h2 className="title">I dont have a account</h2>
                <span>Sign up with email and password</span>
                <form onSubmit={this.handleSumit} className="sign-up-form">
                    <FormInput type='text' name='displayName' value = {displayName} onChange = {this.handleChange} label = 'Display Name' required/>
                    <FormInput type='Email' name='email' value = {email} onChange = {this.handleChange} label = 'Email' required/>
                    <FormInput type='password' name='password' value = {password} onChange = {this.handleChange} label = 'Password' required/>
                    <FormInput type='password' name='confirmPassword' value = {confirmPassword} onChange = {this.handleChange} label = 'Confirm Password' required/>
                    <CustomButton type='submit' >Sign Up</CustomButton>
                </form>
            </div>

         );
    }
}
 
export default SignUp;