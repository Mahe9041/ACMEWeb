import React from "react";
import { useEffect } from "react";
import lottie from "lottie-web";
import "./lot.css";

export default function Lot(prop){
    useEffect(() => {
        const anime = lottie.loadAnimation({
          container: document.querySelector("#"+prop.idd),
          animationData: prop.data,
          renderer: "svg", // "canvas", "html"
          loop: true, // boolean
          autoplay: true, // boolean
        });
        return () => {
          anime.destroy(); // Cleanup the animation when the component unmounts
        };
      }, []);

      return(
        <div className="lottie_animation"id={prop.idd} />
      )
}