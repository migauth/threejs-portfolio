/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Sphere() {
  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  // Animate the sphere vertices
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      const positions = ref.current.geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 4) {
        positions[i] += 0.00005 * Math.sin(time + i); // x-coordinate
        positions[i + 1] += 0.000009 * Math.sin(time + i * 1.1); // y-coordinate
        positions[i + 2] += 0.005 * Math.sin(time + i * 1.2); // z-coordinate
      }

      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <boxGeometry args={[1.2, 1.2, 1.2, 200, 200, 200]} />
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
