import React, { useState, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./add_vendor.css";
import formData from "form-data";
import axios from "axios";
const Add_vendor = () => {
  const selected_image = useRef();
  const popUpRef = useRef();
  const [isLogged, setLogged] = useState();

  const [file_path, setFile_path] = useState("Choose a File");
  const [UploadPercentage, setUploadPercentage] = useState(0);
  const [vendor_name, setVendor_name] = useState("");
  const [shope_name, setShop_name] = useState("");
  const [location, setLocation] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [serviceDays, setServiceDays] = useState("");
  const [imgFile, setImgFile] = useState({});
  const [status, setStatus] = useState(false);
  useEffect(() => {
    let config = {};
    let token = localStorage.getItem("token");

    if (token !== null) {
      config.headers = { aauthorazation: "Bearer " + token };
    } else {
      axios.get("isLogged", config).then((res) => {
        setLogged(res.data.loggin);
        console.log(res);
      });
    }
  }, []);
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
    axios.post("add-vendor", formdata, options).then((res) => {
      console.log(res);
      setStatus(res.data.status)
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
         
      {
        status === true ? (
          <Redirect to="/vendor" />
        ):(
          <>
 <div className="add_vendor_container">
            <div className="add_vendor_ovarly">
              <div ref={popUpRef} className="popup open_popup">
                <div className="selected_img">
                  <img ref={selected_image} alt="" />
                  <i
                    onClick={remove_popup}
                    class="fas fa-times-circle"
                  ></i>{" "}
                </div>
              </div>
              <div className="add_vendor_section">
                <form onSubmit={submitHadiler} className="add_vendor_form">
                  <div className="add_vendor_header_label">
                    {UploadPercentage === 0 ? (
                      <h3>Add Vendor</h3>
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
                      <label htmlFor="shop_name" className="vender_input_label">
                        Shope Name
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
                      <label htmlFor="location" className="vender_input_label">
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
                      <label htmlFor="time" className=" sp_vender_input_label">
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
            </div>
          </>
        )
      }
          );
        </>
      )}
    </>
  );
};

export default Add_vendor;
