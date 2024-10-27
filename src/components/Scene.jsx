/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Sphere() {

  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  return (
    <points ref={ref}>
      <sphereGeometry args={[1, 200, 200]} />
      <pointsMaterial color="#A855F7" size={0.005} sizeAttenuation transparent opacity={0.7}/>
    </points>
  );
}

export default function Scene() {

  return (
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={0.5} />
      <Sphere/>
    </Canvas>
  );
}
