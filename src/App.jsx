import "./App.css";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <>
        <main className="w-full h-full bg-black text-white flex-col justify-around ">
          <header className="">
            <Navbar />
          </header>
          <section id="home" className="opacity-95">
            <Home />
          </section>
          <div className="p-16 sm:p-20">
            <section id="about">
              <About />
            </section>
            <section id="cv">
              <CV />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </div>
        </main>
    </>
  );
}

export default App;
