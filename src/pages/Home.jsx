/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";
import Head from "../models/Head"; // Add this import

const Home = () => {
  const [headProps, setHeadProps] = useState({
    screenScale: [5, 5, 5],
    screenPosition: [0, 2, -10], // Moved the Y-coordinate from 0 to 2
    rotation: [0, 3.14, 0]
  });

  const adjustHeadForScreenSize = () => {
    if (window.innerWidth < 768) {
      setHeadProps(prev => ({ ...prev, screenScale: [3, 3, 3], screenPosition: [0, 1, -10] })); // Adjusted Y-coordinate for smaller screens
    } else {
      setHeadProps(prev => ({ ...prev, screenScale: [5, 5, 5], screenPosition: [0, 2, -10] })); // Kept the new Y-coordinate for larger screens
    }
  };

  useEffect(() => {
    adjustHeadForScreenSize();
    window.addEventListener('resize', adjustHeadForScreenSize);
    return () => window.removeEventListener('resize', adjustHeadForScreenSize);
  }, []);

  return (
    <section className="h-screen w-full relative">
      <Canvas
        className="h-screen w-full bg-transparent"
        camera={{ position: [0, 0, 0], fov: 50, near: 0.1, far: 1000 }}
      >
        <Suspense >
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <ambientLight intensity={0.5} />
          <Head
            scale={headProps.screenScale}
            position={headProps.screenPosition}
            rotation={headProps.rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
