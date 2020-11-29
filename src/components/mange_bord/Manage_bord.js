import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashbord from '../dashbord/Dashbord'
import Login from '../Login/Login'
import Header from '../header/Header'
import Vendor_manage from '../vendor_manage/Vendor'
const Manage_bord = (props) => {
    let va=Dashbord;
    return (
      <div className="mange">
        <Router>
          <Header />
          <Route path="/login">
            <Login />
          </Route>
          <div className="mang">
            <Switch>
              <Route path="/" exact>
                <Dashbord />
              </Route>
              <Route path="/dashbord" >
                <Dashbord />
              </Route>
              <Route path="/vendor">
                <Vendor_manage/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}

export default Manage_bord;
