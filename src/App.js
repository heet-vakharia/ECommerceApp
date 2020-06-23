import React from 'react';
import Homepage from  './Pages/HomePage/Homepage.component';
import Shop from './Pages/Shop/Shop.component.jsx'
import Header from './Components/Header/header.component'

import {BrowserRouter as Router,Route , Switch} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Demo/>
        <Header />
          <Router>
            <Switch>
               <Route exact path='/' component={Homepage} / >
              <Route exact path = '/shop' component = {Shop} />
            </Switch>
            
          </Router>
          
      </div>
    );
  }
  
}
const Demo =()=>{
  console.log('000000')
  return <p>Helllo</p>
}

export default App;
