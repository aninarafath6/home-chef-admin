
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header'
import Login from './components/Login/Login'
function App() {
  return (
    <div className="App">
          <Router>
               <Header/>
                <Switch>
                    <Route path="/login">
                   <Login/>
                      </Route>
            </Switch>
        </Router>
    
    </div>
  );
}

export default App;
