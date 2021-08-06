import React, { useState, useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import PoliticalScience2FetchData from "./PoliticalScience2FetchData";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import firebase from "firebase";
import { db, storage } from "../fire";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Modal } from '@material-ui/core';
import { Backdrop } from '@material-ui/core';
import { Fade } from '@material-ui/core';

import {
  
  BeatLoader
  
} from "react-spinners";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyle = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const useStyles = makeStyles({
  list: {
    width: 750,
    backgroundColor: "#dbf0f0",
  },
  firstinput: {
    backgroundColor: "#dbf0f0",
    letterSpacing: "3px",
    borderColor: "yellow",
    outlineColor: "red",
    color: "white",
    "&:hover": {},
    "&$focused": {
      backgroundColor: "#fff",
    },
  },
});
var someDate = new Date();
// var numberOfDaysToAdd = 3;
var cdatee = someDate.setDate(someDate.getDate());  
function PoliticalScience2() {
  const [list, setList] = useState([]);
  const [inputdata, setinputData] = useState("");
  const [desc, setDesc] = useState("");

  //  APPLYING NEW METHOD
  const [filefile, setfileFile] = useState(null);
  const [fileurl, setfileURL] = useState("");
  const [imagefile, setimageFile] = useState(null);
  const [imageurl, setimageURL] = useState("");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    left: false,
  });
  const clas = useStyle();
  const handleOpen = () => {
    setOpen(true);
  };
  const refreshPage = ()=>{
    setTimeout(()=>{
      window.location.reload();
    },1000)
   
 }
  const handleClose = () => {
    setOpen(false);
  };
  function filehandleChange(e) {
    e.preventDefault();
    setfileFile(e.target.files[0]);
  }
  const filehandleUpload = (event) => {
    event.preventDefault();
    if (filefile && imagefile) {
      handleOpen();
      const ref1 = storage.ref(`/files/${filefile.name}`);
      const uploadTask1 = ref1.put(filefile);
      const ref2 = storage.ref(`/images/${imagefile.name}`);
      const uploadTask2 = ref2.put(imagefile);
      uploadTask1.on("state_changed", console.log, console.error, () => {
        ref1.getDownloadURL().then((fileUrl) => {
          setfileFile(null);
          setfileURL(fileUrl);
          uploadTask2.on("state_changed", console.log, console.error, () => {
            ref2.getDownloadURL().then((imageUrl) => {
              setimageFile(null);
              setimageURL(imageUrl);
              db.collection("politicalscienceII").add({
                date: selectedDate.toDateString(),
                description: desc,
                editorialID: "122",
                file: fileUrl,
                image: imageUrl,
                title: inputdata,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setList([
                ...list,
                {
                  date: selectedDate,
                  description: desc,
                  file: fileurl,
                  image: imageurl,
                  title: inputdata,
                },
                ]);
              setDesc("");
              setinputData("");
              setfileFile("");
              setimageFile("");
              handleClose();
              refreshPage();
              // window.location.reload();
            });
          });
        });
      });
    } else {
      console.log("Enter");
    }
  };
  function imagehandleChange(e) {
    e.preventDefault();
    setimageFile(e.target.files[0]);
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
   
  };
  const mlist = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
     
      <div
        className="App editorialEdit"
        style={{ width: "600px", marginLeft: "10px" }}
      >
        <h2 style={{ color: "#F50057", fontFamily: "cursive" }}>
          Add data to fireStore
        </h2>
        <form className="editorialform" >
          <TextField
            className={classes.firstinput}
            value={inputdata}
            onChange={(e) => setinputData(e.target.value)}
           
            id="outlined-search"
            label="Title"
            type="search"
            variant="outlined"
            color="secondary"
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="space-around">
              <KeyboardDatePicker
              color="secondary"
          
                className={classes.firstinput}
                margin="normal"
                variant="outlined"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <TextField
          color="secondary"
            id="outlined-multiline-static"
            label="Write Your Description Here"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={classes.firstinput}
          />

          <div style={{ width: "100%",margin:"10px 0px 10px 0px" }}>
            <Button variant="outlined" component="label" color="secondary">
              Select Image
              <input type="file" hidden onChange={imagehandleChange} />
            </Button>
            <Button variant="outlined" component="label" color="secondary" style={{marginLeft:"250px"}}>
              Select File
              <input type="file" hidden  onChange={filehandleChange} />
            </Button>

            
          </div>
          <Button type="submit" variant="outlined" color="secondary" onClick={filehandleUpload}>Upload</Button>
         
        </form>
              
        <div className="loaders"   >
    
         
        </div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={clas.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <h1>1111111111111111111</h1> */}
        <Fade in={open}>
          <div className={classes.paper}>
          <BeatLoader size="60px" loading="false" color="yellow"/>
            
          </div>
        </Fade>
        {/* <h1>333333333333333</h1> */}
      </Modal>
        <img src={imageurl} alt="Preview" className="person-img" />
      </div>
      <div style={{backgroundColor:"#dbf0f0",height:"60px"}}></div>
    </div>
  );
  

  const [selectedDate, setSelectedDate] = useState(
    new Date(cdatee)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function getDatas() {
    db.collection("politicalscienceII")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setList(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }
  useEffect(() => {
    getDatas();
  }, []);
  return (
    <div className="editorialmain">
      <div className="editorialdisplay">
        <h2 style={{marginLeft:"50px",marginBottom:"30px"}}>Political Science II</h2>
        {list.map((links) => {
          const { title, description, id, date } = links;
          return (
           <PoliticalScience2FetchData title={title} description={description} id={id} date={date} />

          )
        })}
      </div>
     
      <div className="edAddBtn">
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>Add New<AddIcon/></Button>
            <SwipeableDrawer
            
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {mlist(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default PoliticalScience2;
