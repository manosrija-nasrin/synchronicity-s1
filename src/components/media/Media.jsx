import socialData from "../../data/socialData";

import "./Media.css";

export default function Media() {
  return (
    <div className="media">
      <p>Follow us on social media for updates</p>
      <div className="single">
        <a rel="noreferrer" target="_blank" href={socialData.instagram}>
          <i className="fab fa-3x fa-instagram"></i>
        </a>
      </div>

      {/* <div className="single">
        <a rel="noreferrer" target="_blank" href={socialData.discord}>
          <i className="fab fa-3x fa-discord"></i>
        </a>
      </div> */}

      <div className="single">
        <a rel="noreferrer" target="_blank" href={socialData.linkedin}>
          <i className="fab fa-3x fa-linkedin-in"></i>
        </a>
      </div>
      {/* <div className="single">
        <a rel="noreferrer" target="_blank" href={socialData.twitter}>
          <i className="fab fa-3x fa-twitter"></i>
        </a>
      </div> */}
      {/* <div className="single">
        <a rel="noreferrer" target="_blank" href={socialData.devpost}>
          <i className="fab fa-3x fa-dev"></i>
        </a>
      </div> */}
    </div>
  );
}
