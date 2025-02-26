import React from "react";
import { useTypewriter } from 'react-simple-typewriter';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  const [typeEffect] = useTypewriter({
    words: ['Angular 🔴','Frontend Deverloper 💻','MERN Stack Dev 😎','Cross Platform v 🌐','React 📱'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
})
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <i class="fa-brands fa-facebook"  ></i>
              </a>
              <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <i class="fa-brands fa-google-plus"  ></i>
              </a>
              <a href="https://www.instagram.com/instructor_ehizeex/">
              <i class="fa-brands fa-linkedin" ></i>
              </a>
              <a href="https://twitter.com/Ehiedu_baba">
              <i class="fa-brands fa-square-twitter" ></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ireshan Waiman</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
              I'm a
              <span> {typeEffect}</span>
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
