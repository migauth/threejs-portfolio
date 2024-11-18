import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-between pt-20 text-8xl"
    >
      <div>
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
        <p className="pt-4 text-2xl sm:text-3xl">
          For collaboration or general inquiries, please reach out by email or
          LinkedIn!
        </p>
      </div>
      <small className="text-xl pb-4">© 2024 Michael Gauthier</small>
    </div>
  );
}
