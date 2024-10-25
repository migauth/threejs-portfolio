import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  return (
    <section>
      <div className="page-content text-4xl">
        <div className="flex text-6xl md:flex-row md:text-8xl lg: gap-14">
          <a
            href="https://github.com/migauth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="about-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-gauthier-a502b799/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="about-icon" />
          </a>
          <a href="mailto:mikegauthier222@hotmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="about-icon" />
          </a>
        </div>
        <p className="bio mt-5 text-3xl sm:text-4xl">
          Full stack web developer blending expertise in inclusive education and
          creative practices. Emphasizes the creation of effective, adaptable,
          and test-focused code. Values community engagement and effective
          communication. Loves pixel art, pizza, and sushi.
        </p>
      </div>
    </section>
  );
}
