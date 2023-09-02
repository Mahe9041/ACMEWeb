import React from "react";
import Lot from "./lot";

export default function Card(prop){
    return(
        <div className="club_card">
            <h1>{prop.h}</h1>
            <Lot data={prop.anilink} idd={prop.idd} />
            <p>{prop.para}
            </p>
          </div>
    )
}