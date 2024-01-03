import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import socialData from "../../data/socialData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            {/* <img src={logo} className="imgfooter" /> */}
            <span className="logo_name">Synchronicity - S1</span>
          </div>

          <div className="media-icons">
            {/* <a target="_blank" href={socialData.discord}>
              <i className="iconlink fab fa-discord"></i>
            </a>
            <a target="_blank" href={socialData.twitter}>
              <i className="iconlink fab fa-twitter"></i>
            </a> */}
            <a target="_blank" href={socialData.instagram} rel="noreferrer">
              {/* <i className="iconlink fab fa-instagram"></i> */}
              <FontAwesomeIcon icon={faInstagram} className="iconlink" />
            </a>
            <a target="_blank" href={socialData.linkedin} rel="noreferrer">
              {/* <i className="iconlink fab fa-linkedin-in"></i> */}
              <FontAwesomeIcon icon={faLinkedinIn} className="iconlink" />
            </a>
            <a target="_blank" href={socialData.email} rel="noreferrer">
              {/* <i className="iconlink fa-solid fa-envelope"></i> */}
              <FontAwesomeIcon icon={faEnvelope} className="iconlink" />
            </a>
          </div>
        </div>
        <div className="my-3">
          <img src="/ju_logo_black.png" className="imgfooterdsc" />
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © {new Date().getFullYear()} JU ACM Student Chapter, All
            rights reserved.
          </span>
          <span className="policy_terms">Made with ❤️</span>
        </div>
      </div>
    </footer>
  );
}
