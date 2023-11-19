import React, { useState } from "react";
import "./Contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/email/sendEmail", formData); 
      alert("Message sent successfully!");
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                    alt="ocontact"
                    className="image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/obaid-lone-351970243/"
                        target="_blank"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a href="https://github.com/ubi2000/" target="_blank">
                        <BsGithub color="black" size={30} className="ms-2" />{" "}
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=6006621876"
                        target="_blank"
                      >
                        <FaSquareWhatsapp
                          color="black"
                          size={30}
                          className="ms-2"
                        />{" "}
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Write your message"
                      className="mb-3"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
