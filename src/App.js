
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header'
import Manage_Bord from './components/mange_bord/Manage_bord'

function App() {
  return (
    <div className="App">
    <Manage_Bord/>
    
    </div>
  );
}

export default App;
