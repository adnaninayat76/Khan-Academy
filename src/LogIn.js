import React from "react";
import { Button } from "@material-ui/core";
function LogIn(props) {
  const {
    password,
    setpassword,
    email,
    setemail,
    handleLogin,
    handleSignup,
    hash,
    sethash,
    emailerror,
    passworderror,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <div className="border">
          {" "}
          <label>Email</label>
          <input
          style={{height:"40px",color:"white", border:"1px solid blue"}}
            type="email"
            autoFocus
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            autoComplete="false"
            placeholder="Enter Your Email"
          />
      
          <p className="errorMsg">{emailerror}</p>
          <label>Password</label>
          <input
          style={{height:"40px",color:"white", border:"1px solid blue"}}
            type="password"
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          <p className="errorMsg">{passworderror}</p>
          <div className="btnContainer">
            {hash ? (
              <>
                <Button variant="contained" color="primary" onClick={handleLogin}>Sign In </Button>
                <div className="line">
                  <div className="lLine"></div>
                  <div className="text">or</div>
                  <div className="rLine"></div>
                </div>
                <p>
                  Don't have an acount
                  <span onClick={() => sethash(!hash)}>Sign up</span>
                </p>
              </>
            ) : (
              <>
                <Button variant="contained" color="primary" onClick={handleSignup}>Sign Up</Button>
                <div className="line">
                  <div className="lLine"></div>
                  <div className="text">or</div>
                  <div className="rLine"></div>
                </div>
                <p>
                  Have an acount{" "}
                  <span onClick={() => sethash(!hash)}>Sign In</span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
