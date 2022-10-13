import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarwf from "./components/Navbarwf";
import Hero from "./components/Hero";
import PopularResto from "./components/PopularResto";
import NearResto from "./components/NearResto";
import Income from "./components/Income";
import Bensudb from "./components/Bensudb";
import CartBensu from "./components/CartBensu";
import Modalawal from "./components/Modalawal";
import FormEdit from "./components/FormEdit";
import { useNavigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Tesa from "./pages/Order";
import Abc from "./pages/Abc";
import KompBtn from "./components/KompBtn ";

function App() {
  const abc = useNavigate();
  return (
    <div>
      <Hero />
      <PopularResto />
      <NearResto />
      <Bensudb />
      <CartBensu />
      <Profile />
      <Profile
        title="Profile Partner"
        names="Name Partner"
        nama1="Geprek bensu"
        email="bensu@gmail.com"
        namep="Andi"
      />
      <Modalawal />
      <FormEdit />
      <Tesa />
      <h2>
        p<button onClick={() => abc("/signin")}>ppp</button>
      </h2>
      <Income />
      <p>----------------</p>
      <div className="container">
        <Abc />

        <KompBtn name="abc" style={{ backgroundColor: "red" }} />
      </div>
    </div>
  );
}

export default App;
