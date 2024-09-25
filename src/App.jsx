import "./App.css";
import { Resume, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="bg-orange-900 h-screen w-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
