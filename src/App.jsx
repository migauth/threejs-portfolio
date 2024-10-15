import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar";

function Scene() {
  <Canvas camera={{ position: [-1, 4, 2.5] }}>
    <directionalLight position={[1, 1, 1]} />
    <mesh>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  </Canvas>;
}

function App() {
  return (
    <main className="bg-white h-screen w-screen">
      <h1>hi</h1>
      <Navbar />
      <div className="border border-black rounded-3xl m-10 bg-black">
        <Canvas camera={{ position: [-1, 4, 2.5] }}>
          <directionalLight position={[1, 1, 1]} />
          <mesh >
            <icosahedronGeometry args={[1, 1]} />
            <meshBasicMaterial color={'lime'} wireframe/>
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </main>
  );
}

export default App;
