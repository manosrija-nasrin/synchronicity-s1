import React from "react";
import "./Hero.css";

const TOP_SECTION = {
  TITLE: "DUHacks",
  Typed_effect: [
    "16 July - 17 July",
    "36 hours of creation",
    "Win awesome prizes",
    "Events And Sessions",
  ],
  SHORT_DESCRIPTION:
    "Join us on 16th and 17th of July 2022 for 36 hours of creation, innovation, & fun with over 1000+ students.",
  DISCORD_LINK: "https://discord.gg/cvHPEK7U3v",
  JUDGES_FORM_LINK: "#Jugdes Form Link",
  HACKERS_REGISTRATION_FORM_LINK: "#Hackers Registration devfolio link",
};

export default function Hero() {
  return (
    <div className="Myinfo">
      <div>
      <strong>{TOP_SECTION.Typed_effect[0]}</strong>
      <h1 style={{margin:"-6px 0px"}}>{TOP_SECTION.TITLE}</h1>
      <strong>{TOP_SECTION.Typed_effect[1]}, {TOP_SECTION.Typed_effect[2]}</strong>
      <p className="shortjoin">{TOP_SECTION.SHORT_DESCRIPTION}</p>
      <div
        class="apply-button"
        data-hackathon-slug="duhacks"
        data-button-theme="light"
      />
      <div>
      <a href="https://duhacks.devfolio.co/" target="_blank">
        <button className="button">Learn More</button>
      </a>
      <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK} target="_blank">
        <button className="button">Register</button>
      </a>
      </div>
      </div>
      <div>
        <img height="160px" src="https://shorturl.at/noERZ" alt="" srcset="" />
      </div>
    </div>
  );
}
