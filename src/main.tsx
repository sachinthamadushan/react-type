import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Settings from "./pages/setting/Setting.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
