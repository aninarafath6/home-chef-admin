import React, { useState } from "react";
import MaterialTable from "material-table";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Redirect, useHistory } from "react-router-dom";

import "./vendor.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Vendor() {
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [removeVendorId, setRemoveVendorId] = useState('');
  const [remount, setRemount] = useState(0);

  const routeHistory = useHistory();
  const classes = useStyles();
  const data = (query) => {
    return new Promise((resolve, reject) => {
      let url = "http://localhost:3008/vendors";

      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          resolve({
            data: result.data,
            page: result.page - 1,
            totalCount: result.total,
          });
        });
    });
  };

  const actions = [
    {
      icon: "edit",
      tooltip: "edit User",
      onClick: (event, rowData) =>routeHistory.push(`/edit_vendor/${rowData._id}`),
    },
    (rowData) => ({
      icon: "delete",
      tooltip: "Delete User",
      onClick: (event, rowData) => {
       
        setRemoveVendorId(rowData._id)
        setOpenDialogBox(true);
        
      },
    }),.0
  ];
  const columns = [
    {
      title: "Logo",
      field: "logo",
      render: (rowData) => (
        <img
          style={{
            height: 36,
            width: 36,
            objectFit: "cover",
            borderRadius: "50%",
          }}
          src={"http://localhost:3008/vendor_images/" + rowData._id + ".jpg"}
        />
      ),
    },
    { title: "Id", field: "_id" },
    { title: "Name", field: "name" },
    { title: "Location", field: "location" },
    { title: "Shope Name", field: "shope_name" },
    { title: "Service Time", field: "serviceTime" },
    { title: "Service Days", field: "serviceDays" },
    { title: "Status", field: "status" },
  ];
  const [open, setOpen] = React.useState(false);

  const onAddVendor = () => {
    routeHistory.push("/add_vendor");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenDialogBox(false);
  };

  const handleRemoveCVendor =() =>{
    if(removeVendorId){
       let config = {};
    let token = localStorage.getItem("token");

    if (token !== undefined) {
      config.headers = { authorazation: "Bearer " + token };
    
     Axios.post("/remove_vendor",{id:removeVendorId},config).then(response=>{
       setRemount(5+10)
     })
    }
      
    }else{
      setOpen(false)
    
    }
  }
  return (
    <>
      <div className="vendor_management">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            This is a success message!
          </Alert>
        </Snackbar>
        <div className="vendor_insert_btn_section">
          <Button
            onClick={onAddVendor}
            id="add_vendor_btn"
            variant="contained"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Insert Vendor
          </Button>
        </div>

        <div className="vendorTable">
          <MaterialTable
            title="Home Chef Vendor"
            data={data}
            columns={columns}
            options={{
              paging: false,
              search: false,
              actionsColumnIndex: -1,
              exportButton: true,
            }}
            actions={actions}
          />
        </div>
      </div>
      <Dialog
        open={openDialogBox}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {`Are you ready to delete this ${removeVendorId} vendor?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
         if you remove this user ..............someone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleRemoveCVendor} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
