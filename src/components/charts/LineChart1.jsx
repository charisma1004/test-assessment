import Chart from "react-apexcharts";

const LineChart1 = (props) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="line"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default LineChart1;
