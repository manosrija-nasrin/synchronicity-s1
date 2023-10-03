import { useEffect, useState } from "react";
import "./footer.css";
import logo from "../navbar/LOGO.png";
import dsc from "./dsc.png";
import { SOCIALS } from "../../Module/General";

export default function Footer() {
  const [template, setTemplate] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = (e) => {
    if (window.scrollY > 2800) setTemplate(true);
    else if (window.scrollY < 2800) setTemplate(false);
  };

  return (
    <div>
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <img src={logo} className="imgfooter" />
              <span class="logo_name">&nbsp;DUHacks</span>
            </div>
            <div class="media-icons">
              <a target="_blank" href={SOCIALS.discord}>
                <i class="iconlink fab fa-discord"></i>
              </a>
              <a target="_blank" href={SOCIALS.twitter}>
                <i class="iconlink fab fa-twitter"></i>
              </a>
              <a target="_blank" href={SOCIALS.instagram}>
                <i class="iconlink fab fa-instagram"></i>
              </a>
              <a target="_blank" href={SOCIALS.linkedin}>
                <i class="iconlink fab fa-linkedin-in"></i>
              </a>
              <a target="_blank" href={SOCIALS.email}>
                <i class="iconlink fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box1 input-box1">
              <img src={dsc} className="imgfooterdsc" />
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">Copyright © 2022 DUHacks</span>
            <span class="policy_terms">Made with ❤️</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
