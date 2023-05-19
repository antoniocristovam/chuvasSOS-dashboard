import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./presentation/app/components/Header";
import Router from "./Routes/router";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Router/>
    </BrowserRouter>
  );
}

export default App;
