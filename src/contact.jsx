import { useState } from "react";
import "./App.css";


function contact() {
  const zurifooter = (
    <footer>
      <div className="sponsor">
        <h1>
          Zuri <span>.</span>Internship
        </h1>
      </div>
      <div className="sponsor">
        <h4>HNG Partnership 9 Frontend Task</h4>
      </div>
      <div className="sponsor company">
        <h3>
          INGRESSIVE <br />
          FOR GOOD
        </h3>
      </div>
    </footer>
  );
  return (
    <div>
      <section>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <br />
        <form className="contact-form">
          {/* first name and last name box */}
          <div className="flex-box_media-lg">
            {/* this will apply on large screen  */}
            <div className="left">
              <label htmlFor="first_name">
                <h3>First name</h3>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
            </div>
            <div className="right">
              <label htmlFor="last_name">
                <h3>Last name</h3>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                id="Last_name"
              />
            </div>
          </div>

          {/*  end first name and last name box*/}

          <label htmlFor="email">
            <h3>Email</h3>
          </label>
          <input type="email" placeholder="youremail@gmail.com" id="email" />
          <label htmlFor="message">
            <h3>Message</h3>
          </label>
          <textarea
            name=""
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and i'll reply you as soon as possible"
          ></textarea>

          {/* checkbox */}
          <div className="checkbox-container">
            <input type="checkbox" id="check_box" />
            <label htmlFor="check_box" className="check-box-text">
              You agree to providing your data to Ibraheem who may contact you.
            </label>
          </div>
          {/* end checkbox  */}

          <input type="submit" value="Send Message" />
        </form>
      </section>
      <hr />
      {zurifooter}
    </div>
  );
}

export default contact;
