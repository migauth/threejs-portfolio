import { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import Head from "../models/Head";

const Layout = ({ children }) => {
  const [headProps, setHeadProps] = useState({
    screenScale: [5, 5, 5],
    screenPosition: [0, 2, -10],
    rotation: [0, 3.14, 0]
  });

  const adjustHeadForScreenSize = () => {
    if (window.innerWidth < 768) {
      setHeadProps(prev => ({ ...prev, screenScale: [3, 3, 3], screenPosition: [0, 1, -10] }));
    } else {
      setHeadProps(prev => ({ ...prev, screenScale: [5, 5, 5], screenPosition: [0, 2, -10] }));
    }
  };

  const MouseTracker = () => {
    const onMouseMove = useCallback(({ clientX, clientY }) => {
      const x = (clientX / window.innerWidth) * 2 - 1;
      const y = (clientY / window.innerHeight) * 3 - 1;
      
      const rotationY = Math.atan2(x, 3) * 0.5;
      const rotationX = Math.atan2(y, 3) * 0.5;
      
      setHeadProps(prev => ({
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
    window.addEventListener('resize', adjustHeadForScreenSize);
    return () => window.removeEventListener('resize', adjustHeadForScreenSize);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Canvas
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        camera={{ position: [0, 0, 0], fov: 50, near: 0.1, far: 1000 }}
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
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
