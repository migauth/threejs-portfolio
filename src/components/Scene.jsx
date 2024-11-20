/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// purple color "#A855F7"

const InstancedSpheres = ({ count, radius }) => {
  const meshRef = useRef();
  const tempObject = new THREE.Object3D();

  // Calculate initial positions for each sphere
  const initialPositions = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      // Generate positions within the sphere based on the radius
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count, radius]);

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
      <sphereGeometry args={[0.004, 20, 20]} />
      <meshStandardMaterial color="#A855F7" />
    </instancedMesh>
  );
};

const Scene = () => {
  const [radius, setRadius] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust the radius of the containing sphere based on screen size
      if (width < 768) {
        setRadius(0.5);
      } else if (width < 1024) {
        setRadius(0.75);
      } else {
        setRadius(1);
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={3} />
      <InstancedSpheres count={2000} radius={radius} />
    </Canvas>
  );
};

export default Scene;
