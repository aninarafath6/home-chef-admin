import React, { useState ,useEffect} from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { Redirect, useHistory } from "react-router-dom";

import "./order_management.css";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Vendor() {
    const { useState } = React;

    const [columns, setColumns] = useState([
      { title: "Id", field: "_id", hidden: true },
      { title: "Item Name", field: "order.item_name" },
      { title: "Total", field: "order.itemPrice" },
      { title: "Quantity", field: "quantity" },
      { title: "Date", field: "date" },
      { title: "Order Status", field: "status" },
    ]);

    const [data, setData] = useState([]);
 const dataFetch = (query) => {
        return new Promise((resolve, reject) => {
          let config = {};
          let token = localStorage.getItem("token");
          if (token !== null) {
            config.headers = { authorazation: "Bearer " + token };
          }

          let url = "http://localhost:3008/order-management";

          fetch(url, config)
            .then((response) => response.json())
            .then((result) => {
            setData(result.data)
            resolve()
            });
        });
      };
      useEffect(()=>{
          dataFetch()     },[])
  return (
    <>
      <div className="vendor_management">
        
        {/* <div className="vendor_insert_btn_section">
          <Button
            onClick={onAddVendor}
            id="add_vendor_btn"
            variant="contained"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Insert Vendor
          </Button>
        </div> */}

        <div className="vendorTable">
          <MaterialTable
            title="Orders"
            columns={columns}
             options={{
              exportButton: true,
            }}
            data={data}/>
        </div>
      </div>

    </>
  );
}
