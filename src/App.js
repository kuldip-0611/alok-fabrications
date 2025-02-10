import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUsLayout from "./Components/AboutUsLayout/AboutUsLayout";
import {ProductsLayout} from './Components/ProductsLayout/ProductsLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsLayout />} />
        <Route path="/products" element={<ProductsLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
