import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <div id="about" className="min-h-screen pt-20 text-8xl">
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/michael-gauthier-a502b799/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="about-icon text-purple-200 hover:text-white"
          />
        </a>
        <a href="mailto:mikegauthier222@hotmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="about-icon text-purple-200 hover:text-white"
          />
        </a>
      </div>
      <p className="text-2xl sm:text-6xl">
        For colaboration or general inquiries, please reach out by email or
        linkedin!
      </p>
      <div>
        <small className="text-xl">copyright © Michael Gauthier 2024</small>
      </div>
    </div>
  );
}
