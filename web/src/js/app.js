import delay from "lodash/delay";
import isUndefined from "lodash/isUndefined";
import cloneDeep from "lodash/cloneDeep";
import National from "./libs/national.js";
const { getFile: getFileNational } = National;
import Prov from "./libs/prov.js";
const {
  provinces,
  getFile: getFileProv,
  initChartHtml: initChartHtmlProv,
} = Prov;
import ChartLibs from "./libs/chart.js";
const { data: dataDefault, parseCases: parseCases } = ChartLibs;
import File from "./libs/file.js";
const { chunkByDays } = File;

let periods = 7;
const $slider = document.querySelector("form input[type='range']");

// console.log(Foundation.MediaQuery.atLeast("large"));
// if (Foundation.MediaQuery.atLeast("large")) {
//   periods = 7;
//   $slider.value = 7;
// }

const onSliderReleaseUpdateLabel = (e) => {
  let { value, id } = e.target;
  periods = value;
  document.querySelector(`#periodsValue`).innerHTML = value;
  initCanvasViewport.forEach((v) => {
    updateChart(v);
  });
};
$slider.addEventListener("input", onSliderReleaseUpdateLabel);
$slider.addEventListener("change", onSliderReleaseUpdateLabel);

initChartHtmlProv(document.querySelector("#myChart.grid-x"), provinces);
let lazyLoad;
delay(() => {
  lazyLoad = new LazyLoad({
    elements_selector: "canvas",
    // unobserve_entered: true,
    callback_enter: onCanvasEnterViewport,
    callback_exit: logEl,
    callback_loading: logEl,
    callback_loaded: logEl,
  });
}, 9);
const logEl = (el) => {
  // myChart[el.id].destroy();
  // console.log(myChart[el.id]);
  console.log(el);
};

const elId2dataId = (elId) => elId.split("_").slice(1).join("_");

const $cellChart = document.querySelectorAll("#myChart.grid-x .cell");
$cellChart.forEach((v) => {
  v.addEventListener("click", (e) => {
    let $this = e.target.closest(".cell");
    let $thisCanvas = $this.querySelector("canvas");

    let chartId = $thisCanvas.id;

    if ($this.style.width == "100%") {
      $this.style.width = "";
    } else {
      $this.style.width = "100%";
    }

    myChart[chartId].resize();
  });
});

let myChart = {};
let myChartData = {};
let myChartDataDefault = { datasets: [], labels: [] };

/* init dataDefault myChartDataDefault */
let dataAll = {};
dataAll["National"] = cloneDeep(dataDefault);
myChartData["Chart_National"] = cloneDeep(myChartDataDefault);
provinces.forEach((v) => {
  dataAll[v] = cloneDeep(dataDefault);
  myChartData[`Chart_${v}`] = cloneDeep(myChartDataDefault);
});

/* wait fetch file */
let initCanvasViewport = [];
(async () => {
  const dataNational = await getFileNational();
  dataAll["National"] = dataNational;

  const dataProv = await getFileProv();
  provinces.forEach((v) => {
    dataAll[v] = dataProv[v];
  });

  initCanvasViewport.forEach((v) => {
    updateChart(v);
  });
})();

const updateChart = (elementId) => {
  const dataId = elId2dataId(elementId);

  const dataChunk = chunkByDays(dataAll[dataId], periods);
  const parsedData = parseCases(dataChunk);
  myChartData[elementId].labels = parsedData.labels;
  myChartData[elementId].datasets = parsedData.datasets;
  // myChartData[elementId] = parsedData;
  myChart[elementId].options.title.text = dataId
    .split("_")
    .join(" ")
    .toUpperCase();
  myChart[elementId].update();
};

const onCanvasEnterViewport = (el) => {
  // console.log("enter", el);
  if (isUndefined(myChart[el.id])) {
    initCanvasViewport.push(el.id);
    // console.log(el.id, myChartData[el.id]);
    myChart[el.id] = new Chart(el.id, {
      type: "bar",
      data: myChartData[el.id],
      options: {
        title: {
          display: true,
          text: "...",
        },
        tooltips: {
          filter: function (tooltipItem) {
            return [2, 4].indexOf(tooltipItem.datasetIndex) === -1;
          },
        },
        animation: {
          duration: 0,
        },
        hover: {
          animationDuration: 0,
        },
        responsiveAnimationDuration: 0,
      },
    });
  }
  delay(() => {
    updateChart(el.id);
  }, 9);
};

// $(document).foundation();