import React from "react";
import lottie from "lottie-web";
import reactLogo from "../component/static/animation_lkznporc.json";

export default function Main() {
  useEffect(() => {
    const anime = lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
    return () => {
      anim.destroy(); // Cleanup the animation when the component unmounts
    };
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div id="react-logo" />
    </div>
  );
}
