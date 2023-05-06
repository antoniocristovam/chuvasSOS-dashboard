import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./Routes/router";
import DataTable from "react-data-table-component";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/chuva")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  console.log(data);
  const columns = [
    {
      name: "Cidade",
      selector: (row) => row.title,
    },
    {
      name: "Inde chuva",
      selector: (row) => row.year,
    },
  ];

  const dataTable = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
  ];

  return (
    <BrowserRouter>
      {/* {console.log(data.locals)} */}

      {/* <p>{data.locals[7]}</p> */}

      <DataTable columns={columns} data={dataTable} />
      {/* <div> */}
      {/* {typeof data.locals === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.locals.map((locals, i) => (
          <p key={i}>Quantidade de chuva em recife:{locals}</p>
        ))
      )} */}
      {/* </div> */}
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;