import React,{ useRef } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import lady from "../../../src/img/Testimonial/lady.png";
import mike from "../../../src/img/Testimonial/mike.png";
import man from "../../../src/img/Testimonial/man.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };

  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  // Create a ref to hold the instance of the carousel
  const owlCarouselRef = useRef();

  // Function to stop the carousel when hovering the button
  const handleMouseEnter = () => {
    if (owlCarouselRef.current) {
      owlCarouselRef.current.stop(); // This stops the carousel
    }
  };

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 4000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
    
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            {/* <OwlCarousel
              ref={owlCarouselRef}
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
              
            >
              <div className="col-lg-12">
                <div className="testi-item"  onMouseEnter={handleMouseEnter}>
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ireshan is working in one of the product teams in Kerk Solutions. Even though he is working and reporting in another team, we worked together in some occasions when I helped the team to resolving technical issues. During these encounters I realized Ireshan is a competent individual working towards accomplishing the assigned tasks. He helped me with trouble shooting an issues in the product and he has gained sound knowledge in the product. He also inherits analytical skills for trouble shooting. He was to shadowing product team lead when he was absence and took the full responsibility in all tasks and did a marvelous job. He is a superb team player and maintains a healthy relationship among team members. He always tries to help others in the team and others value his contribution.      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Harshika Ranaweera</h5>
                    <p>Second degree connection
                    Full Stack Developer | IT Consultant | DevOps Engineer</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I have met Ireshan at KERK Solutions and have worked with Ireshan on variety of complex projects done by my team. He was an innovative and creative developer who has the ability to solve problems according to programming best practises. Some of main tasks Ireshan has completed are build web based applications from the scratch, Data base management, Security fixes, managing deployments and releases. Some of his expertise are HTML5, CSS3, JavaScript, AngularJs, Angular, React, NodeJs and many more. He has given his full support when there is a critical situation and worked well under pressure. I want to wish him best of luck with his future career and I am happy to recommend Ireshan for any software related company
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={mike} alt="no internet connection"></img>
                    <h5>Nimesh Fonseka</h5>
                    <p>Senior Software Engineer @ Collabera X AEON Bank</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I worked with Ireshan since 2019. He is responsible and result oriented employee. Always accountable for all what he is doing and as responsible employee always contribute his team to achieve target. 
                      He has good analytical skills and able to handle multiple project successfully and has capable of handling pressure well, I would say he manage pressure well. 
                      His friendly approach let his to move with subordinate well and he is a truly assets for a company and certainly can get my full recommendation.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={lady} alt="no internet connection"></img>
                    <h5>Tharu Nathasha W.</h5>
                    <p>MSc.Eng | BSc Eng(Hons) | A.Eng(ECSL) | AMIE(SL) - Manager - Quality Assurance Engineering / Visiting lecturer / Mentor / Project Supervisor</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Ireshan was a colleague in my team for final year coursework at the university. He is a positive minded and dedicated individual who’s willing to accept challenges and do his best in whatever assigned. He played a major role in the team and was very supportive to others. I admire his courage for learning and happy to recommend him as a good asset to any company. 
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={man} alt="no internet connection"></img>
                    <h5>Anjana Rathnasinghe</h5>
                    <p>🎯 Senior Software Engineer | .NET Core, Azure, and Angular</p>
                  </div>
                </div>
              </div>
            </OwlCarousel> */}
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
