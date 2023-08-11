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
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice', // Adjust the preserveAspectRatio as needed
          },
          style:{
            height:'20px'
          }
        });
        return () => {
          anime.destroy(); // Cleanup the animation when the component unmounts
        };
      }, []);

      return(
        <div className="lottie_animation"id={prop.idd} />
      )
}