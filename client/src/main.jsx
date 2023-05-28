import React from "react";
import App from "./App";
import './index.css';
import ReactDOM from 'react-dom/client';

import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestnet}>
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
