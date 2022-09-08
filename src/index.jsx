import React from "react";
import ReactDOM from "react-dom/client";

const Hello = ({ toWhat }) => {
  return (<div>Hallo {toWhat}</div>)
}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<Hello toWhat="Skatteetaten" />);
