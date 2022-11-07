import { useState } from "react";
import profileimg from "./assets/profileimg.jpg";
import giticon from "./assets/github.png";
import slackicon from "./assets/slack.png";
import Contactnav from "./contactnav.jsx";


function Home() {
  const zurifooter = (
    <footer>
      <div className="sponsor1">
        <h1>
          Zuri <span>.</span>Internship
        </h1>
      </div>
      <div className="sponsor">
        <h4>HNG Partnership 9 Frontend Task</h4>
      </div>
      <div className="sponsorcompany">
        <h3>
          INGRESSIVE <br />
          FOR GOOD
        </h3>
      </div>
    </footer>
  );
  return (
    <div className="container">
      <center>
        <img src={profileimg} alt="" id="profile__img" />
      </center>
      <div id="slack">Ibbal</div>
      <button id="twitter">Twitter Link</button>
      <a href="https://training.zuri.team/">
        <button id="btn__zuri">Zuri team </button>
      </a>
      <a href="http://books.zuri.team ">
        <button id="books">Zuri book</button>
      </a>
      <a href="https://books.zuri.team">
        <button id="book__python">Python book</button>
      </a>
      <a href="https://background.zuri.team">
        <button id="pitch">Background Check for coders</button>
      </a>
      <a href="https://books.zuri.team/design-rules">
        <button id="book__design">Design book</button>
      </a>
      <Contactnav />
      <div className="icons">
        <img src={slackicon} alt="git icon" />

        <img src={giticon} alt="git icon" />
      </div>
      <hr />
      {zurifooter}
    </div>
  );
}

export default Home;
