import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { id:1,label: "Education", logoSrc: "education.svg" },
    { id:2,label: "Work History", logoSrc: "work-history.svg" },
    { id:3,label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { id:4,label: "Projects", logoSrc: "projects.svg" },
    { id:5,label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Angular", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Tailwind CSS", ratingPercentage: 85 },
    { skill: "Material UI", ratingPercentage: 89 },
    { skill: "Redux", ratingPercentage: 89 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "KoverUI-Insurance Technology Platform",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a comprehensive insurance platform supporting policy management, claims processing, underwriting, and customer interactions, enhancing automation and efficiency for insurers.",
      subHeading: "Technologies Used: HTML5, CSS3, JavaScript, Angular, Bootsrap",
    },
    {
      title: "Bao Viet Travel Mobile App ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a hybrid mobile app for travel and personal accident insurance with policy management, claims, inquiries, multilingual support, currency conversion, online payments, and automated policy emails.",
      subHeading:
        "Technologies Used:  Angular, Ionic, TypeScript",
    },
    {
      title: "ERGO Accident Protect",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a safety-focused insurance app from scratch, providing Single, Family, and Multiple Individual coverage with seamless transactions and document management., both Paypal and Stripe",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, Angular, Bootsrap",
    },
    {
      title: "ERGO Broker Portal ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a comprehensive insurance broker application for issuing quotations, policies, cover notes, and renewal notices, with support for inquiries, policy management, and document generation., both Paypal and Stripe",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, Angular, Bootsrap",
    },
    {
      title: "ERGO Motor -Private Car",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Built a general insurance platform from scratch for purchasing motor insurance for private and corporate vehicles, featuring payment gateway integration and document downloads., both Paypal and Stripe",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, Angular, Bootstrap.",
    },
    {
      title: "ERGO SME Biz Protect",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Built a general insurance solution for small and medium businesses with multi-location coverage, payment gateway integration, and document management.",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, Angular, Bootstrap.",
    },
    {
      title: "ERGO Travel Protect",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Built a travel insurance platform from scratch, offering Single Trip and Annual Multi-Trip coverage with payment processing, document downloads, and email forwarding.",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, Angular, Bootstrap.",
    },
    {
      title: "ERGO Travel Protect -Corporate",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Built a corporate travel insurance solution from scratch, tailored for employee coverage with payment gateway integration and document management.",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, Angular, Bootstrap.",
    },
    {
      title: "PHA Health Online",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a health insurance platform offering Individual, Family, and Multiple Individuals coverage with payment processing, document downloads, and email forwarding.",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap.",
    },
    {
      title: "PHA Motor Vehicle",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Developed a motor vehicle insurance platform for private and corporate vehicles with payment processing, document downloads, and email forwarding.",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap.",
    },
    {
      title: "Underwriter Portal",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Collaborated on developing an internal back-office application for underwriters, facilitating transaction management, claims processing, policy handling, underwriting approvals, and user management.",
      subHeading:
        "Technologies Used: HTML5, CSS3, JavaScript, AngularJS, jQuery, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <h2>EDUCATION</h2>
      <ResumeHeading
        heading={"University of Plymouth(United Kingdom)"}
        subHeading={"BSC.(HONS) OF SOFTWARE ENGINEERING"}
        fromDate={"2015"}
        toDate={"2018"}
      />

      <ResumeHeading
        heading={"University of Helsinki (Finland)"}
        subHeading={"Certificate in Full Stack Development "}
        fromDate={"2020"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"University of Moratuwa"}
        subHeading={"Programming in Python"}
        fromDate={"2023"}
        toDate={"2023"}
      />
    </div>,

    /* WORK EXPERI  ENCE */
     <div>
       <h2 className='headingMTop'> WORK EXPERIENCE</h2>
     </div>,
    <div className="resume-screen-container" key="work-experience">
        
      <div className="experience-container">
   
        <ResumeHeading
          heading={"Dataintics"}
          subHeading={"SENIOR FRONREND DEVELOPER"}
          fromDate={"2024"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Project: KoverUI-Insurance Technology Platform
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Develop Angular frontend for KoverUI, enabling swift configuration and distribution of insurance products.
          </span>
          <br/>
          <span className="resume-description-text">
            - Designed reusable UI components for underwriting, policy management, and claims, while writing clean, maintainable code following best practices.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrate KoverUIwith third-party systems and internal APIs for seamless data exchange..{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Enable users to customize insurance products without coding, including broker portals and mobile apps.
          </span>
          <br />
          <span className="resume-description-text">
            - Ensure responsive, mobile-first design for consistent user experience across devices.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrate dynamic reporting features to provide actionable insights into insurance data.
          </span>
          <br />
          <span className="resume-description-text">
            - Optimize frontend performance, reducing load times and improving user experience.
          </span>
          <br />
          <span className="resume-description-text">
            - Collaborate with backend engineers to ensure smooth integration of frontend and business logic.
          </span>
          <br />
          <span className="resume-description-text">
            - Work with UX/UI designers to create an intuitive interface for complex insurance processes.
          </span>
          <br />
          <span className="resume-description-text">
            - Contribute to Agile sprints, delivering key features and enhancements.
          </span>
          <br />
          <span className="resume-description-text">
            - Implement security best practices, ensuring secure handling of sensitive insurance data.
          </span>
          <br />
          <br />
        </div>
        <ResumeHeading
          heading={"Kerk Solution"}
          subHeading={"SOTWARE ENGINEER"}
          fromDate={"2019"}
          toDate={"2024"}
        />
         <div className="experience-description">
          <span className="resume-description-text">
          April 2019 –September 2024<br/>
          Projects: ERGO Insurance Platform, PHA Health Insurance Platform, BaovietTravel Mobile App
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            - Developed and maintained web applications from scratch using HTML5, CSS3, JavaScript, and Angular, ensuring responsive design for multiple &nbsp;&nbsp;&nbsp;&nbsp;devices.
          </span>
          <br />
          <span className="resume-description-text">
            - Upgraded projects to the latest Angular versions, optimizing performance and ensuring compatibility with modern web standards.
          </span>
          <br />
          <span className="resume-description-text">
            - Collaborated with UI/UX designers and back-end developers to turn wireframes and designs into functional web apps.
          </span>
          <br />
          <span className="resume-description-text">
            - Applied responsive design with frameworks like Bootstrap, enhancing accessibility and usability.
          </span>
          <br />
          <span className="resume-description-text">
            - Actively contributed to agile development processes, including sprint planning, stand-ups, and retrospectives.
          </span>
          <br />
          <span className="resume-description-text">
            - Debugged and troubleshot frontend issues, resolving technical challenges quickly to minimize downtime.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated REST APIs for data population and submission, ensuring seamless backend connectivity.
          </span>
          <br />
          <span className="resume-description-text">
            - Optimized code and streamlined processes for improved performance, scalability, and reduced maintenance costs.
          </span>
          <br />
          <span className="resume-description-text">
            - Conducted testing to identify defects early and ensure high-quality deliverables.
          </span>
          <br />
          <span className="resume-description-text">
            - Managed Dev, UAT, and Production releases, ensuring smooth deployments and minimal disruption.
          </span>
          <br />
          <span className="resume-description-text">
            - Mentored junior developers and facilitated knowledge-sharing sessions to support team growth.
          </span>
          <br />
        </div>
      </div>
    </div>  ,

    /* PROGRAMMING SKILLS */
    <div className="mt"> 
    <h2 className="mtop">PROGRAMMING SKILLS</h2>
    <div
      className="resume-screen-container programming-skills-container mb-5"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          {/* <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div> */}
        </div>
      ))}
    </div>
    </div>,
    

    /* PROJECTS */
    <><h2 className="mb-4">PROJECT WORK</h2>
    <div className="resume-screen-container" key="projects">
      
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        />
      ))}
    </div></>,

    /* Interests */
    <div className="mt-project-work">
    <h2>INTERESTS</h2>
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Learn New Technologies"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Traverling"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div></div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
// eslint-disable-next-line
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
        key='id'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  console.log("props.id ",props.id )
  return (
    
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          {/* <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div> */}
          
          <div className="resume-bullet-details" >{ getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
