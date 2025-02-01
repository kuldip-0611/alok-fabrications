import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Clients from "./Components/Clients/Clients";
import Footer from "./Components/Footer/Footer";
import CustomNavbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Hero />
        <About />
        <Clients />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
