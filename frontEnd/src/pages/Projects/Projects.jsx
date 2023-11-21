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
                  src="https://cdn.pixabay.com/photo/2013/07/13/12/04/android-159109_1280.png"
                  alt="project2"
                  target="_blank"
                />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React </span>

              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Robo-Friends</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/ubi2000/RoboFriends"
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
                <span className="card-notify-badge">FrontEnd</span>
                <img
                  src="https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg?w=740&t=st=1700336040~exp=1700336640~hmac=9ede8e17c3607be9917e76cfcd35be83966686d30005008bd6d4d779c42e66c5"
                  alt="project1"
                />
              </div>
              <div className="card-image-overly m-auto mt-3"> 
                <span className="card-detail-badge">React</span>     
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Trippy</h5>
                  <h5>Tour and Travel</h5>
                </div>
                <a className="ad-btn" href="https://github.com/ubi2000/MyTravel" target="_blank">
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
