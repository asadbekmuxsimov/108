import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Inside from './assets/pages/Inside.jsx';
import Navbar from './assets/pages/Navbar.jsx';
import NavbarCard from './assets/pages/NavbarCard.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/inside/:id" element={<Inside />} />
    <Route path="/categories/:slug" element={<NavbarCard />} />
    </Routes>
</BrowserRouter>
)
