import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about w-full h-screen relative p-12 pt-48">
      <FontAwesomeIcon className="text-8xl pb-4" icon={faSmile} />
      <p className="bio text-4xl  sm:text-4xl">
        Hello! I’m a full-stack web developer with a diverse background in
        inclusive education and creative practices. My passions span across many
        projects, with a goal of working in 3D web or game development. I’m
        dedicated to crafting effective, adaptable, and test-driven code and
        value both community engagement and clear communication. Plus, I’m a fan
        of pixel art, pizza, and sushi.
      </p>
    </section>
  );
}
