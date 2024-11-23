import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import ReactGA from 'react-ga';
import React, {useEffect} from 'react'

function App() {
  useEffect(() => {
    ReactGA.initialize('G-38YFPFRJLR');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
