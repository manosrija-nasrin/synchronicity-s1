import SectionTitle from "../lib/SectionTitle";
import "./Timeline.css";

import { Chrono } from "react-chrono";

const timelineDetails = [
  {
    cardTitle: "Registrations Start",
    title: "03rd January 2024",
    cardSubtitle: "Registrations are live!",
  },
  {
    cardTitle: "Registrations End",
    title: "18th January 2024",
    cardSubtitle: "Don't wait till the last minute, register fast!",
  },
  {
    cardTitle: "D-Day",
    title: "20th January 2024",
    cardSubtitle: "The day has finally arrived! Get ready!",
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
