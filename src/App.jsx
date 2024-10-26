/* eslint-disable react/no-unknown-property */
import "./App.css";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import { useEffect, useState} from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); // Add an empty dependency array to run useEffect only once.

  return (
    <>
      {isLoading ? (
        <main className="h-screen w-screen">
          <Loading />
        </main>
      ) : (
        <main className="w-full h-full bg-black text-white">
          <header className="">
            <Navbar />
          </header>
          <section id="home" className="">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="cv">
            <CV />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      )}
    </>
  );
}

export default App;
