import React from "react";
import {Link} from 'react-router-dom';
import { useEffect } from "react";
import lottie from "lottie-web";
import reactLogo from "../component/static/animation_lkznporc.json";

export default function Main() {
  useEffect(() => {
    const anime = lottie.loadAnimation({
      container: document.querySelector("#Rocket"),
      animationData: reactLogo,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
    return () => {
      anime.destroy(); // Cleanup the animation when the component unmounts
    };
  }, []);

  return (
    <div className="mainBlock">
      <nav>
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
        <div id="Rocket" />
      </div>
    </div>
  );
}
