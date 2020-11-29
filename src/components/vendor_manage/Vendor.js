import React,{useEffect,useState} from 'react';
import './vendor.css';
import vendor_image from './assets/vendor_img.jpg';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
const Vendor = () => {
    const [isLogged,setLogged] = useState();
            useEffect(()=>{
                let config={};
                let token = localStorage.getItem("token");

                if(token!== null){
                    config.headers = { aauthorazation: "Bearer " + token };
                    
                } else{
                axios.get("isLogged",config).then((res)=>{
                    setLogged(res.data.loggin);
                    console.log(res);

                });
            }

            },[])
console.log(isLogged);
    return (
      <>
        {isLogged === false ? (
          <>
            <Redirect to="/login" />
          </>
        ) : (
          <>
            <div className="vendor_manage">
              <div className="vendor_wrapper">
                <div className="vendor_card_wrapper">
                  <div className="vendor_image_wrapper">
                    <img
                      src={vendor_image}
                      alt=""
                      className="vender_img"
                      loading="lazy"
                    />
                  </div>
                  <div className="vendor_info_wrapper">
                    <div className="vendor_name">
                      <h4>Burger House</h4>
                    </div>
                    <div className="vendor_detials">
                      <ul className="vendor_info">
                        <li>
                          <i className="fas fa-calendar-alt"></i>{" "}
                          <span>Monday - sunday</span>
                        </li>
                        <li>
                          <i className="fas fa-clock"></i>{" "}
                          <span>9:00 - 5:00</span>
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt"></i>{" "}
                          <span>Calicut</span>
                        </li>
                      </ul>
                    </div>
                    <div className="edit_vendor">
                      <div className="edit_circle">
                        <i class="fas fa-pencil-alt"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
}

export default Vendor;
