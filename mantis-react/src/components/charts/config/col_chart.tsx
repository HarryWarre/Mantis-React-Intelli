import Highcharts, { Options } from "highcharts";
import exporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { Typography } from "@mui/material";

exporting(Highcharts);
const optionsChart: Options = {
  chart: {
    type: "column",
    height: "70%",
  },
  title: {
    text: "",
    align: "left",
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
      <Typography variant='body1' color={"gray"}>
        This Week Statitsics
      </Typography>
      <Typography variant='h4'>$7,650</Typography>
      <HighchartsReact highcharts={Highcharts} options={optionsChart} />
    </div>
  );
}
