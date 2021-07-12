import React from "react";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "4vw",
    marginTop: "8vh",
    media: {
      height: 140,
    },

    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(35),
      height: theme.spacing(50),
    },
  },
}));

function MainPage() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {/* Paper 1 */}
        <Paper elevation={3}>
          <Link to="/editorial">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
                {" "}
                <h1>
                  {" "}
                  <img
                    src="pencil-square-o.svg"
                    alt="aa"
                    style={{ width: "250px", marginLeft: "0px" }}
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
              }}
            >
              {" "}
              Editorial
            </h2>
          </Typography>
        </Paper>
        {/* Paper 2 */}
        <Paper elevation={3}>
          <Link to="/opinion">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
                <h1>
                  <img
                    src="greenlightbulb.svg"
                    alt="aa"
                    style={{ width: "150px", marginLeft: "40px" }}
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
              }}
            >
              Opinion
            </h2>
          </Typography>
        </Paper>
        {/* Paper 3 */}
        <Paper elevation={3}>
          <Link to="general">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
                <h1>
                  <img
                    src="3310670-200.png"
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
          <Typography gutterBottom variant="h5" component="h2" height="40px">
            <h3
              style={{
                width: "200px",
                paddingLeft: "37px",
                paddingTop: "30px",
              }}
            >
              General Knowledge
            </h3>
          </Typography>
        </Paper>
        {/* Paper 4 */}
        <Paper elevation={3}>
          <Link to="/cssmcqs">
            <CardActionArea style={{ backgroundColor: "#29404E" }}>
              <CardContent>
                <h1>
                  <img
                    src="3310670-201.png"
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
            <h3
              style={{
                width: "200px",
                paddingLeft: "37px",
                paddingTop: "30px",
              }}
            >
              CSS/PMS MCQ's
            </h3>
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default MainPage;
