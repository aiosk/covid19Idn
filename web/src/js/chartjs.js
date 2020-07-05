import _isUndefined from "lodash/isUndefined";
import _sum from "lodash/sum";
import _take from "lodash/take";
const Chart = require("chartjs");

Chart.plugins.register({
  beforeDraw: function(chartInstance) {
    var ctx = chartInstance.chart.ctx;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
  },
});

// http://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect
var image = new Image();
image.src = "img/watermark2.png";

const initChart = (params = { zone: null, data: null, legendOnClick: null }) => {
  const chartInstance = new Chart(`Chart_${params.zone}`, {
    type: "bar",
    data: params.data,
    options: {
      title: {
        display: true,
        text: params.zone.split("_").join(" "),
      },
      tooltips: {
        mode: "index",
        intersect: false,
        // filter: function(tooltipItem, data) {
        //   // console.log(
        //   //   data.datasets[tooltipItem.datasetIndex].label,
        //   //   data.datasets[tooltipItem.datasetIndex].type
        //   // );
        //   return _isUndefined(data.datasets[tooltipItem.datasetIndex].type);
        // },
        callbacks: {
          labelColor(tooltipItem, chart) {
            let datasetIndexVal =
              tooltipItem.datasetIndex % 2 ? tooltipItem.datasetIndex - 1 : tooltipItem.datasetIndex;
            return {
              // borderColor: "rgb(255, 0, 0)",
              backgroundColor: chart.data.datasets[datasetIndexVal].backgroundColor,
            };
          },
          label(tooltipItem, data) {
            let datasetIndexVal =
              tooltipItem.datasetIndex % 2 ? tooltipItem.datasetIndex - 1 : tooltipItem.datasetIndex;
            var label = data.datasets[datasetIndexVal].label || "";

            let value = data.datasets[datasetIndexVal].data[tooltipItem.index];
            let total = _sum(_take(data.datasets[datasetIndexVal].data, tooltipItem.index + 1));

            return `${label}: ${value}, Total ${label}: ${total}`;
          },
        },
      },
      legend: {
        onClick: params.legendOnClick,
      },
      scales: {
        // xAxes: [{ ticks: { display: MyFoundation.mqAtleast("medium") } }],
        // yAxes: [{ ticks: { display: MyFoundation.mqAtleast("medium") } }],
      },
      animation: { duration: 0 },
      hover: { animationDuration: 0 },
      responsiveAnimationDuration: 0,
      watermark: {
        // the image you would like to show
        // alternatively, this can be of type "Image"
        image: image,
        // x and y offsets of the image
        x: 0,
        y: 0,
        // width and height to resize the image to
        // image is not resized if these values are not set
        // width: 108,
        // height: 39,
        // opacity of the image, from 0 to 1 (default: 1)
        opacity: 1,
        // x-alignment of the image (default: "left")
        // valid values: "left", "middle", "right"
        alignX: "middle",
        // y-alignment of the image (default: "top")
        // valid values: "top", "middle", "bottom"
        alignY: "middle",
        // if true, aligns the watermark to the inside of the chart area (where the lines are)
        // (where the lines are)
        // if false, aligns the watermark to the inside of the canvas
        // see samples/alignToChartArea.html
        // alignToChartArea: false,
        // determines whether the watermark is drawn on top of or behind the chart
        // valid values: "front", "back"
        position: "front",
      },
    },
  });

  return chartInstance;
};

export { initChart };
