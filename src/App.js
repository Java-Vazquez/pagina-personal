import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#0a192f]">
      <Navbar/>
      <main id="main-content">
        <Home/>
        <About/>
        <Experience/>
        <Skills/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
