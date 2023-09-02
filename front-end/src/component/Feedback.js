import React from "react";
import data from "./static/animations/feedback.json";
import Lot from "./lot";

export default function Demo() {
  return (
    <div className="contactRapper" id="feedback">
      <div className="Bg_blur fBg_blur"></div>
      <div className="Contact_form">
        {/* <img src={data} /> */}
        <Lot data={data} idd={"fb"}></Lot>
        <div className="filling">
          <h1>Feedback</h1>
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
              <label className="year_title fyear_title">Rating : </label>
              <div className="dropdown">
                <button className="dropbtn fdropbtn">Dropdown</button>
                <div className="dropdown-content fdropdown-content">
                  <p className="p0 fp0">1 Star</p>
                  <p className="p1 fp1">2 Star</p>
                  <p className="p2 fp2">3 Star</p>
                  <p className="p3 fp3">4 Star</p>
                  <p className="p3 fp4">5 Star</p>
                </div>
              </div>
              
            </div>
            <div className="msg">
              <label className="msg_label">Review : </label>
              <textarea className="textarea"></textarea>
            </div>
            <button className="dropbtn fdropbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
