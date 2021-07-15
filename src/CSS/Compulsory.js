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
      height: theme.spacing(32),
    },
  },
}));

function Compulsory() {
  const classes = useStyles();
  return (
    <div>
      <h2 style={{marginLeft:"30vw",marginTop:"3vh",color:"white"}}>Compulsary Books</h2>
      <div className={classes.root}>
        {/* Paper 1 */}
        <Paper elevation={3} style={{marginBottom:"6vh"}}>
          <Link to="/essay">
            <CardActionArea style={{ backgroundColor: "#29404E",height:"100%" }}>
              <CardContent>
              <img
                    src="essay.png"
                    alt="aa"
                    style={{ width: "80px", marginLeft: "4vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"3vw"}}>
                   
                 Essay
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        {/* Paper 2 */}
        <Paper elevation={3}>
          <Link to="/precis">
            <CardActionArea style={{ backgroundColor: "#29404E",height:"100%"  }}>
              <CardContent>
              <img
                    src="precis.png"
                    alt="aa"
                    style={{ width: "100px", marginLeft: "4vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"2vw"}}>
                   
                  Precis & Composition
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        {/* Paper 3 */}
        <Paper elevation={3}>
          <Link to="/pakaffairs">
            <CardActionArea style={{ backgroundColor: "#29404E",height:"100%"  }}>
              <CardContent>
              <img
                    src="pakAffair.png"
                    alt="aa"
                    style={{ width: "100px", marginLeft: "4vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"2vw"}}>
                   
                  Pak Affairs
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
          
        </Paper>
        {/* Paper 4 */}
        <Paper elevation={3}>
          <Link to="/currentaffairs">
            <CardActionArea style={{ backgroundColor: "#29404E",height:"100%"  }}>
              <CardContent>
              <img
                    src="current.png"
                    alt="aa"
                    style={{ width: "100px", marginLeft: "4vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"2vw"}}>
                   
                  Current Affairs
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        <Paper elevation={3}>
          <Link to="/gsa">
            <CardActionArea style={{ backgroundColor: "#29404E",height:"100%"  }}>
              <CardContent>
              <img
                    src="gsa.png"
                    alt="aa"
                    style={{ width: "90px", marginLeft: "4vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"4vw"}}>
                   
                  GSA
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
        <Paper elevation={3}>
          <Link to="/islamiat">
            <CardActionArea style={{ backgroundColor: "#29404E",height:"100%"  }}>
              <CardContent>
              <img
                    src="islamiat.png"
                    alt="aa"
                    style={{ width: "90px", marginLeft: "4vw" }}
                  />
                <h3 style={{color:"white",marginTop:"4vh",marginLeft:"3vw"}}>
                   
                  Islamiat
                </h3>
              </CardContent>
            </CardActionArea>
          </Link>
         
        </Paper>
      </div>
    </div>
  );
}

export default Compulsory;
