import React, { useState, useRef, useEffect } from "react";
import { Redirect ,useHistory} from "react-router-dom";
import "./add_vendor.css";
import formData from "form-data";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



const Add_vendor = () => {
  const routeHistory = useHistory();
   const classes = useStyles();
  const selected_image = useRef();

  
   const [open, setOpen] = useState(false);
  
   const onAddVendor = () => {

  };

   const handleClose = (event, reason) => {
     if (reason === "clickaway") {
       return;
     }

     setOpen(false);
   };


  const popUpRef = useRef();
  const [isLogged, setLogged] = useState();

  const [file_path, setFile_path] = useState("Choose a File");
  const [UploadPercentage, setUploadPercentage] = useState(0);
  const [vendor_name, setVendor_name] = useState("");
  const [shope_name, setShop_name] = useState("");
  const [vendor_password, setVendor_password] = useState("");
  const [vendor_email, setVendor_email] = useState("");
  const [location, setLocation] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [serviceDays, setServiceDays] = useState("");
  const [imgFile, setImgFile] = useState({});
  const [status, setStatus] = useState(false);
  const [alertData, setAlertData] = useState('');
  const [alertColor, setAlertColor] = useState('');
  useEffect(()=>{
    let config ={}
    let token = localStorage.getItem("token");
    if (token !== null) {
      config.headers = { authorazation: "Bearer " + token };
    }
     axios.get("/isLogged",config).then(response=>{

            if(!response.data.loggin){
              routeHistory.push('/login')
            }
        })
    },[])
  const onFileChange = (e) => {
    setImgFile(e.target.files[0]);
    console.log(imgFile);
    if (e.target.files[0]) {
      setFile_path(e.target.files[0].name);
      selected_image.current.src = URL.createObjectURL(e.target.files[0]);
      popUpRef.current.classList.remove("open_popup");
    } else {
      setFile_path("Choose a File");
    }
  };
  const remove_popup = () => {
    popUpRef.current.classList.add("open_popup");
  };
  const submitHadiler = (e) => {
    e.preventDefault();
    let formdata = new formData();

    formdata.append("image", imgFile);
    formdata.append("name", vendor_name);
    formdata.append("shope_name", shope_name);
    formdata.append("email",vendor_email);
    formdata.append("password",vendor_password);
    formdata.append("location", location);
    formdata.append("serviceTime", serviceTime);
    formdata.append("serviceDays", serviceDays);

    const options = {
      onUploadProgress: (progrssEvent) => {
        const { loaded, total } = progrssEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb  of ${total} kb | ${percent}%`);
        if (percent <= 100) {
          setUploadPercentage(percent);
        }
      },
    };
    let config ={}
    let token = localStorage.getItem("token");
    if (token !== null) {
      config.headers = { authorazation: "Bearer " + token };
    }
    axios.post("add-vendor", formdata, options,config).then((res) => {
      console.log(res);
      setStatus(res.data.status)
      if(res.data.status){
        setAlertData("success fully added a vendor");
        setAlertColor('success')
setOpen(true)
      }
      // UploadPercentage(100);
      // setTimeout(() => {
      //   UploadPercentage(0);
      // }, 1000);
    });
  };

  return (
    <>
      {isLogged === false ? (
        <Redirect to="/login" />
      ) : (
        <>
          {status === true ? (
            <Redirect to="/vendor" />
          ) : (
            <>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  {alertData}
                </Alert>
              </Snackbar>
   
              <div className="add_vendor_container">
                <div ref={popUpRef} className="popup open_popup">
                  <div className="selected_img">
                    <img ref={selected_image} alt="" />
                    <i
                      onClick={remove_popup}
                      className="fas fa-times-circle"
                    ></i>{" "}
                  </div>
                </div>
                <div id="add_vendor_section" className="add_vendor_section">
                  <form onSubmit={submitHadiler} className="add_vendor_form">
                    <div className="add_vendor_header_label">
                      {UploadPercentage === 0 ? (
                        <h3>ADD VENDOR</h3>
                      ) : (
                        <h3>Uploading {UploadPercentage}%</h3>
                      )}
                    </div>
                    <div className="vendor_input_section">
                      <div className="vendor_input">
                        <input
                          name="vendor_name"
                          type="text"
                          required
                          id="vendor_name"
                          onChange={(e) => setVendor_name(e.target.value)}
                        />
                        <label
                          htmlFor="vendor_name"
                          className="vender_input_label"
                        >
                          Vendor Name
                        </label>
                      </div>
                      <div className="vendor_input">
                        <input
                          name="shope_name"
                          type="text"
                          required
                          id="shop_name"
                          onChange={(e) => setShop_name(e.target.value)}
                        />
                        <label
                          htmlFor="shop_name"
                          className="vender_input_label"
                        >
                          Shope Name
                        </label>
                      </div>
                      <div className="vendor_input">
                        <input
                          name="shope_name"
                          type="email"
                          required
                          id="vendor_email"
                          onChange={(e) => setVendor_email(e.target.value)}
                        />
                        <label
                          htmlFor="vendor_email"
                          className="vender_input_label"
                        >
                          vendor email
                        </label>
                      </div>
                      <div className="vendor_input">
                        <input
                          name="shope_name"
                          type="password"
                          required
                          id="vendor_password"
                          onChange={(e) => setVendor_password(e.target.value)}
                        />
                        <label
                          htmlFor="vendor_password"
                          className="vender_input_label"
                        >
                          vendor password
                        </label>
                      </div>

                      <div className="vendor_input">
                        <input
                          name="location"
                          type="text"
                          required
                          id="location"
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        <label
                          htmlFor="location"
                          className="vender_input_label"
                        >
                          Location
                        </label>
                      </div>
                      <div className="vendor_input">
                        <input
                          name="service_taime"
                          type="text"
                          required
                          id="time"
                          onChange={(e) => setServiceTime(e.target.value)}
                        />
                        <label htmlFor="time" className="vender_input_label">
                          Service Time eg (9:00 to 8:00)
                        </label>
                      </div>
                      <div className="vendor_input">
                        <select
                          name="select"
                          required
                          name=""
                          id=""
                          onChange={(e) => setServiceDays(e.target.value)}
                        >
                          <option value="" className="choos_servise_days">
                            Choose Servise days
                          </option>
                          <option value="Monday To Sunday">
                            Monday To Sunday
                          </option>
                          <option value="Monday To Friday">
                            Monday To Friday
                          </option>
                        </select>
                      </div>
                      <div className="vendor_input">
                        <input
                          name="img"
                          onChange={onFileChange}
                          className="file_button"
                          type="file"
                          required
                          id="time"
                        />
                        <label
                          htmlFor="time"
                          className=" sp_vender_input_label"
                        >
                          {file_path}
                        </label>
                      </div>

                      <input
                        className="submit_vendor"
                        type="submit"
                        value="ADD VENDOR"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Add_vendor;
