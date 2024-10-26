/* eslint-disable react/no-unknown-property */
import "./App.css";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Scene from "./components/Scene";
import Home from "./pages/Home";

function Sphere(props) {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  return (
    <>
      <mesh {...props} ref={ref}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial color="lime" wireframe />
      </mesh>
    </>
  );
}

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
        <main className="w-full h-full">
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
