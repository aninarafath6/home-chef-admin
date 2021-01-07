import React, { useState ,useEffect} from "react";
import MaterialTable from "material-table";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Redirect, useHistory } from "react-router-dom";

import "./catogery.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
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
     
      { title: "Category", field: "category", initialEditValue: "fast food" },
      {
        title: "Commission",
        field: "commission",
        initialEditValue: 10,
      },
    ]);

    const [data, setData] = useState([]);
 const dataFetch = (query) => {
        return new Promise((resolve, reject) => {
          let config = {};
          let token = localStorage.getItem("token");
          if (token !== null) {
            config.headers = { authorazation: "Bearer " + token };
          }

          let url = "http://localhost:3008/display-category";

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
            title="Category Management"
            columns={columns}
            data={data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    Axios.post('add-category',newData).then(response=>{
                      setData([...data, newData]);

                      resolve();
                    })

                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                   
                      Axios.post(
                        "update-category",
                        newData
                      ).then((response) => { resolve();});
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
Axios.post('remove-category',oldData).then(response=>{})    
                    resolve();
                  }, 1000);
                }), 
            }}
          />
        </div>
      </div>

    </>
  );
}
