import { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import Head from "../models/Head";

const Layout = ({ children }) => {
  const [headProps, setHeadProps] = useState({
    screenScale: [10, 10, 10],
    screenPosition: [0, 0.5, 0],
    rotation: [0, 3.14, 0],
  });

  const adjustHeadForScreenSize = useCallback(() => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    let scale;

    if (window.innerWidth < 768) {
      scale = aspectRatio < 1 ? [1, 1, 1] : [2, 2, 2];
    } else {
      scale = [2, 2, 2];
    }

    setHeadProps((prev) => ({
      ...prev,
      screenScale: scale,
      screenPosition: [0, 0.5, 0], // Ensure the head is at the center
    }));
  }, []);

  const MouseTracker = () => {
    const onMouseMove = useCallback(({ clientX, clientY }) => {
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 3 - 1;
      
      const rotationY = Math.atan2(x, 3) * 0.5;
      const rotationX = Math.atan2(y, 3) * 0.5;
      
      setHeadProps((prev) => ({
        ...prev,
        rotation: [rotationX, 3.14 + rotationY, 0]
      }));
    }, []);

    useEffect(() => {
      window.addEventListener('mousemove', onMouseMove);
      return () => window.removeEventListener('mousemove', onMouseMove);
    }, [onMouseMove]);

    return null;
  };

  useEffect(() => {
    adjustHeadForScreenSize();
    window.addEventListener("resize", adjustHeadForScreenSize);
    return () => window.removeEventListener("resize", adjustHeadForScreenSize);
  }, [adjustHeadForScreenSize]);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <main>{children}</main>
      </div>
      <div className="absolute inset-0 z-10">
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 0, 5], fov: 50, near: 1, far: 1000 }}
        >
          <Suspense fallback={null}>
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <ambientLight intensity={0.5} />
            <Head
              scale={headProps.screenScale}
              position={headProps.screenPosition}
              rotation={headProps.rotation}
            />
            <MouseTracker />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Layout;
