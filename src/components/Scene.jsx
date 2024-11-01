/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

// purple color "#A855F7"

const tempObject = new THREE.Object3D();

function Spheres() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const count = 100

  useFrame((_, delta) => {
    meshRef.current.rotation.y += 0.1 * delta;

    for (let i = 0; i < count; i++) {
      // Calculate the position based on a cubic arrangement
      const x = (i % 10) * 1.2 - 6; // Adjust spacing and position
      const y = Math.floor((i % 100) / 10) * 1.2 - 6;
      const z = Math.floor(i / 100) * 1.2 - 6;

      tempObject.position.set(x, y, Math.floor(i / 10) * 1.2 - 6); // Now this creates a depth effect
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, count]}
      onPointerMove={(e) => {
        e.stopPropagation();
        console.log("Hover index of component:", e.index);
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.1, 10, 10]} />
      <meshBasicMaterial color={"#A855F7"} />
    </instancedMesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.1} />
      <Spheres />
      <OrbitControls />
    </Canvas>
  );
}
