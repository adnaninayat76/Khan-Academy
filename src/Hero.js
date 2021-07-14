import React from "react";


import Header from "./Header";
import MainPage from "./MainPage";
import {Route,Switch} from "react-router-dom";
import General from "./General/General";
import Editorial from "./Editorial";
import CSS from "./CSS/CSS";
import Opinion from "./Opinion";
import Compulsory from "./CSS/Compulsory";
import Optional from "./CSS/Optional";
import Essay from "./CSS/Essay";
import Precis from "./CSS/Precis";
import PakAffairs from "./CSS/PakAffairs";
import CurrentAffairs from "./CSS/CurrentAffairs";
import GSA from "./CSS/GSA";
import Islamiat from "./CSS/Islamiat";
import Gender from "./CSS/Gender";
import PoliticalScience1 from "./CSS/PoliticalScience1";
import PoliticalScience2 from "./CSS/PoliticalScience2";
import Public from "./CSS/Public";
import US from "./CSS/US";
import Punjabi from "./CSS/Punjabi";

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
          <Route path="/compulsory" component={Compulsory}></Route>
          <Route path="/optional" component={Optional}></Route>
          <Route path="/essay" component={Essay}></Route>
          <Route path="/precis" component={Precis}></Route>
          <Route path="/pakaffairs" component={PakAffairs}></Route>
          <Route path="/currentaffairs" component={CurrentAffairs}></Route>
          <Route path="/gsa" component={GSA}></Route>
          <Route path="/islamiat" component={Islamiat}></Route>
          <Route path="/genderstudies" component={Gender}></Route>
          <Route path="/politicalscience1" component={PoliticalScience1}></Route>
          <Route path="/politicalscience2" component={PoliticalScience2}></Route>
          <Route path="/public" component={Public}></Route>
          <Route path="/history" component={US}></Route>
          <Route path="/punjabi" component={Punjabi}></Route>
       </Switch> 

      </section>
    </div>
  );
}

export default Hero;
