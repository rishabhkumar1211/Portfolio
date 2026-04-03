import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

let dracoLoader = null;

// Initialize DRACO loader
self.onmessage = (event) => {
  const { type, data } = event.data;

  if (type === "INIT") {
    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(data.decoderPath);
    self.postMessage({ type: "READY" });
  } else if (type === "DECOMPRESS") {
    try {
      if (!dracoLoader) {
        self.postMessage({ type: "ERROR", error: "Loader not initialized" });
        return;
      }

      // Decompress the geometry
      dracoLoader.decodeDracoFile(data.geometry, (geometry) => {
        self.postMessage({
          type: "GEOMETRY_DECOMPRESSED",
          id: data.id,
          geometry: geometry,
        });
      });
    } catch (error) {
      self.postMessage({
        type: "ERROR",
        id: data.id,
        error: error.message,
      });
    }
  }
};
