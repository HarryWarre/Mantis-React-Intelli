import Highcharts, { Options } from "highcharts";
import exporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

exporting(Highcharts);
const optionsChart: Options = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: "",
    align: "left",
  },

  xAxis: {
    allowDecimals: true,
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
    accessibility: {
      description: "Months of the year",
    },
  },
  yAxis: {
    title: {
      useHTML: true,
      text: "",
    },
  },
  tooltip: {
    shared: true,
    headerFormat:
      '<span style="font-size:12px"><b>{point.key}</b></span>' + "<br>",
  },
  plotOptions: {
    series: {
      pointStart: 1,
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    areaspline: {
      fillOpacity: 0.3,
    },
    area: {
      opacity: 1,
      stacking: "normal",
      // lineColor: "#666666",
      lineWidth: 1,
    },
  },
  exporting: {
    enabled: false,
  },

  series: [
    {
      type: "areaspline",
      name: "Page View",
      color: "#3633e8",
      data: [
        13234, 12729, 11533, 6389, 10398, 5040, 15483, 16196, 4988, 13365,
        13301,
      ],
    },
    {
      type: "areaspline",
      name: "Session",
      color: "#7598ff",
      data: [
        6686, 6536, 6389, 17998, 6251, 5719, 5611, 5040, 16196, 5088, 4988,
      ],
    },
  ],
};
export default function AreaChart() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsChart} />
    </div>
  );
}
