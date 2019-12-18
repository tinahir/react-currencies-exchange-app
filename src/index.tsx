import React from "react";
import { render } from "react-dom";
import CurrenciesExchange from "./view/CurrenciesExchange";

import "./styles.css";

const options = [
  {
    label: 'United States',
    value: 'US'
  },
  {
    label: 'Germany',
    value: 'DE'
  },
  {
    label: 'France',
    value: 'FR'
  }
];

function App() {

  return (
    <div className="App">
      <CurrenciesExchange></CurrenciesExchange>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
