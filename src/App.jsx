import "./App.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import Navbar from "./components/Navbar";

function Scene() {
  const gltf = useLoader(GLTFLoader, "/models/3dname.glb");

  return (
    <Canvas camera={{ position: [-1, 4, 2.5] }}>
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={Math.PI * 1} />
      <mesh>
        {/* <icosahedronGeometry args={[1, 1]} /> */}
        {/* <meshBasicMaterial color={"lime"} wireframe /> */}
        <primitive object={gltf.scene} position={[0, 1, 0]} />
      </mesh>
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
