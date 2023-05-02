import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Routes/router";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/chuva")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <BrowserRouter>
      {/* <div> */}
      {typeof data.chuva === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.chuva.map((chuva, i) => (
          <p key={i}>Quantidade de chuva em recife:{chuva}</p>
        ))
      )}
      {/* </div> */}
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
