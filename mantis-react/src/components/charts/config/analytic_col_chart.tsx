import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import { Options } from "highcharts";

exporting(Highcharts);

const optionsChart: Options = {
  chart: {
    // plotBackgroundColor: null,
    // plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  exporting: {
    enabled: false,
  },
  title: {
    text: "",
    align: "left",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      type: "pie",
      name: "Brands",

      // colorByPoint: true,
      data: [
        {
          name: "Keyboard",
          y: 70,
          sliced: true,
          selected: true,
        },
        {
          name: "Charge",
          y: 14,
        },
        {
          name: "Mouse",
          y: 45,
        },
      ],
    },
  ],
};

export default function AnalyticsColChart() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={optionsChart} />
    </div>
  );
}
