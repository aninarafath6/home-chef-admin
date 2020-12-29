import React, { useState,useEffect } from "react";
import MaterialTable from "material-table";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Redirect, useHistory } from "react-router-dom";
import userIcon from "./user-solid.svg";
import "./user.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import axios from "axios";

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
const [dialogBoxMAinData, setDialogBoxMAinData] = useState('');
const [blockUserId, setBlockUserId] = useState({});
const [remount, setRemount] = useState(0);
const [alertData, setAlertData] = useState('');
const [userStatus, setUserStatus] = useState('');
const routeHistory = useHistory();

  const [open, setOpen] = useState(false);
    useEffect(() => {
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
    },[remount]);

  

  
  const classes = useStyles();
 const data = (query) => {
    return new Promise((resolve, reject) => {
         let config ={};
      let token =localStorage.getItem("token")
                        if (token!==null){
                        config.headers={ authorazation: "Bearer " + token};
                        }

      let url = "http://localhost:3008/display-all-users";

      fetch(url,config)
        .then((response) => response.json())
        .then((result) => {
          resolve({
            data: result.data,
           
          });
        });
    });
  };
 const actions = [
  //  {
  //    icon: "verified_user",
  //    tooltip: "Activate User",
  //    onClick: (event, rowData) => {
  //      setUserStatus(rowData.status);
  //      setBlockUserId(rowData);
  //      setDialogBoxMAinData(
  //        `Are You Ready To Un Block this ${rowData.name} User?`
  //      );
  //      setOpenDialogBox(true);
  //    },
  //  },
   (rowData) => ({
     icon: "edit_location",
     tooltip: "Block User",
     onClick: (event, rowData) => {
       setUserStatus(rowData.status);
       setBlockUserId(rowData);
       if(rowData.status === 'active'){
         setDialogBoxMAinData(
         `Are You Ready To Block this ${rowData.name} User?`
       )
       }else{
         setDialogBoxMAinData(
         `Are You Ready To Un Block this ${rowData.name} User?`
       );
       }

       setOpenDialogBox(true);
     },
   }),
   0.0,
 ];
  const columns = [
    {
      title: "Logo",
      field: "logo",
      render: (rowData) => (
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user"
          class="svg-inline--fa fa-user fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
          ></path>
        </svg>
      ),
    },
    { title: "Id", field: "_id", hidden: true },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone No", field: "phone" },
    { title: "Authentication", field: "auth" },
    { title: "Status", field: "status" },
   
  ];


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
console.log(userStatus);
  const handle_user_status = () => {
   if(blockUserId.status === 'active'){

    if (blockUserId._id) {
      let config = {};
      let token = localStorage.getItem("token");

      if (token !== undefined) {
        config.headers = { authorazation: "Bearer " + token };

        axios
          .post("/block-user", { id: blockUserId._id }, config)
          .then((response) => {
            setOpenDialogBox(false);
             setAlertData(`successfully  blocked ${blockUserId.name} `);
             setOpen(true);
          });
      }
    } else {
      setOpen(false);
    }


   }else{
     if (blockUserId._id) {
       let config = {};
       let token = localStorage.getItem("token");

       if (token !== undefined) {
         config.headers = { authorazation: "Bearer " + token };

         axios
           .post("/un-block-user", { id: blockUserId._id }, config)
           .then((response) => {
             setOpenDialogBox(false);
             setRemount(remount + 10);
          setAlertData(`successfully un blocked ${blockUserId.name} `)
          setOpen(true);
           });
       }
     } else {
       setOpen(false);
     }
   }
  };

  return (
    <>
      <div className="vendor_management">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
           {alertData}
          </Alert>
        </Snackbar>

        <div className="vendorTable">
          <MaterialTable
            title="Home Chef Users"
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
          {dialogBoxMAinData}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handle_user_status} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
