import React , {Component} from 'react';
import Homepage from  './Pages/HomePage/Homepage.component';
import Shop from './Pages/Shop/Shop.component.jsx'
import Header from './Components/Header/header.component'
import SignInAndSignUpPage from './Pages/Sign-in-and-Sign-up-page/Sign-in-and-Sign-up-page.component'
import {auth} from './Components/firebase/firebase.utils'


import {BrowserRouter as Router,Route , Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentUser : null
    }
  }
  unSubscribeFromAuth = null
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user})
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render() {
    return (
      <div>
     
          <Router>
          <Header currentUser ={this.state.currentUser} />
            <Switch>
               <Route exact path='/' component={Homepage} / >
               <Route path = '/shop' component = {Shop} />
                <Route path ='/signin' component = {SignInAndSignUpPage} />
            </Switch>
            
          </Router>
          
      </div>
    );
  }
  
}
export default App;
