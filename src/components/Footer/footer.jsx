import socialData from "../../data/socialData";
import dsc from "./dsc.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="content">
        <div class="top">
          <div class="logo-details">
            {/* <img src={logo} className="imgfooter" /> */}
            <span class="logo_name">DUHacks</span>
          </div>

          <div class="media-icons">
            <a target="_blank" href={socialData.discord}>
              <i class="iconlink fab fa-discord"></i>
            </a>
            <a target="_blank" href={socialData.twitter}>
              <i class="iconlink fab fa-twitter"></i>
            </a>
            <a target="_blank" href={socialData.instagram}>
              <i class="iconlink fab fa-instagram"></i>
            </a>
            <a target="_blank" href={socialData.linkedin}>
              <i class="iconlink fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" href={socialData.email}>
              <i class="iconlink fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <ul class="box1 input-box1">
          <img src={dsc} className="imgfooterdsc" />
        </ul>
      </div>
      <div class="bottom-details">
        <div class="bottom_text">
          <span class="copyright_text">
            Copyright © {new Date().getFullYear()} JU ACM Student Chapter, All
            rights reserved.
          </span>
          <span class="policy_terms">Made with ❤️</span>
        </div>
      </div>
    </footer>
  );
}
