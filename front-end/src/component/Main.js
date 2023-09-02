import React from "react";
import reactLogo from "./static/animations/animation_lkznporc.json";
import Lot from "./lot";
import Clubs from "./Clubs";
import Contact from "./Contact";
import Feedback from "./Feedback";

export default function Main() {

  return (
    <div>
    <div className="mainBlock">
      <div className="Main_look">
        <div className="Main_look_content">
          <h1 className="m">ACME</h1>
          <h3 className="m">Science and Cultural Society for ECE department.</h3>
          <p className="m">A one stop place for all ACME related activites........</p>
        </div>
        <Lot className="rocket"
        data={reactLogo}
        idd="rocky"
        ></Lot>
      </div>
    </div>
    <Clubs></Clubs>
    <Contact/>
    <Feedback></Feedback>
    </div>
  );
}
