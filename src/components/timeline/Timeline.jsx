import SectionTitle from "../lib/SectionTitle";
import "./Timeline.css";

import { Chrono } from "react-chrono";

const timelineDetails = [
  {
    cardTitle: "Registrations Start",
    title: "1st January 2024",
    cardSubtitle: "Participants will begin registration for the hackathon.",
  },
  {
    cardTitle: "Registrations End",
    title: "17th January 2024",
    cardSubtitle: "Don't wait for the last minute, register fast!",
  },
  {
    cardTitle: "D-Day",
    title: "20th January 2024",
    cardSubtitle: "Hackathon coding period will start from 10:30 AM onwards.",
  },
  {
    cardTitle: "Results",
    title: "31st January 2024",
    cardSubtitle: "Winners declared!",
  },
];

export default function TimeLine() {
  return (
    <section
      className="py-16 text-white"
      style={{
        backgroundImage: `url(/pattern.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SectionTitle
        title={"Hackathon Timeline"}
        titleDescription={"Follow the flow of the hackathon."}
      />

      <section className="py-12">
        <Chrono
          items={timelineDetails}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "black",
            titleColor: "black",
            titleColorActive: "black",
          }}
          hideControls={true}
        />
      </section>
    </section>
  );
}
