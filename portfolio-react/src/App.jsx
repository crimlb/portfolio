import "./App.css";
import CursorGlow from "./components/CursorGlow";
import NavbarPortfolio from "./components/NavbarPortfolio";
import Hero from "./components/Hero";
import ChiSono from './components/ChiSono';
import ProjectsParallax from './components/projects/ProjectsParallax';
import Contact from './components/Contact';
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <CursorGlow />
      <NavbarPortfolio />
      <Hero />
      <ChiSono />
      <ProjectsParallax />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
