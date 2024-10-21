/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useRef } from "react";


function Name() {
  const gltf = useLoader(GLTFLoader, "/models/3dnamePS.glb");
  const ref = useRef();

  // Circular rotation
  useFrame((_, delta) => {
    ref.current.rotation.y += 1 * delta;
  });
  return <primitive object={gltf.scene} position={[0.5, 0.5, -1]} ref={ref} />;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [-1, 0.8, 2.5] }}>
      <directionalLight position={[1, 1, 1]} intensity={Math.PI * 1} />
      <Name />
      <OrbitControls />
    </Canvas>
  );
}