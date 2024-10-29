/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";


function Box() {
  const ref = useRef();

  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    ref.current.rotation.y += 0.1 * delta;
  });

  return (
    <points
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        console.log("Hover index of component:", e.index);
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1, 20, 20, 20]} />
      <pointsMaterial
        color={hovered ? "#A855F7" : "orange"}
        // color="#A855F7"
        size={0.02}
      />
    </points>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 1.9] }}>
      <ambientLight intensity={0.5} />
      <Box />
    </Canvas>
  );
}
