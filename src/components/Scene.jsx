/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

function Sphere() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current); // Logs the positions array to the console
    }
  }, [ref]);

  // const [hovered, hover] = useState(false);

  // useFrame((_, delta) => {
  //   ref.current.rotation.y += 0.1 * delta;
  // });

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
