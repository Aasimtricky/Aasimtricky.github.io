import React from "react";
import SectionTitle from "../global/SectionTitle";

function About() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto text-black">
      <SectionTitle title="About Me" />
      <div className="flex flex-col md:flex-row max-w-5xl m-auto p-5">
        <div className="md:flex-1">
          <img
            src="/static/misc/aasimlinkedin.png"  // Update with your image path
            alt="Mohamed Aasim"
            className="rounded-lg w-full md:w-3/4 mx-auto mb-4 md:mb-0"
          />
        </div>
        <div className="md:flex-1 bg-fun-pink border border-fun-pink-light rounded-lg p-5 flex flex-col justify-center">
          <p className="text-base">
          I'm currently based in Atlanta, exploring career opportunities across the USA. With extensive experience in project management and UI/UX design, I have successfully led a variety of projects in sectors ranging from websites and games to healthcare and e-commerce. I am also advancing my skills through a Master’s in IT Management at Cambellsville University.          </p>
          <p className="mt-4 text-base text-black">
          Beyond the technical expertise, my real passion lies in connecting with people. Whether it’s by creating memorable product experiences or simply sharing a moment of joy, I value every interaction. My approach to product management is driven by an insatiable curiosity, deep empathy, and an eagerness to continuously learn and grow. In my free time, I enjoy playing cricket, which not only keeps me active but also sharpens my team-building skills. Let's connect and make something impactful together!
          </p>
          <button
            className="mt-4 py-2 px-5 bg-fun-gray-dark hover:bg-fun-gray-darkest text-white font-bold rounded-lg transition-colors"
            onClick={() => window.location.href='https://docs.google.com/document/d/1MSwNVSOedE1PKP3OvZlPvBHaXU3J7ldM/edit?usp=sharing&ouid=106726599693480326044&rtpof=true&sd=true'} // Update with the actual path to your resume
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
