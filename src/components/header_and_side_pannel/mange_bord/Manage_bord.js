import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashbord from '../dashbord/Dashbord'
const Manage_bord = (props) => {
    return (
        <div className="mang">
            <Router>
            <Switch>
                    <Route path="/" exact>
                        <Dashbord/>
                    </Route>
                
                    <Route path="/home" exact>
                        <Dashbord />
                    </Route>
            </Switch>
            </Router>
        </div>
    );
}

export default Manage_bord;
