import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashbord from '../dashbord/Dashbord'
import Login from '../login/Login'
import Header from '../header/Header'
import Vendor_manage from '../vendor_manage/Vendor'
import Add_vendor from '../add vendor/Add_vendor'
import Edit_vendor from '../edit_vendor/Edit_vendor'
import Users from '../users/user'
import Category from '../catogry/catogry'
import './mng.css'
import Orders from '../orders_management/order_management'


const Manage_bord = (props) => {
  
    return (
      <div id="mng" className="mange">
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
              <Route path="/dashboard">
                <Dashbord />
              </Route>
              <Route path="/vendor">
                <Vendor_manage />
              </Route>
              <Route path="/add_vendor">
                <Add_vendor />
              </Route>

              <Route path="/edit_vendor/:id">
                <Edit_vendor />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/category">
                <Category />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
}

export default Manage_bord;
