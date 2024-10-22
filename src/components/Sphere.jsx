/* eslint-disable react/no-unknown-property */
import { useRef, useFrame } from "react";

export default function Sphere(props) {

  const ref = useRef();

  useFrame((_, delta) => {
    ref.current.rotation.y += 1 * delta;
  });

  return (
    <>
      <mesh {...props} ref={ref}>
        <sphereGeometry args={[1, 20, 20]} />
        <meshStandardMaterial color="lime" wireframe/>
      </mesh>
    </>
  );
}
