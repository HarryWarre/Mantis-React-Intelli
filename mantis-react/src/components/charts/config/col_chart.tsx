import Highcharts, { Options } from "highcharts";
import exporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { Typography } from "@mui/material";

exporting(Highcharts);
const optionsChart: Options = {
  chart: {
    type: "column",
    height: "94%",
    events: {
      load: function () {
        const chart = this,
          gap = 40;

        chart.setTitle(
          {},
          {
            y: chart.title.getBBox().height + gap,
          }
        );
      },
    },
  },
  title: {
    text: "This week statistics",
    align: "left",

    style: { color: "#bababa", fontWeight: "lighter", fontSize: "15px" },
  },
  subtitle: {
    text: "$7,650",
    align: "left",
    style: {
      color: "#000000",
      fontSize: "25px",
      fontWeight: "bold",
    },
  },
  xAxis: {
    categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    crosshair: true,
    accessibility: {
      description: "Days",
    },
  },
  yAxis: {
    visible: false,
    min: 0,
    title: {
      text: "",
    },
  },
  // tooltip: {
  //   valueSuffix: " (1000 MT)",
  // },
  plotOptions: {
    column: {
      pointPadding: 0.25,
      borderWidth: 0,
    },
  },
  exporting: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: "column",
      color: "#4dfae6",
      data: [80, 95, 100, 85, 70, 95],
    },
  ],
};
export default function ColChart() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsChart} />
    </div>
  );
}
