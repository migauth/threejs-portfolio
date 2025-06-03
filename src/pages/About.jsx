/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div id="about" className="min-h-screen pt-20 text-6xl">
      <FontAwesomeIcon
        className="text-8xl pb-4 text-purple-200 hover:text-white"
        icon={faSmile}
      />
      <p className="bio text-2xl sm:text-4xl sm:w-3/5">
        Hello! I'm Mike. I’m a full-stack web developer with a diverse background in inclusive
        education and creative practices. My passions span across many projects,
        with a goal of working in web or game development. I like to keep my code clean, flexible, and reliable. I’m a big believer in clear communication and working with others to make things that are meaningful. When I'm not coding, I’m a
        gaming, bouldering, cooking, or eating pizza{" "}
        <span>
          <FontAwesomeIcon className="text-purple-200 sm:text-3xl" icon={faPizzaSlice} />
        </span>
      </p>
    </div>
  );
}
