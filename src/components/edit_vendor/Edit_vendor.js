import React,{useEffect,useRef,useState} from 'react';
import './edit_vendor.css'
import axios from 'axios';
import { Redirect,useParams } from 'react-router-dom';
import formData from "form-data";
const Edit_vendor = () => {
  const {id} = useParams();
  console.log(id);  
  const selected_image = useRef();
  const popUpRef = useRef();
  const [isLogged, setLogged] = useState();
  const [isLoding, setLoding] = useState();
  const [un_edited_vendor, setUn_edited_vendor] = useState({});

  const [file_path, setFile_path] = useState("Un Edited Image");
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
      config.headers =  { authorazation: "Bearer " + token };
    }
      axios.get("isLogged", config).then((res) => {
        setLogged(res.data.loggin);
        console.log(res);
      });
   const fetch_unEditedData = async () => {
     setLoding(true);
     let uneditedData = await axios.get(
       "uneditedData",
       { params: { id: id } },
       config
     );
     setUn_edited_vendor(uneditedData.data.vendor);
     console.log(un_edited_vendor);
     setLoding(false);

     popUpRef.current.classList.remove("open_popup");
   };
   fetch_unEditedData();
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

    return (
      <div>
        {isLogged === false ? (
          <Redirect to="/login" />
        ) : (
          <>
            <div className="edit_vendor_container">
              <div className="edit_vendor_ovarly">
                <div ref={popUpRef} className="popup open_popup">
                  <div className="selected_img">
                    <img
                      ref={selected_image}
                      src={
                        "http://localhost:3008/vendor_images/" +
                        un_edited_vendor._id +
                        ".jpg"
                      }
                      alt=""
                    />
                    <i onClick={remove_popup} class="fas fa-times-circle"></i>{" "}
                  </div>
                </div>
                <div className="add_vendor_section">
                  <form
                    action={"http://localhost:3008/update-vendor/" + id}
                    method="POST"
                    enctype="multipart/form-data"
                    className="add_vendor_form"
                  >
                    <div className="add_vendor_header_label">
                      <h3>Edit Vendor</h3>
                    </div>
                    <div className="vendor_input_section">
                      <div className="vendor_input">
                        <input
                          defaultValue={un_edited_vendor.name}
                          name="vendor_name"
                          type="text"
                          required
                          id="vendor_name"
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
                          defaultValue={un_edited_vendor.shope_name}
                          name="shope_name"
                          type="text"
                          required
                          id="shop_name"
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
                          defaultValue={un_edited_vendor.location}
                          name="location"
                          type="text"
                          required
                          id="location"
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
                          defaultValue={un_edited_vendor.serviceTime}
                          name="service_taime"
                          type="text"
                          required
                          id="time"
                        />
                        <label htmlFor="time" className="vender_input_label">
                          Service Time eg (9:00 to 8:00)
                        </label>
                      </div>
                      <div className="vendor_input">
                        <select name="select" required  id="">
                          {un_edited_vendor ? (
                            <>
                              <option
                                value={un_edited_vendor.serviceDays}
                                className="choos_servise_days"
                              >
                                {un_edited_vendor.serviceDays}
                              </option>
                              )
                            </>
                          ) : (
                            <>
                              <option value="" className="choos_servise_days">
                                Choose Servise days
                              </option>
                            </>
                          )}
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
            </div>
          </>
        )}
      </div>
    );
}

export default Edit_vendor;
