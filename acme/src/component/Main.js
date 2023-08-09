import React from "react";
import {Link} from 'react-router-dom';
import reactLogo from "../component/static/animations/animation_lkznporc.json";
import Lot from "./lot";

export default function Main() {

  return (
    <div className="mainBlock">
      <nav className="navv">
        <ul>
          <li>
          Home
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>Home
            {/* <Link to="/">Clubs</Link> */}
          </li>
          <li>Home
            {/* <Link to="/">Contact Us</Link> */}
          </li>
          <li>Home
            {/* <Link to="/">Feedback</Link> */}
          </li>
          <li>Home
            {/* <Link to="/">Galary</Link> */}
          </li>
        </ul>
      </nav>
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
  );
}
