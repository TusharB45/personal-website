import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Navbar = lazy(() => import('./components/Navbar'));
const Works = lazy(() => import('./components/Works'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#915EFF]'>
        
        {/* Suspense fallback for loading state */}
        <Suspense fallback={<div>Loading...</div>}>
          
          {/* Hero section with Navbar */}
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          
          {/* Main content sections */}
          <About />
          <Experience />
          <Works />
          <Feedbacks />
          
          {/* Contact section with StarsCanvas */}
          

        </Suspense>
        
      </div>
      <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
    </BrowserRouter>
  );
}

export default App;
