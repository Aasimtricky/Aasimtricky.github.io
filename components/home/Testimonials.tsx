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
            I am a passionate and dedicated professional with a keen interest in web development. With several years of experience in the field, I specialize in creating seamless and dynamic user experiences.
          </p>
          <p className="mt-4 text-xs text-fun-gray">
            Based in [Your City], I work with a wide range of clients to bring their digital projects to life, ensuring high-quality results and innovative solutions.
          </p>
<<<<<<< HEAD
          <button
            className="mt-4 py-2 px-5 bg-fun-gray hover:bg-fun-gray-dark text-white font-bold rounded-lg transition-colors"
            onClick={() => window.location.href='/static/misc/resume.pdf'} // Update with the actual path to your resume
          >
            Download Resume
          </button>
=======
          <p className="mt-2 text-xs text-fun-gray">
            I'm always open to discussing new projects or opportunities to collaborate. Feel free to reach out!
          </p>
>>>>>>> parent of d9097f3 (Update Testimonials.tsx)
        </div>
      </div>
    </div>
  );
}

export default About;
