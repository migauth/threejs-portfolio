/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";


function Name( {color} ) {
  const gltf = useLoader(GLTFLoader, "/models/thank-you.glb");
  const ref = useRef();

  // Circular rotation
  useFrame((_, delta) => {
    ref.current.rotation.z += 1 * delta;
  });

  useEffect(() => {
    // Traverse the model and update the material color
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        // Ensure the mesh has a material
        child.material = new THREE.MeshStandardMaterial({ color });
      }
    });
  }, [gltf, color]);

  const [size, setSize] = useState([0.3, 0.3, 0.3]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust the scale of font
      if (width < 768) {
        setSize([0.15, 0.15, 0.15]);
      } else if (width < 1024) {
        setSize([0.25, 0.25, 0.25]);
      } else {
        setSize([0.3, 0.3, 0.3]);
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      scale={size}
      rotation={[Math.PI / 2, 0, 0]}
      ref={ref}
    />
  );
}

export default function Contact() {
  

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-between pt-20 text-8xl"
    >
      <div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/michael-gauthier-a502b799/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="about-icon text-purple-200 hover:text-white"
            />
          </a>
          <a href="mailto:mikegauthier222@hotmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="about-icon text-purple-200 hover:text-white"
            />
          </a>
        </div>
        <p className="pt-4 text-2xl sm:text-3xl">
          For collaboration or general inquiries, please reach out by email or
          LinkedIn!
        </p>
        <div className="flex flex-row w-full sm:w-4/5">
          <Canvas camera={{ position: [0, 0, 3], fov: 15 }}>
            <ambientLight intensity={3} color={"#ffffff"}/>
            <pointLight intensity={2} />
            <Name color="#A855F7"/>
          </Canvas>
        </div>
      </div>
      <small className="text-xl pb-4">© 2024 Michael Gauthier</small>
    </div>
  );
}
