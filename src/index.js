import React from "react";
import { createRoot } from "react-dom/client";
import Heading from "./Heading.jsx";
import List from "./list.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Heading />
    <List />
  </div>
);
