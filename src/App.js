import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUsLayout from "./Components/AboutUsLayout/AboutUsLayout";
import { ProductsLayout } from "./Components/ProductsLayout/ProductsLayout";
import ContactLayout from "./Components/ContactLayout/ContactLayout";
import ContactThankYouLayout from "./Components/ContactThankYouLayout/ContactThankYouLayout";
import ContactFormLayout from "./Components/ContactFormLayout/ContactFormLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsLayout />} />
        <Route path="/products" element={<ProductsLayout />} />
        <Route path="/contact" element={<ContactLayout />} />
        <Route path="/thank-you" element={<ContactThankYouLayout />} />
        <Route path="/contact-form" element={<ContactFormLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
