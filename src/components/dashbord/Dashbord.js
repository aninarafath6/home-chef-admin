import React,{useEffect,useState ,useContext} from 'react';
import { Bar,Line} from 'react-chartjs-2'
import { Chart } from 'react-chartjs-2';
import {Redirect,useHistory} from 'react-router-dom'
import {LogutContaxt} from '../header/Header'
import './dashbord.css'
import './mobile.css'
import axios from 'axios'
   import { roundedBar } from "./rounded";
const Dashbord = (props) => {


   const route = useHistory();
   const logout = useContext(LogutContaxt);
   const [isLogin,setIslogin] =useState();



let config={};
                     useEffect(()=>{
                        let token =localStorage.getItem("token")
                        if (token!==null){
                        config.headers={ authorazation: "Bearer " + token};
                        }
                  axios.get('dashbord',config)
                  .then(res=>{
                  setIslogin(res.data.loggin) 
                  })
               
                     },[])



const options = {
   
  cornerRadius: 2,
  responsive: true,
  tooltips: { enabled: true },
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
                offsetGridLines: true
            }
      },
    ],
    yAxes: [
      {
        gridLines: {
                offsetGridLines: false
            },
        display: true,
        ticks: {
          min: 0,
        },
      },
    ],
  },
};

let barData = {
  labels: [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nav",
    "dec",
  ],
  datasets: [
    {
      barPercentage: 5,
      barThickness: 15,
      maxBarThickness: 12,
      minBarLength: 2,
      backgroundColor: "rgb(64, 122, 214)",
      hoverBackgroundColor: "rgb(64, 122, 214)",
      data: [80, 20, 30, 60, 50, 60, 90, 30, 90, 10, 80, 90],
    },
  ],
};

let lineData = {
  labels: [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nav",
    "dec",
  ],
  datasets: [
    {
      barPercentage: 5,
      barThickness: 15,
      maxBarThickness: 12,
      backgroundColor: "rgb(0, 0, 0,0)",
      borderColor: "rgb(64, 122, 214)",
      minBarLength: 2,
      hoverBackgroundColor: "rgb(64, 122, 214)",
      data: [150, 20, 30, 0, 50, 30, 70, 60, 90, 50, 150, 80],
    },
    {
      barPercentage: 5,
      barThickness: 15,
      maxBarThickness: 12,
      backgroundColor: "rgb(0, 0, 0,0)",
      borderColor: "rgb(67, 160, 71)",
      minBarLength: 2,
      hoverBackgroundColor: "rgb(67, 160, 71)",
      data: [20, 60, 30, 10, 80, 60, 20, 80, 10, 100, 150, 15],
    },
  ],
};

    return (
      <>
        {isLogin === false ? (
          <>
            <Redirect to="/login" />
          </>
        ) : (
          <>
            <div className="dashbord">
              <div className="dashboard_header">
               <div className="dashboard_header_name">
                   <h3>Home Chef Dashboard</h3>
                <h6>Welcome back, Lucy! We've missed you. 👋</h6>
               </div>
               
               
              </div>
              <div className="dashboard_cards">
                {/* card start */}
                <div class="card_container">
                  <div className="card_top">
                    <h6>Orders</h6>
                    <div className="indicator">Monthly</div>
                  </div>
                  <div className="card_data">₹10,000.00</div>
                  <div className="card_footer">
                    <h6>
                      <span>+18% </span>
                      Since last month
                    </h6>
                  </div>
                </div>
                {/* card end */}
                {/* card start */}
                <div class="card_container">
                  <div className="card_top">
                    <h6>Items</h6>
                    <div className="indicator">Monthly</div>
                  </div>
                  <div className="card_data">100</div>
                  <div className="card_footer">
                    <h6>
                      <span>+19% </span>
                      Since last month
                    </h6>
                  </div>
                </div>
                {/* card end */}
                {/* card start */}
                <div class="card_container">
                  <div className="card_top">
                    <h6>Category</h6>
                    <div className="indicator">Monthly</div>
                  </div>
                  <div className="card_data">20</div>
                  <div className="card_footer">
                    <h6>
                      <span>+25% </span>
                      Since last month
                    </h6>
                  </div>
                </div>
                {/* card end */}
                {/* card start */}
                <div class="card_container">
                  <div className="card_top">
                    <h6>Users</h6>
                    <div className="indicator">Monthly</div>
                  </div>
                  <div className="card_data">30,000</div>
                  <div className="card_footer">
                    <h6>
                      <span>+10% </span>
                      Since last month
                    </h6>
                  </div>
                </div>
                {/* card end */}
              </div>
              <div className="sale_report_chart_wrapper">
                <Bar data={barData} options={options}  />
                <Line data={lineData} options={options}  />
              </div>
       
            </div>
          </>
        )}
      </>
    );
}

export default Dashbord;
 