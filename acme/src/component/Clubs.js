import React from "react";
import lottie from "lottie-web";
import { useEffect } from "react";
import reactLogo from "../component/static/animations/animation_ll3fkeic.json";

export default function Clubs() {
    useEffect(() => {
        const anime = lottie.loadAnimation({
          container: document.querySelector("#tech"),
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
    <div>
      <h1>Clubs</h1>
      <div>
        <nav>
          <ul>
            <li>Sportio</li>
            <li>Communion</li>
            <li>Techno crats</li>
            <li>Young caliber</li>
          </ul>
        </nav>
        <div>
            <div>
                <div id="tech"></div>
                <h1>Sportio</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <div></div>
                <h1>Communion</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <div></div>
                <h1>Techno crats</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <div></div>
                <h1>Young caliber</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
