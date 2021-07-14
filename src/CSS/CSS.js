import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "18vw",
    marginTop: "8vh",
    media: {
      height: 140,
    },

    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(45),
      height: theme.spacing(50),
    },
  },
}));

function CSS() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {/* Paper 1 */}
        <Paper elevation={3}>
          <Link to="/compulsory">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
              <h1 style={{marginLeft:"3vw"}}>
                  <img
                    src="Compulsory.png"
                    alt="aa"
                    style={{
                      width: "250px",
                      marginLeft: "0px",
                      height: "200px",
                    }}
                  />
                </h1>
              </CardContent>
            </CardActionArea>
          </Link>
          <Typography gutterBottom variant="h5" component="h2" style={{backgroundColor:"white"}}>
            <h2
              style={{
                width: "200px",
                paddingLeft: "37px",
                paddingTop: "30px",
                marginLeft:"2vw",
              }}
            >
              Compulsory Subjects
            </h2>
          </Typography>
        </Paper>
        {/* Paper 2 */}
        <Paper elevation={3}>
          <Link to="/optional">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
                <h1 style={{marginLeft:"3vw"}}>
                  <img
                    src="optional.png"
                    alt="aa"
                    style={{
                      width: "250px",
                      marginLeft: "0px",
                      height: "200px",
                    }}
                  />
                </h1>
              </CardContent>
            </CardActionArea>
          </Link>
          <Typography gutterBottom variant="h5" component="h2">
            <h2
              style={{
                width: "200px",
                paddingLeft: "37px",
                paddingTop: "30px",
                marginLeft:"2vw",
              }}
            >
            Optional Subjects
            </h2>
          </Typography>
        </Paper>
        {/* Paper 3 */}
       
      </div>
    </div>
  );
}

export default CSS;
