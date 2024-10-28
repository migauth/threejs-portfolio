/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

function Sphere() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array;

      // Access a specific point by index, where each point has an x, y, z coordinate
      const pointIndex = 0; // Replace this with the index of the point you want
      const x = positions[pointIndex * 3];
      const y = positions[pointIndex * 3 + 1];
      const z = positions[pointIndex * 3 + 2];
      console.log("Point coordinates:", { x, y, z });
    }
  }, [ref]);

  // const [hovered, hover] = useState(false);

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  //access the points of each position on its axis with a position varible?

  return (
    <points
      ref={ref}
      // onPointerOver={(event) => (event.stopPropagation(), hover(true))}
    >
      <boxGeometry args={[1, 1, 1, 20, 20, 20]} />
      <pointsMaterial
        // color={hovered ? "#A855F7" : "orange"}
        color="#A855F7"
        size={0.01}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 1.9] }}>
      <ambientLight intensity={0.5} />
      <Sphere />
    </Canvas>
  );
}
