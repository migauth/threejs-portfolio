import "./App.css";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useRef } from "react";
import Navbar from "./components/Navbar";

// I have to create another component for my name to spin so the canvas can render first.

function Name() {
  const gltf = useLoader(GLTFLoader, "/models/3dnamePS.glb");
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.y += 1 * delta
  })
  return (
    <primitive object={gltf.scene} position={[0, 1, 0]} ref={ref} />

  )
}

function Scene() {

  return (
    <Canvas camera={{ position: [-0.7, 0.8, 2.5] }}>
      <directionalLight position={[1, 1, 1]} intensity={Math.PI * 1} />
      <Name />
      <OrbitControls />
    </Canvas>
  );
}

function App() {
  return (
    <main className="bg-white h-screen w-screen">
      <header className="flex justify-between m-16">
        <div id="logo">
          <h1>Michael Gauthier</h1>
        </div>
        <Navbar />
      </header>

      <div className="border border-black rounded-3xl m-16 ">
        <Scene />
      </div>
    </main>
  );
}

export default App;
