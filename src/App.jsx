/* eslint-disable react/no-unknown-property */
import "./App.css";
import About from "./pages/About";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

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
        <main className="w-full h-screen relative bg-gradient-to-r from-lime-200 to-lime-600">
          <Canvas
          flat
          shadows
            className="fixed top-0 left-0 w-full h-full z-0"
            camera={{ position: [10, -2, 0] }}
          >
            <ambientLight />
            <Sphere position={[10, -1.5, 0]} />
          </Canvas>

          <div className="relative z-10">
            <header className="fixed flex top-0 left-0 w-full z-20 m-4 bg-transparent">
              <Navbar />
            </header>
            <div className="fixed top-1/4 w-full left-0 bg-transparent p-4 md:p-8 lg:p-12 xl:p-16">
              <Routes>
                <Route path="/" element={null} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<CV />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default App;
