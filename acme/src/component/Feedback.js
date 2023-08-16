import React from "react";
import Lot from "./lot";
import animationdata from "./static/animations/animation_ll3fkeic.json";

export default function Feedback() {
  return (
    <div className="ContactUs">
      <h1>Feedback</h1>
      <div className="Contact_rapper">
        <Lot data={animationdata} idd={"fb"}></Lot>
        <form className="contact_form">
          <label className="label">First Name :</label>
          <input type="text" className="input" placeholder="First Name"></input>
          <label className="label">Last Name :</label>
          <input type="text" className="input" placeholder="Last Name"></input>

          <div className="radio_btn">
          <label className="label">Year :</label>
            <input type="radio" name="year" className="radio"></input>
            <label className="label">4th</label>
            <input type="radio" name="year" className="radio"></input>
            <label className="label">3rd</label>
            <input type="radio" name="year" className="radio"></input>
            <label className="label">2nd</label>
            <input type="radio" name="year" className="radio"></input>
            <label className="label">1st</label>
          </div>
          <label className="label">Email Id :</label>
          <input type="email" className="input" placeholder="Email Id"></input>
          <label className="label">Message :</label>
          <textarea className="input" placeholder="Message"></textarea>
        </form>
      </div>
    </div>
  );
}
