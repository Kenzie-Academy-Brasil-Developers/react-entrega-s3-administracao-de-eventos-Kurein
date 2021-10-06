import "./App.css";
import Buttons from "./components/Buttons";
import Routes from "./Routes";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [beersList, setBeersList] = useState([]);

  const getBeers = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setBeersList(response.data));
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="App">
      <Buttons />
      <Routes beersList={beersList} />
    </div>
  );
}

export default App;
