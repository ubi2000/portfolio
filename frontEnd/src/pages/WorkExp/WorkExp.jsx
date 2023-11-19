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
              date="2023 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                MERN Stack Developer intern
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Gildware Technlogies
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
              date="2018 - 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FcSupport />}
            >
              <h3 className="vertical-timeline-element-title">
                Website admin and Technical Support
              </h3>
              <h4 className="vertical-timeline-element-subtitle">GemStones</h4>
              <p>
                Mainting website and itenary (built in WordPress)
                <br />
                Handling invoices and inventory.
                <br />
                Booking rescheduling and cancellation of tickets.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
