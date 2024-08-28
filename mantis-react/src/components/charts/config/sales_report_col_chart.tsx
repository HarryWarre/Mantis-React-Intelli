import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import { Options } from "highcharts";

// Not change style of legend

exporting(Highcharts);

const optionsChart: Options = {
  chart: {
    type: "column",
    // height: "70%",
  },
  title: {
    text: "Net Profit",
    align: "left",
    style: { color: "#bababa", fontWeight: "lighter", fontSize: "15px" },
  },
  subtitle: {
    text: "$1560",
    align: "left",
    style: { color: "#000000", fontSize: "25px", fontWeight: "bold" },
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    crosshair: true,
    accessibility: {
      description: "Days",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
  },
  tooltip: {
    formatter: function () {
      return (
        this.x +
        "</br>" +
        this.point.series.name +
        ": <b> $ " +
        this.y +
        " thousand</b>"
      );
    },
  },
  plotOptions: {
    column: {
      pointPadding: 0.4, //Change width of cols
      borderWidth: 0,
      groupPadding: 0.3, // Change gap between 2 col
    },
  },
  exporting: {
    enabled: false, // Unable button export default
  },
  legend: {
    align: "right",
    verticalAlign: "top",
    // Not style legend
  },
  series: [
    {
      type: "column",
      name: "Income",
      color: "#FBCEB1", // Color column
      data: [80, 95, 100, 85, 70, 95],
    },
    {
      type: "column",
      name: "Cost of sales",
      color: "#2a69e8",
      data: [88, 100, 203, 391, 132, 39],
    },
  ],
};

export default function SalesReportChart() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsChart} />
    </div>
  );
}
