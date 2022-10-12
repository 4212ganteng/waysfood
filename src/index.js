import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import BensuMenus from "./pages/BensuMenus";
import FormEdit from "./components/FormEdit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/bensu-menus" element={<BensuMenus />} />
        <Route path="/edit-profile" element={<FormEdit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// routing
// Home,Profile,EDIT profilr
