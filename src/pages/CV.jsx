import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CV() {
  return (
    <section className="w-full h-screen relative text-4xl pt-48 p-12">
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
          Lighthouse Labs ‣ Diploma, Web Development: 05/2024 - Victoria, BC
          (Remote online)
        </li>
        <li>
          Concordia University ‣ Bachelor of Fine Arts, Art Education: 06/2014 -
          Montreal, Quebec
        </li>
      </ul>
      <hr className="my-2" />
      <ul>
        <li>
          <b>This Website ;) ‣ </b>
          <span className="text-purple-200">Built with React 3 Fiber</span>
        </li>
        <li>
          <b>Schmovies ‣ </b>
          <span className="text-purple-200">
            The movie suggestion app ○ ReactJS, Django, Python, PostgreSQL
          </span>
        </li>
        <li>
          <b>Braille Translator ‣ </b>
          <span className="text-purple-200">
            A simple braille translator ○ Vue, JavaScript, TailwindCSS
          </span>
        </li>
        <li>
          <b>Jungle Rails ‣ </b>
          <span className="text-purple-200">
            A mini e-commerce app ○ Ruby on Rails, JavaScript, HTML, SCSS
          </span>
        </li>
        <li>
          <b>Tweeter ‣ </b>
          <span className="text-purple-200">
            Twitter clone ○ JavaScript, HTML, CSS
          </span>
        </li>
      </ul>
    </section>
  );
}
