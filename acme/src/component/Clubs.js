import React from "react";
import tech from "../component/static/animations/animation_ll3fkeic.json";
import sport from "../component/static/animations/144026-lifestyle-of-when-weighing-gym.json";
import com from "../component/static/animations/94548-community.json";
import yc from "../component/static/animations/118925-helping-in-need.json";
import Lot from "./lot";
import Card from "./Card";


export default function Clubs() {
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
