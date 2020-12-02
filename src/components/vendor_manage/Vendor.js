
import React,{useEffect,useState} from 'react';
import './vendor.css';
import vendor_image from './assets/vendor_img.jpg';
import {Redirect,Link} from 'react-router-dom'
import axios from 'axios';
import {Spinner} from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css";

const Vendor = () => {
    const [UploadPercentage, setUploadPercentage] = useState(0);

    const [isLogged,setLogged] = useState();
    const [vendor_data,setVendor_data] = useState([]);
    const [isLoding,setIsLoding] = useState(false);
    const [config,setConfig] = useState({});
           useEffect(()=>{
              let configg={};
                let token = localStorage.getItem("token");

                if(token!== null){
                    config.headers = { authorazation: "Bearer " + token };
                    setConfig(configg)
                }
                       axios.get("isLogged", config).then((res) => {
                         setLogged(res.data.loggin);
                         console.log(res);
                       });
                      
                    const fetch_vendors = async()=>{
        
                      setIsLoding(true)
                       let response = await axios.get("vendors",config,
                         {
                           onDownloadProgress: (progressEvent) => {
                             let percentCompleted = Math.round((progressEvent.loaded * 100) /progressEvent.total);
                             console.log(progressEvent.lengthComputable);
                             console.log(percentCompleted);
                           },
                         },
                         
                       );
                        // console.log(response.data.vendors);
                        setVendor_data(response.data.vendors)
                        setIsLoding(false)

                    }
                    fetch_vendors();
                
                 
             
           },[])
console.log(isLogged);
const On_remove_vendor =(id)=>{
  axios.delete('/remove_vendor/'+id).then((res)=>{
    console.log(res);
  })
}
    return (
      <>
        {isLogged === false ? (
          <>
            <Redirect to="/login" />
          </>
        ) : (
          <>
            {isLoding === true ? (
              <>
                <div className="loding_spinne_wrapper">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </>
            ) : (
              <>
                <div className="add_vendor_wrapper">
                  <div className="vendor_btn">
                    <Link to="/add_vendor" className="addvendor_link">
                      Add Vendor
                    </Link>
                  </div>
                </div>
                <div className="vendor_manage">
                  <div className="vendor_wrapper">
                    {vendor_data.map((vendor, key) => {
                      return (
                        <div className="vendor_card_wrapper" key={vendor._id}>
                          <div className="vendor_image_wrapper">
                            <img
                              src={
                                "http://localhost:3008/vendor_images/" +
                                vendor._id +
                                ".jpg"
                              }
                              alt={vendor.shope_name}
                              className="vender_img"
                              loading="lazy"
                            />
                          </div>
                          <div className="vendor_info_wrapper">
                            <div className="vendor_name">
                              <h4>{vendor.shope_name}</h4>
                            </div>
                            <div className="vendor_detials">
                              <ul className="vendor_info">
                                <li>
                                  <i class="fas fa-user"></i>{" "}
                                  <span>{vendor.name.toLowerCase()}</span>
                                </li>
                                <li>
                                  <i className="fas fa-calendar-alt"></i>{" "}
                                  <span>{vendor.serviceDays}</span>
                                </li>
                                <li>
                                  <i className="fas fa-clock"></i>{" "}
                                  <span>{vendor.serviceTime}</span>
                                </li>
                                <li>
                                  <i className="fas fa-map-marked-alt"></i>{" "}
                                  <span>{vendor.location.toLowerCase()}</span>
                                </li>
                              </ul>
                            </div>
                            <div className="IWrapper">
                              <Link to={`/edit_vendor/${vendor._id}`}>
                                <div className="edit_vendor">
                                  <div className="edit_circle">
                                    <i class="fas fa-pencil-alt"></i>
                                  </div>
                                </div>
                              </Link>
                              <Link onClick={() => On_remove_vendor(vendor._id)}>
                                <div className="edit_vendor">
                                  <div className="edit_circle">
                                    <i class="fas fa-trash-alt"></i>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </>
    );
}

export default Vendor;
