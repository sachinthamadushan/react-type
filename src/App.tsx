import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {NavBar} from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Settings } from "./pages/setting/Setting";
import { ProductPage } from "./pages/Product";
import { SalesPage } from "./pages/Sales";
function App() {
  return (
    <BrowserRouter>
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
