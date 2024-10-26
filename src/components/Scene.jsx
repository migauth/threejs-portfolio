/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function Sphere() {

  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  return (
    <points ref={ref}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="purple" size={0.015} sizeAttenuation />
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
