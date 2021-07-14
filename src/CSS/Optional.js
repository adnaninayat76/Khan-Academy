import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "13vw",
    marginTop: "5vh",
    media: {
      height: 140,
    },

    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(35),
      height: theme.spacing(20),
    },
  },
}));

function CSS() {
  const classes = useStyles();
  return (
    <div>
      <h2 style={{marginLeft:"30vw",marginTop:"3vh",color:"white"}}>Optional Books</h2>
      <div className={classes.root}>
        {/* Paper 1 */}
        <Paper elevation={3} style={{marginBottom:"6vh"}}>
          <Link to="/genderstudies">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
              <img
                    src="gender.png"
                    alt="aa"
                    style={{ width: "70px", marginLeft: "5vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"1vw"}}>
                   
                  Gender Studies
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        {/* Paper 2 */}
        <Paper elevation={3}>
          <Link to="/politicalscience1">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
              <img
                    src="Political1.png"
                    alt="aa"
                    style={{ width: "90px", marginLeft: "5vw" }}
                  />
                <h4 style={{color:"white",marginTop:"6vh",marginLeft:"3vw"}}>
                   
                  Political Science I
                </h4>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        {/* Paper 3 */}
        <Paper elevation={3}>
          <Link to="/politicalscience2">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
              <img
                    src="political2.png"
                    alt="aa"
                    style={{ width: "130px", marginLeft: "5vw" }}
                  />
                <h4 style={{color:"white",marginTop:"6vh",marginLeft:"2vw"}}>
                   
                Political Science II
                </h4>
              </CardContent>
            </CardActionArea>
          </Link>
          
        </Paper>
        {/* Paper 4 */}
        <Paper elevation={3}>
          <Link to="/public">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
              <img
                    src="public.png"
                    alt="aa"
                    style={{ width: "110px", marginLeft: "5vw" }}
                  />
                <h4 style={{color:"white",marginTop:"4vh",marginLeft:"2vw"}}>
                   
                  Public Administration
                </h4>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        <Paper elevation={3}>
          <Link to="/history">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
              <img
                    src="history.png"
                    alt="aa"
                    style={{ width: "100px", marginLeft: "5vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"2vw"}}>
                   
                  US History
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        <Paper elevation={3}>
          <Link to="/punjabi">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
              <img
                    src="punjabi.png"
                    alt="aa"
                    style={{ width: "100px", marginLeft: "4.3vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"4vw"}}>
                   
                  Punjabi
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
      </div>
    </div>
  );
}

export default CSS;
