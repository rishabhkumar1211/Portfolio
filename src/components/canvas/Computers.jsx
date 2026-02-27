import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import CanvasLoader from "../Loader";

// create a DRACOLoader instance with decoder path
const dracoLoader = new DRACOLoader().setDecoderPath("/draco/");

// preload the model -- note: callback is optional here
useGLTF.preload("/desktop_pc/scene_draco.glb");

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene_draco.glb", true, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  React.useEffect(() => {
    if (!computer || !computer.scene) return;
    computer.scene.traverse((child) => {
      if (
        child.isMesh &&
        child.geometry &&
        child.geometry.attributes.position
      ) {
        const pos = child.geometry.attributes.position;
        const array = pos.array;
        let patched = false;
        for (let i = 0; i < array.length; i += 3) {
          if (isNaN(array[i]) || isNaN(array[i + 1]) || isNaN(array[i + 2])) {
            // zero out the offending vertex
            array[i] = array[i + 1] = array[i + 2] = 0;
            patched = true;
          }
        }
        if (patched) {
          pos.needsUpdate = true;
          child.geometry.computeBoundingSphere();
          console.warn("patched NaN vertices on mesh", child.name);
        }
      }
    });
  }, [computer]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 40, 10]} angle={0.2} penumbra={0.7} intensity={0.7} />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.25]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
