import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Resume,
} from "./components";

// dynamic import of the named export from the components barrel
const StarsCanvas = lazy(() =>
  import("./components").then((mod) => ({ default: mod.StarsCanvas })),
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Resume />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
