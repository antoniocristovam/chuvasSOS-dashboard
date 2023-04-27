import { CardBody } from "reactstrap";
import Chart from "react-apexcharts";

const Dashboard = () => {
  const options = {
    series: [
      {
        data: [12, 98, 45, 45, 23, 56, 7, 45, 9, 34, 11, 12, 13],
      },
    ],
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <>
      <CardBody md={1}>
        <Chart options={options} series={options.series} type="bar" />
      </CardBody>
    </>
  );
};

export default Dashboard;
