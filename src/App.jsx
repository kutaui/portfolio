import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Projects } from "./components/Projects.jsx";
import "./App.css";
import { About } from "./components/About.jsx";
import { useState } from "react";
function App(props) {
  const [aboutRef, setAboutRef] = useState();
  function handleRefUpdate(ref) {
    setAboutRef(ref.current);
  }

  return (
    <>
      <Header />
      <Hero aboutRef={aboutRef} />
      <Projects />
      <About onRefUpdate={handleRefUpdate} />
    </>
  );
}

export default App;
