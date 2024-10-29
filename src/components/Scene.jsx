/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

// purple color "#A855F7"

const tempObject = new THREE.Object3D();

function Spheres() {
  const ref = useRef();

  const meshRef = useRef();

  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    let i = 0;
    for (let x = 0; x < 10; x++)
      for (let y = 0; y < 10; y++)
        for (let z = 0; z < 10; z++) {
          const id = i++;
          tempObject.position.set(5 - x, 5 - y, 5 - z);
          tempObject.updateMatrix();
          meshRef.current.setMatrixAt(id, tempObject.matrix);
        }
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, 2000]}
      onPointerMove={(e) => {
        e.stopPropagation();
        console.log("Hover index of component:", e.index);
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.5, 10, 10]} />
      <meshBasicMaterial color={"#A855F7"} />
    </instancedMesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <Spheres />
      <OrbitControls />
    </Canvas>
  );
}
