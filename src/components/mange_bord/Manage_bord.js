import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashbord from '../dashbord/Dashbord'
import Login from '../Login/Login'
import Header from '../header/Header'
import Vendor_manage from '../vendor_manage/Vendor'
import Add_vendor from '../add vendor/Add_vendor'
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
              {/* <Route path="/" exact>
                <Dashbord />
              </Route>
              <Route path="/dashbord" >
                <Dashbord />
              </Route> */}
              <Route path="/vendor">
                <Vendor_manage/>
              </Route>
              <Route to="/add_vendor">
                <Add_vendor/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}

export default Manage_bord;
