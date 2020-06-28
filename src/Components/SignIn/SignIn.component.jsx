import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import './SignIn.styles.scss'
import CustomButton from "../form-button/custom-button.component";
import {signInWithFacebook , signInWithGoogle , signInWithTwitter} from '../firebase/firebase.utils'

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  OnSumitHandler = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  HandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="">I already have a account</h2>
        <span className="">Sign in with your email and password</span>
        <form onSubmit={this.OnSumitHandler}>
          <FormInput
            type="email"
            name="email"
            label='Email'
            handleChange={this.HandleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.HandleChange}
            label='Password'
            value={this.state.password}
            required
          />
          <div className="button">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithFacebook} signMethod = 'Facebook'> Facebook</CustomButton>
            <CustomButton onClick={signInWithGoogle} signMethod = 'Google'> Google</CustomButton>
            <CustomButton onClick={signInWithTwitter} signMethod = 'Twitter'> Twitter</CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}
