import React from "react";
import { render } from "react-dom";
import CurrenciesExchange from "./view/CurrenciesExchange";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CurrenciesExchange></CurrenciesExchange>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
