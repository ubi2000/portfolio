import React from "react";
import "./About.css";
import myImage from "../../assets/images/myimage.jpg"

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src={myImage}
              alt="profile_pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
               Hello, I'm Obaid Lone, a passionate and creative web
              developer,with a strong foundation in the MERN stack (MongoDB,
              Express.js, React, Node.js).
              <hr />
              My expertise lies in Crafting beautiful and intuitive
              user interfaces using React.js and ensuring a seamless user
              experience across devices and Designing robust server-side
              architecture with Node.js and Express.js, and working with MongoDB
              for efficient data storage and retrieval. Bringing together the
              frontend and backend to create cohesive and dynamic web
              applications.
              <hr />
               What Sets Me Apart What sets me apart is my commitment to
              staying updated with the latest industry trends and technologies.
              I thrive in collaborative environments and enjoy taking on
              challenges that push my creative and problem-solving boundaries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
