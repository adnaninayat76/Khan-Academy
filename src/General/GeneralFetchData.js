import React,{useState} from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { db } from "../fire";
import { Modal } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Backdrop } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
var someDate = new Date();
// var numberOfDaysToAdd = 3;
var cdatee = someDate.setDate(someDate.getDate());  
const useStyles = makeStyles((theme) => ({
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
function GeneralFetchData({id,date,description,title}) {
  const [open, setOpen] = useState(false);
  const [input1, setInput1] = useState(title);
  const [input2, setInput2] = useState(description);
  const [selectedDate, setSelectedDate] = useState(
    new Date(cdatee)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const updateTodo = () => {
    db.collection("generalknowledge")
      .doc(id)
      .set({ title: input1, description: input2,date:selectedDate.toDateString() }, { merge: true });
    setOpen(false);
  };
  const classes = useStyles();
    return (
        <div>
             <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
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
            <h2 id="transition-modal-title">Update Data</h2>
            <form>
            <TextField
            className={classes.firstinput}
            value={input1}
              onChange={(e) => setInput1(e.target.value)}
              defaultValue={title} 
            style={{width:"400px"}}
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
style={{width:"400px"}}
          color="secondary"
            id="outlined-multiline-static"
            label="Write Your Description Here"
            multiline
            rows={4}
            defaultValue={description}
            variant="outlined"
            className={classes.firstinput}
            value={input2}
              onChange={(e) => setInput2(e.target.value)}
          />
          
</form>
<Button onClick={updateTodo} color="secondary" variant="outlined" style={{marginTop:"10px"}}>Update Todo</Button>
           
            
          </div>
        </Fade>
        {/* <h1>333333333333333</h1> */}
      </Modal>
            <article className="question" key={id}>
              <header>
                <div style={{display:"flex"}}>
                  <div style={{fontWeight:"600",textTransform:"uppercase"}}>{title}</div>
                  
                  
                </div>
                <div>{`Date : ${date}`}</div> 
               
              </header>
              <footer style={{display:"flex",justifyContent:"space-between"}}>
              <p>{description}</p>
              <div className="btnGroup" >
              <button className="mybtn"  style={{margin:"5px"}} onClick={(e) => db.collection("generalknowledge").doc(id).delete()}>
              <HighlightOffIcon/>
             </button>
               <button className="mybtn" style={{margin:"5px"}} onClick={handleOpen} >
             <EditIcon/>
             </button>
            </div></footer>
            </article>
        </div>
    )
}

export default GeneralFetchData
