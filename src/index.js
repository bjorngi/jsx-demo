import React from "react";
import ReactDOM from "react-dom/client";

const Hello = ({ toWhat }) =>
  React.createElement("div", null, `Hello ${toWhat}`);

const root = ReactDOM.createRoot(document.getElementById("app"));

// React.createElement(typeKompoment, { props }, children)
root.render(React.createElement(Hello, { toWhat: "skatteetaten" }, null));
