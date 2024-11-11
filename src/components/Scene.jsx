/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// purple color "#A855F7"

// const tempObject = new THREE.Object3D();

const InstancedSpheres = ({ count, randomDistribution = true }) => {
  const meshRef = useRef();
  const tempObject = new THREE.Object3D();

  // Calculate initial positions for each sphere
  const initialPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const distance = 1;

    for (let i = 0; i < count; i++) {
      let x, y, z;

      if (randomDistribution) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        x = distance * Math.sin(theta) * Math.cos(phi);
        y = distance * Math.sin(theta) * Math.sin(phi);
        z = distance * Math.cos(theta);
      } else {
        x = (i % 10) * 1.2 - 6;
        y = Math.floor((i % 100) / 10) * 1.2 - 6;
        z = Math.floor(i / 100) * 1.2 - 6;
      }

      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count, randomDistribution]);

  // Animate each sphere on every frame
  useFrame((state) => {
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const x = initialPositions[i3] + Math.sin(time + i * 0.1) * 0.05;
      const y = initialPositions[i3 + 1] + Math.cos(time + i * 0.1) * 0.05;
      const z = initialPositions[i3 + 2] + Math.sin(time + i * 0.1) * 0.05;

      tempObject.position.set(x, y, z);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[0.01, 8, 8]} />
      <meshStandardMaterial color="#A855F7" />
    </instancedMesh>
  );
};

const Scene = () => (
  <Canvas camera={{ position: [0, 0, 3] }}>
    <ambientLight intensity={3} />
    <InstancedSpheres count={2000} randomDistribution={true} />
  </Canvas>
);

export default Scene;