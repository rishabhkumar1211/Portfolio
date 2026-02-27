import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import CanvasLoader from "../Loader";

// create DRACOLoader instance and preload compressed model
const dracoLoader = new DRACOLoader().setDecoderPath("/draco/");
useGLTF.preload("/planet/scene_draco.glb");
const Earth = () => {
  // load Draco-compressed .glb for smaller payload
  const earth = useGLTF("./planet/scene_draco.glb", true, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  // sanitize NaN in geometry attributes (occasionally models contain invalid floats)
  React.useEffect(() => {
    if (!earth || !earth.scene) return;
    earth.scene.traverse((child) => {
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
            array[i] = array[i + 1] = array[i + 2] = 0;
            patched = true;
          }
        }
        if (patched) {
          pos.needsUpdate = true;
          child.geometry.computeBoundingSphere();
          console.warn("patched NaN vertices on earth mesh", child.name);
        }
      }
    });
  }, [earth]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
