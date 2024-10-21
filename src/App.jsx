/* eslint-disable react/no-unknown-property */
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// I have to create another component for my name to spin so the canvas can render first.



function App() {
  return (
    <main className="bg-white h-screen w-screen">
      <header className="flex justify-between m-16">
        <div id="logo">
          <h1>Michael Gauthier</h1>
        </div>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
    </main>
  );
}

export default App;
