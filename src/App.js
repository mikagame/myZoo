import React from "react";
import Site from "./containers/Site";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Site />
      </BrowserRouter>
    </div>
  );
};

export default App;
