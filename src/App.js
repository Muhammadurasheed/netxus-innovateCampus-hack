import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;