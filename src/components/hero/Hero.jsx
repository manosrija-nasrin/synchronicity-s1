import React from "react";
import "./Hero.css";

const TOP_SECTION = {
  TITLE: "Synchronicity - S1",
  Typed_effect: [
    "25 & 26 November, 2023",
    "36 hours of creation",
    "Win awesome prizes",
    "Events And Sessions",
  ],
  SHORT_DESCRIPTION:
    "Join us on 25th and 26th of November, 2023 for 36 hours of creation, innovation, & fun with over 750+ students.",
  DISCORD_LINK: "https://discord.gg/cvHPEK7U3v",
  JUDGES_FORM_LINK: "#Jugdes Form Link",
  HACKERS_REGISTRATION_FORM_LINK: "#Hackers Registration devfolio link",
  COVER_IMAGE_URL: "/hackathon-crowd.jpeg",
};

export default function Hero() {
  return (
    <div className="grid items-center justify-center grid-cols-2 px-10 py-20">
      <div className="flex flex-col items-start pr-20">
        <strong>{TOP_SECTION.Typed_effect[0]}</strong>
        <h1 className="py-4 text-4xl font-semibold">{TOP_SECTION.TITLE}</h1>
        <span className="pb-2 font-semibold">
          {TOP_SECTION.Typed_effect[1]},{TOP_SECTION.Typed_effect[2]}
        </span>
        <p className="pb-3 font-medium text-left">
          {TOP_SECTION.SHORT_DESCRIPTION}
        </p>
        <div>
          <a href="https://duhacks.devfolio.co/" target="_blank">
            <button className="button">Learn More</button>
          </a>
          <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK} target="_blank">
            <button className="button">Register</button>
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-md">
        <img
          src={TOP_SECTION.COVER_IMAGE_URL}
          alt="Cover Image Of Synchronicity"
        />
      </div>
    </div>
  );
}
