import "./index.css";
import HomePage from "./assets/pages/HomePage.jsx";
import { Route, Routes } from "react-router";
import ProductPage from "./assets/pages/ProductPage.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import CategoryPage from "./assets/pages/CategoryPage.jsx";

function App() {
  return (
   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/inside/:id" element={<ProductPage />} />
      <Route path="/categories/:slug" element={<CategoryPage />} />
    </Routes>
   </>
  )
}

export default App