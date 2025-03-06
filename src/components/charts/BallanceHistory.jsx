import React from "react";
import { ballanceLineChartoption } from "variables/charts";
import ReactApexChart from "react-apexcharts";
const BallanceHistory = (props) => {
    const {series, options} = props
    // const [state, setState] = React.useState({
      
    //     series: [{
    //       name: 'PRODUCT A',
    //       data: dataSet[0]
    //     }],
    //     options: {
    //       chart: {
    //         type: 'area',
    //         stacked: false,
    //         height: 350,
    //         zoom: {
    //           enabled: false
    //         },
    //       },
    //       dataLabels: {
    //         enabled: false
    //       },
    //       markers: {
    //         size: 0,
    //       },
    //       fill: {
    //         type: 'gradient',
    //         gradient: {
    //             shadeIntensity: 1,
    //             inverseColors: false,
    //             opacityFrom: 0.45,
    //             opacityTo: 0.05,
    //             stops: [20, 100, 100, 100]
    //           },
    //       },
    //       yaxis: {
    //         labels: {
    //             style: {
    //                 colors: '#8e8da4',
    //             },
    //             offsetX: 0,
    //             formatter: function(val) {
    //               return (val / 1000000).toFixed(2);
    //             },
    //         },
    //         axisBorder: {
    //             show: false,
    //         },
    //         axisTicks: {
    //             show: false
    //         }
    //       },
    //       xaxis: {
    //         type: 'datetime',
    //         tickAmount: 8,
    //         min: new Date("01/01/2014").getTime(),
    //         max: new Date("01/20/2014").getTime(),
    //         labels: {
    //             rotate: -15,
    //             rotateAlways: true,
    //             formatter: function(val, timestamp) {
    //               return moment(new Date(timestamp)).format("DD MMM YYYY")
    //           }
    //         }
    //       },
    //       title: {
    //         text: 'Irregular Data in Time Series',
    //         align: 'left',
    //         offsetX: 14
    //       },
    //       tooltip: {
    //         shared: true
    //       },
    //       legend: {
    //         position: 'top',
    //         horizontalAlign: 'right',
    //         offsetX: -10
    //       }
    //     },
      
      
    // });

    

    return (
      <div>
        {/* <div id="chart" >
            <ReactApexChart    xaxis = {ballanceLineChartoption.xaxis} options={ballanceLineChartoption.options} series={ballanceLineChartoption.series} type="area" height={350} />
          </div> */}
          <div id="chart" >
            <ReactApexChart    xaxis = {ballanceLineChartoption.xaxis} options={props.options} series={props.series} type="area" height={264} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }
export default BallanceHistory;
