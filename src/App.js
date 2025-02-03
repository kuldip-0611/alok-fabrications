import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUsLayout from "./Components/AboutUsLayout/AboutUsLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
