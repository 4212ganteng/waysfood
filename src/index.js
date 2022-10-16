import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BensuMenus from "./pages/Partner/Bensu/Bensumenu";
import FormEdit from "./pages/EditProfile";
import Navbarwf from "./components/Navbarwf";
import Abc from "./pages/Cart";
import Profile from "./pages/Profile";
import ProfilePart from "./pages/Partner/Bensu/ProfilePart";
import Addinput from "./pages/Partner/Bensu/AddProduk";
import Income from "./pages/Partner/Bensu/Income";
import { CartreducerProvider } from "./usereducer/Cartreducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
function AppRouter() {
  return (
    <CartreducerProvider>
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
          <Route path="/income" element={<Income />} />
        </Routes>
      </Router>
    </CartreducerProvider>
  );
}

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// routing
// Home,Profile,EDIT profilr
