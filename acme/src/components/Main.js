import React from "react";
import { useRef,useEffect } from 'react';
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import reactLogo from "../static/animation_lkz385t0.json";

export default function Main() {
  useEffect(() => {
    lottie.loadAnimation({
        container: document.querySelector("#react-logo"),
        animationData: reactLogo,
        renderer: "svg", // "canvas", "html"
        loop: true, // boolean
        autoplay: true, // boolean
    });
  }, []);

  return (
    <>
      {/* <ol className="MenuList">
        <li className="ListItem">
          <Link to="/">Home</Link>
        </li>
        <li className="ListItem">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="ListItem">
          <Link to="/Feedback">Feedback</Link>
        </li>
        <li className="ListItem">
          <Link to="/About">About</Link>
        </li>
        <li className="ListItem">
          <Link to="/Events">Events</Link>
        </li>
      </ol> */}

      <div>
        <h1>Hello World</h1>
        <div id="react-logo" />
      </div>

      <h1>ACME</h1>
      <h3>
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
      </h3>
    </>
  );
}
