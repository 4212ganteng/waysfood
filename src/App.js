import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";

import PopularResto from "./components/PopularResto";
import NearResto from "./components/NearResto";
import { useNavigate } from "react-router-dom";
// import Hero from "./testing/Hero";

function App() {
  document.title = " WAYS FOOD ";
  const abc = useNavigate();
  return (
    <div>
      <Hero />
      <PopularResto />
      <NearResto />
    </div>
  );
}

export default App;
