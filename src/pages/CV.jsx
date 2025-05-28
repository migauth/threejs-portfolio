import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CV() {
  return (
    <div id="cv" className="min-h-screen pt-20 text-2xl  sm:text-4xl">
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
        <li className="py-4">
          Lighthouse Labs <br />
          <span className="text-purple-300">
            ‣ Diploma, Web Development: 05/2024 <br />○ Victoria, BC (Remote
            online){" "}
          </span>
        </li>
        <li>
          Concordia University <br />{" "}
          <span className="text-purple-300">
            ‣ Bachelor of Fine Arts, Art Education: 06/2014 <br />○ Montreal,
            Quebec
          </span>
        </li>
      </ul>
      <hr className="my-2 w-1/2" />
      <ul className="py-4">
        <li className="py-1">
          This Website
          <br />
          <span className="text-purple-300">○ React 3 Fiber</span>
        </li>

        <li className="py-1">
          <a
            href="https://migauth.github.io/braille-translator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200"
          >
            Braille Translator
          </a>
          <br />
          <span className="text-purple-300">
            ‣ A simple braille translator <br />○ Vue, JavaScript, TailwindCSS
          </span>
        </li>
        <li className="py-1">
          <a
            href="https://bridgenorthbacksplash.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200"
          >
            Bridgenorth Backsplash
          </a>
          <br />
          <span className="text-purple-300">
            ‣ A gallery website for a self-employed tiler specializing in
            backsplashes. <br />○ React, JavaScript, TailwindCSS
          </span>
        </li>
        <li className="py-1">
          <a
            href="https://schmovieslive.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200"
          >
            Schmovies
          </a>
          <br />
          <span className="text-purple-300">
            ‣ A movie suggestion and mini movie database. <br />○ ReactJS,
            Django, Python, PostgreSQL
          </span>
        </li>
        <li className="py-1">
          <a
            href="https://github.com/migauth/jungle-rails"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200"
          >
            Jungle Rails
          </a>
          <br />
          <span className="text-purple-300">
            ‣ A mini e-commerce app <br />○ Ruby on Rails, JavaScript, HTML,
            SCSS
          </span>
        </li>
        <li className="py-1">
          <a
            href="https://github.com/migauth/tweeter-lhl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200"
          >
            Tweeter
          </a>
          <br />
          <span className="text-purple-300">
            ‣ Twitter clone <br />○ JavaScript, HTML, CSS
          </span>
        </li>
      </ul>
    </div>
  );
}
