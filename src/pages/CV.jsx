import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CV() {
  return (
    <div id="about" className="min-h-screen pt-20 text-2xl sm:text-4xl">
      <a
        href="https://github.com/migauth"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="about-icon text-8xl pb-4 text-purple-200 hover:text-white"
        />
      </a>
      <ul>
        <li>
          Lighthouse Labs <br />
          <span className="text-purple-300">
            ‣ Diploma, Web Development: 05/2024 - Victoria, BC (Remote online){" "}
          </span>
        </li>
        <li>
          Concordia University <br />{" "}
          <span className="text-purple-300">
            ‣ Bachelor of Fine Arts, Art Education: 06/2014 - Montreal, Quebec
          </span>
        </li>
      </ul>
      <hr className="my-2" />
      <ul>
        <li>
          <b>This Website ;)</b>
          <br />
          <span className="text-purple-300">‣ Built with React 3 Fiber</span>
        </li>
        <li>
          <b>Schmovies</b> <br />
          <span className="text-purple-300">
            ‣ The movie suggestion app ○ ReactJS, Django, Python, PostgreSQL
          </span>
        </li>
        <li>
          <b>Braille Translator</b> <br />
          <span className="text-purple-300">
            ‣ A simple braille translator ○ Vue, JavaScript, TailwindCSS
          </span>
        </li>
        <li>
          <b>Jungle Rails</b> <br />
          <span className="text-purple-300">
            ‣ A mini e-commerce app ○ Ruby on Rails, JavaScript, HTML, SCSS
          </span>
        </li>
        <li>
          <b>Tweeter</b> <br />
          <span className="text-purple-300">
            ‣ Twitter clone ○ JavaScript, HTML, CSS
          </span>
        </li>
      </ul>
    </div>
  );
}
