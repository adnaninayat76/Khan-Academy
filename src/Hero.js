import React from "react";


import Header from "./Header";
import MainPage from "./MainPage";
import {Route,Switch} from "react-router-dom";
import General from "./General";
import Editorial from "./Editorial";
import CSS from "./CSS";
import Opinion from "./Opinion";

function Hero({ handleLogout }) {
  // ============X==========Uploading Image================X=====================
  return (
    <div>
      <section className="hero">
    

        <Header handleLogout={handleLogout} />
        <Switch>
          <Route path="/" exact component={MainPage}  />
          <Route path="/cssmcqs" component={CSS} />
          <Route path="/editorial" component={Editorial} />
          <Route path="/opinion" component={Opinion} />
          <Route path="/general" component={General}></Route>
        </Switch> 

      </section>
    </div>
  );
}

export default Hero;
