import React from 'react';
import Homepage from  './Pages/HomePage/Homepage.component';
import Shop from './Pages/Shop/Shop.component.jsx'

import {BrowserRouter as Router,Route , Switch} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
        <Router >
          <Switch>
             <Route exact path='/'  component={Homepage} / >
            <Route  path = '/shop' component = {Shop} />
          </Switch>
          
        </Router>
        
    </div>
  );
}

export default App;
