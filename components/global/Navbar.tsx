import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

function Navbar({ currentPage }) {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center text-black">
            <img
              className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/logo_no_text.svg"
              width="60"
            />
{"Mohamed Aasim".split("").map((letter, index) => {
  // Check if the current letter is the last letter of "Mohamed"
  if (index === 6) {
    return (
      <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
        {letter}&nbsp; {/* Add a space */}
      </span>
    );
  } else {
    return (
      <span key={index} className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
        {letter}
      </span>
    );
  }
})}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-black ${
                currentPage === item.title
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 transition-opacity"
              }`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
