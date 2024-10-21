/* eslint-disable react/no-unknown-property */
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-white h-screen w-screen">
      <header className="flex justify-between m-16">
        <div>
          <h1 id="logo" className="text-2xl">Michael Gauthier</h1>
        </div>
        <Navbar />
      </header>

      <div className="m-16 h-2/3 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
