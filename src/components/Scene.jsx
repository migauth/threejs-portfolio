/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
// import Sphere from "./Sphere";

function Name() {
  const gltf = useLoader(GLTFLoader, "/models/3dnamePS.glb");
  const ref = useRef();

  // Circular rotation
  useFrame((_, delta) => {
    ref.current.rotation.y += 1 * delta;
  });
  return <primitive object={gltf.scene} position={[0.5, 0.5, -1]} ref={ref} />;
}

function Sphere(props) {

  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 1 * delta;
  });

  return (
    <>
      <mesh {...props} ref={ref}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial color="yellow" wireframe/>
      </mesh>
    </>
  );
}

export default function Scene() {

  return (
    <Canvas camera={{ position: [-1, 0.8, 2.5] }} >
      <ambientLight />
      <Sphere position={[-0.75, 0, 0]}  />
    </Canvas>
  );
}
