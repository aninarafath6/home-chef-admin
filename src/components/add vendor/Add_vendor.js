import React,{useState,useRef} from 'react';
import './add_vendor.css'
const Add_vendor = () => {
    const selected_image = useRef();
    const popUpRef = useRef();
    const [file_path,setFile_path]=useState('Choose a File');

    const onFileChange =(e)=>{
if(e.target.files[0]){
setFile_path(e.target.files[0].name);
selected_image.current.src = URL.createObjectURL(e.target.files[0]);
    popUpRef.current.classList.remove("open_popup");
}else{
    setFile_path("Choose a File");
}

    }
    const remove_popup =()=>{
popUpRef.current.classList.add("open_popup");

    }
    return (
      <div className="add_vendor_container">
        <div className="add_vendor_ovarly">
          <div ref={popUpRef} className="popup open_popup">
            <div className="selected_img">
              <img ref={selected_image} alt="" />
              <i onClick={remove_popup} class="fas fa-times-circle"></i>{" "}
            </div>
          </div>
          <div className="add_vendor_section">
            <form action="" className="add_vendor_form">
              <div className="add_vendor_header_label">
                <h3>Add Vendor</h3>
              </div>
              <div className="vendor_input_section">
                <div className="vendor_input">
                  <input type="text" required id="vendor_name" />
                  <label htmlFor="vendor_name" className="vender_input_label">
                    Vendor Name
                  </label>
                </div>
                <div className="vendor_input">
                  <input type="text" required id="shop_name" />
                  <label htmlFor="shop_name" className="vender_input_label">
                    Shope Name
                  </label>
                </div>

                <div className="vendor_input">
                  <input type="text" required id="location" />
                  <label htmlFor="location" className="vender_input_label">
                    Location
                  </label>
                </div>
                <div className="vendor_input">
                  <input type="text" required id="time" />
                  <label htmlFor="time" className="vender_input_label">
                    Service Time eg (9:00 to 8:00)
                  </label>
                </div>
                <div className="vendor_input">
                  <select required name="" id="">
                    <option value="" className="choos_servise_days">
                      Choose Servise days
                    </option>
                    <option value="">Monday To Sunday</option>
                    <option value="">Monday To Friday</option>
                  </select>
                </div>
                <div className="vendor_input">
                  <input
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
    );
}

export default Add_vendor;
