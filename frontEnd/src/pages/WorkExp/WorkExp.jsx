import React from "react";
import { SiReact } from "react-icons/si";
import { FcSupport } from "react-icons/fc";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />

          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Oct 2023 - Present" 
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FcSupport />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Gemstone Travels</h4>
              <p>
                End-to-end development of scalable web applications using the MERN stack.
                <br /> Engineered RESTful APIs with Express and Node, ensuring secure and efficient communication
                between client and server.
                <br />Built interactive, responsive front-end components using React.js, leveraging Redux and Context
                API for advanced state management.
                <br />Integrated JWT-based authentication and role-based access controls to secure the application.
                <br />

              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Apr 2023 - Sep 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Stack intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Gildware Technologies
              </h4>
              <p>
                Developed and maintained web applications using the MERN
                (MongoDB, Express.js, React.js, Node.js) stack.<br></br>
                Collaborated with the development team to design and implement
                server-side logic using Node.js and Express.js.<br></br>
                Collaborated in an Agile development environment, participating
                in daily stand-ups, sprint planning, and code reviews
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Jun 2021 - Apr 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FcSupport />}
            >
              <h3 className="vertical-timeline-element-title">
                Website Admin/Content Management
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Interface Technologies</h4>
              <p>
                Created, updated, and maintained website content.
                <br />
                Ensured content accuracy, up-to-date information, and alignment
                with the company's branding and messaging.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
