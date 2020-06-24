import React , {Component} from 'react';
import Homepage from  './Pages/HomePage/Homepage.component';
import Shop from './Pages/Shop/Shop.component.jsx'
import Header from './Components/Header/header.component'

import {BrowserRouter as Router,Route , Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
     
          <Router>
          <Header />
            <Switch>
               <Route exact path='/' component={Homepage} / >
              <Route path = '/shop' component = {Shop} />
            </Switch>
            
          </Router>
          
      </div>
    );
  }
  
}
export default App;
