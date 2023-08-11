import React,{useEffect} from "react";
import tech from "../component/static/animations/animation_ll3fkeic.json";
import sport from "../component/static/animations/144026-lifestyle-of-when-weighing-gym.json";
import com from "../component/static/animations/94548-community.json";
import yc from "../component/static/animations/118925-helping-in-need.json";
import Card from "./Card";
import ScrollMagic from "scrollmagic"


function Clubs(){

  function splitScroll(){
    const controller = new ScrollMagic.Controller();
  
  
    new ScrollMagic.Scene({
      duration : '100%',
      triggerElement:'.club_list',
      triggerHook:0
    })
    .setPin('.club_list')
    .addIndicators()
    .addTo(controller)
  } 

  useEffect(()=>{
    splitScroll();
  },[])

  return (
    <div className="club_wrapper">
      <h1>Clubs</h1>
      <div className="club_main_wrapper">
        <div className="club_list">
          <ul>
            <li>Sportio</li>
            <li>Communion</li>
            <li>Techno crats</li>
            <li>Young caliber</li>
          </ul>
        </div>
        <div className="club_content">
            <Card
            idd="sp"
            h="Sportio"
            anilink={sport}
            para="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            ></Card>


            <Card
            idd="co"
            h="Communion"
            anilink={com}
            para="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            ></Card>

            <Card
            idd="te"
            h="Techno crats"
            anilink={tech}
            para="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            ></Card>

            <Card
            idd="ycc"
            h="Young caliber"
            anilink={yc}
            para="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            ></Card>
          
        </div>
      </div>
    </div>
  );
}
export default Clubs;