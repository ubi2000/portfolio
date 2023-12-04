import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.pdf"
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div >
                 </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a Obaid Lone</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "Mern Stack Developer!",
                    "React native developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=+916006621876"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn btn-cv" href={Resume} download="obaid_resume.pdf">
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;