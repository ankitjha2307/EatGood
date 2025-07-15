import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">Ankit Jha by Jsx</h1>;

const Heading = () => {
  return <h1> Namste react Functional component </h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
