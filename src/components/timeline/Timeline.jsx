import SectionTitle from "../lib/SectionTitle";
import "./Timeline.css";

import { Chrono } from "react-chrono";

const timelineDetails = [
  {
    cardTitle: "Registrations Start",
    title: "1st June 2022",
    cardSubtitle: "Participants will begin registration for the hackathon.",
  },
  {
    cardTitle: "Registrations End",
    title: "14th Jul 2022",
    cardSubtitle: "Don't wait for the last minute, register fast.",
  },
  {
    cardTitle: "Opening Ceremony",
    title: "16th July 2022",
    cardSubtitle: "Hackathon opening ceremony will start 9:15 AM onwards.",
  },
  {
    cardTitle: "Hackathon Starts",
    title: "16th July 2022",
    cardSubtitle: "Hackathon coding period will start from 10:30 AM onwards.",
  },
  {
    cardTitle: "Session from GeeksforGeeks",
    title: "16th July 2022",
    cardSubtitle:
      "Session on Complete Interview Preperation by GeeksForGeeks on 11.30 AM Onwards.",
  },
  {
    cardTitle: "Session from Postman",
    title: "16th July 2022",
    cardSubtitle: "Session on APIs 101 using Postman on 4:00 PM Onwards.",
  },
  {
    cardTitle: "Session from Alan AI",
    title: "16th July 2022",
    cardSubtitle:
      "Session on Building Voice Ai Powered App in React JS with Alan AI on 06:30 PM Onwards.",
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
        titleDescription={"Follow the exact flow of the hackathon."}
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
