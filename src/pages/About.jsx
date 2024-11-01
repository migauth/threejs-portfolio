/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div id="about" className="min-h-screen pt-20 text-6xl">
      <FontAwesomeIcon
        className="text-8xl pb-4 text-purple-200 hover:text-white"
        icon={faSmile}
      />
      <p className="bio text-4xl  sm:text-4xl">
        I’m a full-stack web developer with a diverse background in inclusive
        education and creative practices. My passions span across many projects,
        with a goal of working in 3D web or game development. I’m dedicated to
        crafting effective, adaptable, and test-driven code and value both
        community engagement and clear communication. When I'm not coding, I’m a
        gaming, bouldering, cooking, or eating pizza.
      </p>
    </div>
  );
}
