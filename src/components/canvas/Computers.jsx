import React, { Suspense, useEffect, useState, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";

import CanvasLoader from "../Loader";

// Create a single DRACOLoader instance (reused across component instances)
let dracoLoaderInstance = null;
const getDracoLoader = () => {
  if (!dracoLoaderInstance) {
    dracoLoaderInstance = new DRACOLoader().setDecoderPath("/draco/");
    // Preload the DRACO decoder files
    dracoLoaderInstance.preload();
  }
  return dracoLoaderInstance;
};

// Preload with aggressive caching
const modelUrl = "/desktop_pc/scene_draco.glb";
useGLTF.preload(modelUrl, (loader) => {
  loader.setDRACOLoader(getDracoLoader());
});

// Cache for decompressed models
const modelCache = new Map();

const Computers = React.memo(({ isMobile }) => {
  const computer = useGLTF(modelUrl, true, (loader) => {
    loader.setDRACOLoader(getDracoLoader());
  });

  // Deferred geometry optimization - non-blocking on mobile
  useMemo(() => {
    if (!computer || !computer.scene || modelCache.has(modelUrl)) return;

    const optimize = () => {
      const startTime = performance.now();

      computer.scene.traverse((child) => {
        // Skip already processed nodes
        if (child.__optimized) return;

        if (child.isMesh && child.geometry) {
          const geo = child.geometry;

          // On mobile: skip expensive operations
          if (!isMobile) {
            // Only delete attributes on desktop (has more memory)
            const attribsToDelete = [
              "uv2",
              "tangent",
              "skinIndex",
              "skinWeight",
            ];
            attribsToDelete.forEach((attr) => {
              if (geo.attributes[attr]) {
                delete geo.attributes[attr];
              }
            });
          }

          // Fast shading check - no computation needed
          if (!geo.attributes.normal && geo.attributes.position) {
            child.material.flatShading = true;
          } else if (geo.attributes.normal) {
            child.material.flatShading = false;
          }

          // Patch NaN vertices in a single pass
          if (geo.attributes.position && !geo.__nanPatched) {
            const pos = geo.attributes.position;
            const array = pos.array;

            for (let i = 0; i < array.length; i += 3) {
              if (
                isNaN(array[i]) ||
                isNaN(array[i + 1]) ||
                isNaN(array[i + 2])
              ) {
                array[i] = array[i + 1] = array[i + 2] = 0;
              }
            }
            pos.needsUpdate = true;
            geo.computeBoundingSphere();
            geo.__nanPatched = true;
          }

          // Geometry settings for performance
          child.frustumCulled = true;
          child.castShadow = false;
          child.receiveShadow = false;
          if (geo.isBufferGeometry) {
            geo.dynamic = false;
          }

          child.__optimized = true;
        }
      });

      // Cache the optimized model
      modelCache.set(modelUrl, true);

      const elapsed = performance.now() - startTime;
      if (elapsed > 50) {
        console.warn(`⚠️ Geometry optimization took ${elapsed.toFixed(2)}ms`);
      }
    };

    // On mobile: defer optimization to avoid blocking
    // On desktop: run immediately
    if (isMobile) {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(optimize, { timeout: 2000 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(optimize, 100);
      }
    } else {
      optimize();
    }
  }, [computer, isMobile]);

  return (
    <group>
      {/* Minimal optimized lighting - fast and visible */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-20, 40, 10]}
        intensity={0.8}
        castShadow={false}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Adaptive DPR based on device capability
  const getDPR = () => {
    if (isMobile) {
      // Mobile: aggressive optimization
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
        return 0.5; // Very low for weak mobile devices
      }
      return 0.75; // Conservative for most mobile
    }

    // Desktop
    if (!navigator.hardwareConcurrency) return 1.2;
    if (navigator.hardwareConcurrency <= 2) return 0.75;
    if (navigator.hardwareConcurrency <= 4) return 1;
    return 1.2;
  };

  return (
    <Canvas
      ref={canvasRef}
      frameloop="demand"
      dpr={getDPR()}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        precision: "lowp",
        alpha: true,
        stencil: false,
        depth: true,
        logarithmicDepthBuffer: false,
        failIfMajorPerformanceCaveat: true,
        preserveDrawingBuffer: false,
        toneMappingExposure: 1,
      }}
      camera={{ position: [20, 3, 5], fov: 25, far: 1000, near: 0.1 }}
      performance={{ min: isMobile ? 0.3 : 0.5, max: isMobile ? 0.6 : 0.8 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          autoRotate={false}
          enableRotate={isMobile ? false : true}
          autoRotateSpeed={0}
          rotateSpeed={0.5}
          dampingFactor={0.05}
          enableDamping={!isMobile} // Disable damping on mobile (CPU intensive)
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
