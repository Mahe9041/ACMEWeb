import React from "react";
import data from "./static/animations/contact.json";
import Lot from "./lot";

export default function Demo() {
  return (
    <div className="contactRapper" id="contact">
      <div className="Bg_blur"></div>
      <div className="Contact_form">
        {/* <img src={data} /> */}
        <Lot data={data} idd={"ch"}></Lot>
        <div className="filling">
          <h1>Contact us</h1>
          <form className="Actual_form">
            <div className="form_group field">
              <input
                type="input"
                className="form_field"
                placeholder="Frst Name"
                id="fname"
                required
              ></input>
              <label htmlFor="fname" className="form_label">
                First Name
              </label>
            </div>
            <div className="form_group field">
              <input
                type="input"
                className="form_field"
                placeholder="Last Name"
                id="lname"
                required
              ></input>
              <label htmlFor="lname" className="form_label">
                Last Name
              </label>
            </div>
            <div className="form_group field">
              <input
                type="email"
                className="form_field"
                placeholder="Email"
                id="Emali"
                required
              ></input>
              <label htmlFor="Email" className="form_label">
                Email
              </label>
            </div>
            <div className="year">
              <label className="year_title">Year : </label>

              <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <p className="p0">First</p>
                  <p className="p1">Second</p>
                  <p className="p2">Third</p>
                  <p className="p3">Forth</p>
                </div>
              </div>
            </div>
            <div className="msg">
              <label className="msg_label">Message : </label>
              <textarea className="textarea"></textarea>
            </div>
            <button className="dropbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
