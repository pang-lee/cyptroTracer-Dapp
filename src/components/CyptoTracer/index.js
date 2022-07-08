import React from "react";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";

const CyptoTracer = () => {
  return (
    <div>
      <CryptoContext>
        <App />
      </CryptoContext>
    </div>
  );
};

export default CyptoTracer;
