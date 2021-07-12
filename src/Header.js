import React from 'react'
import {BiLogOutCircle} from "react-icons/bi";
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header({handleLogout}) {
    return (
        <div>
        <nav className="header">
         <Link to="/"> <img src="PNG2.png" alt="logo" style={{height:"150px",width:"200px"}} /></Link>
          <div className="mainNav">
            <Link to="/editorial" className="navli">Editorial</Link>
            <Link to="opinion" className="navli">Opinion</Link>
            <Link to="general" className="navli">General Knowledge</Link>
            <Link to="cssmcqs" className="navli">MCQ's</Link>
            <div className="headerLogout" onClick={handleLogout}>
            <IconButton style={{color:"red"}}><BiLogOutCircle/></IconButton>
            </div>
          </div>
          
          {/* <button onClick={handleLogout}>Logout</button> */}
        </nav>
        </div>
    )
}

export default Header
