import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarwf from "./components/Navbarwf";
import Hero from "./components/Hero";
import PopularResto from "./components/PopularResto";
import NearResto from "./components/NearResto";
import Income from "./components/Income";
import Bensudb from "./components/Bensudb";
import CartBensu from "./components/CartBensu";
import Profile from "./components/Profile";
import Modalawal from "./components/Modalawal";
import Cart from "./pages/Cart";
import FormEdit from "./components/FormEdit";
import { useNavigate } from "react-router-dom";

function App() {
  const abc = useNavigate();
  return (
    <div>
      <Navbarwf />
      <Hero />
      <PopularResto />
      <NearResto />
      <Bensudb />
      <CartBensu />
      <Profile />
      <Modalawal />
      <FormEdit />
      <Cart />
      <h2>
        p<button onClick={() => abc("/signin")}>ppp</button>
      </h2>
      <Income />
    </div>
  );
}

export default App;
