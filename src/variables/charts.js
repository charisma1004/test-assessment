import { color } from "@chakra-ui/system";
import { BsBorderWidth } from "react-icons/bs";

export const barChartDataDailyTraffic = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

export const doubleChartOptions = {
  series: [{
    data: [445, 455, 410, 450, 260, 420, 460],
    color: "#232323",
   
  }, {
    data: [253, 232, 233, 152, 113, 244, 132],
    color: "#396AFF"
  }],
  options: {
    chart: {
      type: 'bar',
      height: 226
    },
  
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 15,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#232323']
      }
    },
    stroke: {
      show: true,
      width: 8,
      colors: ['#fff']
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed" , "Thu" , "Fri"],
    },
  },


}


export const pieChartOptions = {
  labels: ["Your files", "System", "Empty"],
  colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
  },
};

export const pieChartData = [63, 25, 12];

export const barChartDataWeeklyRevenue = [
  {
    name: "PRODUCT A",
    data: [400, 370, 330, 30, 0, 350, 360, 320, 380],
    color: "#6AD2Fa",
  },
  {
    name: "PRODUCT B",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#4318FF",
  },
  {
    name: "PRODUCT C",
    data: [400, 370, 330, 390, 30, 350, 360, 320, 380],
    color: "#EFF4FB",
  },
];

export const barchartvalues = [
  {
    name: "PRODUCT A",
    data: [400, 270, 330, 30, 250, 350, 360],
    color: "#232323",
  },
  {
    name: "PRODUCT C",
    data: ["Mon", 370, 330, 390, 30, 350, 360],
    color: "#EFF4FB",
  },
  
];
export const barchartvaluesGreen = [
  {
      name: "PRODUCT B",
      data: [400, 370, 330, 390, 320, 350, 360],
      color: "#396AFF",
  }
]

export const barChartOptionsWeeklyRevenue = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  // colors:['#ff3322','#faf']
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    theme: 'dark',
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
  },
  xaxis: {
    categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Th", "Fri"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

export const lineChartDataTotalSpent = [
  {
    name: "Revenue",
    data: [3, 55, 22, 66, 21, 68,22],
    color: "#4318FF",
  }
];

export const targetPointlist = {
  name : "Pointtarget",
  data: [500, 400, 300, 200, 100, 0],
  color : "#718EBF"
}

export const LineChartPointlist = {
  name : "Pointtarget",
  data: [500, 400, 300, 200, 100, 0],
  color : "#718EBF"
}
export const ballanceLineChartoption = {
  series: [{
    name: 'PRODUCT A',
    data: [100,600,250,343,800,590,770]
  }],
  options: {
    chart: {
      type: 'area',
      stacked: false,
      height: 1,
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [20, 100, 100, 100]
        },
    },
    yaxis: {
      labels: {
          style: {
              colors: '#8e8da4',
          },
          offsetX: 0,
          formatter: function(val) {
            return (val / 1000000).toFixed(2);
          },
      },
      axisBorder: {
          show: true,
      },
      axisTicks: {
          show: true
      }
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN"],
    },
  
    yaxis: {
      show: false,
    },
    // xaxis: {
    //   type: 'datetime',
    //   tickAmount: 8,
    //   min: new Date("01/01/2014").getTime(),
    //   max: new Date("01/20/2014").getTime(),
    //   labels: {
    //       rotate: -15,
    //       rotateAlways: true,
    //       formatter: function(val, timestamp) {
    //         return moment(new Date(timestamp)).format("DD MMM YYYY")
    //     }
    //   }
    // },
    // title: {
    //   text: 'Ballance History',
    //   align: 'left',
    //   offsetX: 22
    // },
    // tooltip: {
    //   shared: true
    // },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetX: -10
    }
  },

}

export const lineChartOptionsTotalSpent = {
  legend: {
    show: false,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    theme: 'dark',
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC" , "JAN"],
  },

  yaxis: {
    show: false,
  },
};
