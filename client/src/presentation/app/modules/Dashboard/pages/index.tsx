import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Container } from "reactstrap";

interface chuva {
  local: string;
  date_time: string;
  last_24hours: string;
}

const Dashboard = () => {
  const [data, setData] = useState(Array<chuva>);

  useEffect(() => {
    fetch("http://localhost:5000/rain/rainfalls")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const local_array = data.map((e) => e.local);
  const formatValues = (data: Array<chuva>) => {
    return data.map((e) =>
      parseFloat(e.last_24hours.split("m")[0].replace(",", "."))
    );
  };

  const chuvaMm = formatValues(data);

  const arrayData: ApexOptions = {
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: chuvaMm,
      },
    ],

    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Chuva em tempo real",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: local_array,
    xaxis: {
      type: "category",
    },
    yaxis: [],
  };

  return (
    <>
      <Container className="pt-4 ">
        <h1 className="text-center">MONITORAMENTO DE CHUVA EM TEMPO REAL</h1>
        <div id="chart">
          <ReactApexChart
            options={arrayData}
            series={arrayData.series}
            type="bar"
            height={350}
          />
        </div>
      </Container>
      <Container className="pt-4 ">
        <h1 className="text-center">
          {" "}
          LOCAIS QUE MAIS CHOVEU NAS ULTIMAS 24 HORAS
        </h1>
        <div>
          <ReactApexChart
            options={arrayData}
            series={arrayData.series}
            type="bar"
            height={350}
          />
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
