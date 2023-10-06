import SectionTitle from "../lib/SectionTitle";
import "./Timeline.css";

function TimeLine() {
  return (
    <section>
      <SectionTitle
        title={"Hackathon Timeline"}
        titleDescription={"Follow the exact flow of the hackathon."}
      />
      <div className="wrap">
        <div className="center-line">
          <a href="#" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="title">Registrations Start</span>
              <span>1st June 2022</span>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="details">
              <span className="title">Registrations End</span>
              <span>14th Jul 2022</span>
            </div>
            {/*<p  className="timeline_text" style={{fontSize: "14px"}}>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
             */}
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">Opening Ceremony</span>
              <span>16th July 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>
              Hackathon opening ceremony will start 9:15 AM onwards.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-globe"></i>
            <div className="details">
              <span className="title">Hackathon Starts</span>
              <span>16th July 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>
              Hackathon coding period will start from 10:30 AM onwards.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">Session from GeeksforGeeks</span>
              <span>16th July 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>
              Session on Complete Interview Preperation by GeeksForGeeks on
              11.30 AM Onwards.
            </p>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">Session from Postman</span>
              <span>16th July 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>
              Session on APIs 101 using Postman on 4:00 PM Onwards.
            </p>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">Session from Alan AI</span>
              <span>16th July 2022</span>
            </div>
            <p className="timeline_text" style={{ fontSize: "14px" }}>
              Session on Building Voice Ai Powered App in React JS with Alan Ai
              on 06:30 PM Onwards.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

export default TimeLine;
