import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Some of the projects I'm building and have built, You can also check
          my github here{" "}
          <a href="https://github.com/ubi2000" target="_blank">
            {" "}
            👉 Click
          </a>
        </p>

        <div className="row" id="ads">
        <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">MERN Stack</span>
                <img
                  src="https://imgs.search.brave.com/rP6TRBfkdRupR-o078MFd2qO1qFZ1aG9ynCrlvf00bw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzA0LzA0/LzM2MF9GXzYzMzA0/MDQ0M19uaDRPRm5v/YTg5SllhZUpKdTRi/RDRsak03ekIwMVFF/Zi5qcGc"
                  alt="project2"
                  target="_blank"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React </span>
                <span className="card-detail-badge">NodeJs</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">MongoDB </span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">SocialMe</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/ubi2000/socialMe"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img
                  src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=900&t=st=1700335550~exp=1700336150~hmac=978670c049fd4c545543da906a0875dd176cf888c5e3a6b0c941be3448ba812e"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">FoodMe!</h6>
                </div>
                <a
                  className="ad-btn"
                  target="_blank"
                  href="https://github.com/ubi2000/foodApp/tree/main/foodApp"
                >
                  View
                </a>
              </div>
            </div>
          </div>
         
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">FrontEnd</span>
                <img
                  src="https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg?w=740&t=st=1700336040~exp=1700336640~hmac=9ede8e17c3607be9917e76cfcd35be83966686d30005008bd6d4d779c42e66c5"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">React Router</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Trippy:Tour and Travel</h6>
                  
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/ubi2000/MyTravel"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
