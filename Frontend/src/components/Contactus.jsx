import React, { useContext, useState } from "react";
import voteContext from "../Context/vote/Votecontext";
import Navbar from "./Navbar";

const Contactus = () => {
  const [credentials, SetCrendentials] = useState({
    name: "",
    email: "",
    message: "",
  });
  const context = useContext(voteContext);
  const { sendContact } = context;

  const handleContact = async (e) => {
    e.preventDefault();
    const result = await sendContact(
      credentials.name,
      credentials.email,
      credentials.message
    );
    if (result.success) {
      alert("Thanks for contacting ! ");
    } else {
      alert("there is a problem with it ");
    }
    SetCrendentials({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    SetCrendentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font relative">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
          Contact Us
        </h1>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe 
          width="100%" 
          height="100%" 
          className="absolute inset-0"
          frameborder="0" 
          title="map"
          scrolling="no" 
          marginheight="0" 
          marginwidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=JK%20Lakshmipat%20University+(Our%20College)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps systems</a>
          </iframe>                      
            <div
              className="contactDetails relative flex flex-wrap py-6 rounded shadow-md"
              style={{ backgroundColor: "rgb(44, 47, 60)" }}
            >
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  JK Lakshmipat University
                </h2>
                <p className=" text-white mt-1">Jaipur, Rajasthan</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 ">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed" href="/">
                  prakharkhandelwal@jklu.edu.in
                </a> <br />
                <a className="text-indigo-500 leading-relaxed" href="/">
                  abhishekhsingh@jklu.edu.in
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-indigo-500">
                  +91 9001879305
                  |
                  +91 9929090440
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <div className="relative mb-4">
              <input
                type="text"
                id="name"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                value={credentials.message}
                placeholder="Enter Your Feedback Here...."
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleContact}
            >
              Send Message
            </button>
            <p className="text-xs text-white mt-3">
              We Value Your Feedback Thank you for visiting our website!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
