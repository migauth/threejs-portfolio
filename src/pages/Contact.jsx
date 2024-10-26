import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <section className="w-full h-screen relative text-8xl pl-12 pt-48">
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
    </section>
  );
}
