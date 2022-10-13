import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import BensuMenus from "./pages/BensuMenus";
import FormEdit from "./components/FormEdit";
import Navbarwf from "./components/Navbarwf";
import Abc from "./pages/Abc";
import Profile from "./pages/Profile";
import ProfilePart from "./pages/ProfilePart";
import Addinput from "./pages/Addinput";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbarwf />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bensu-menus" element={<BensuMenus />} />
        <Route path="/cart" element={<Abc />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-partner" element={<ProfilePart />} />
        <Route path="/edit-profile" element={<FormEdit />} />
        <Route path="/add-product" element={<Addinput />} />
        <Route path="/edit-profile" element={<FormEdit />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// routing
// Home,Profile,EDIT profilr
