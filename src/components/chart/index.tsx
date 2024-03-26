import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#0296ff"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2, // Set width to 2 for spikes
    curve: "straight", // Use stepline for spikes
    lineCap: "round", // Round line caps for spikes
    fill: {
      type: "gradient", // Gradient fill
      gradient: {
        shade: "light", // Light gradient
        type: "vertical", // Vertical gradient
        shadeIntensity: 0.7, // Moderate shade intensity
        gradientToColors: ["#ffffff"], // Gradient to white
        opacityFrom: 0.85, // Starting opacity
        opacityTo: 0.15, // Ending opacity
        stops: [0, 100], // Gradient stops
      },
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true, // Hide all x-axis lines by default
      },
    },
    yaxis: {
      lines: {
        show: false, // Hide y-axis lines
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0, // Set size to 0 to remove markers
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    labels: {
      show: false, // Hide x-axis labels
    },
    axisBorder: {
      show: false, // Hide x-axis border
    },
    axisTicks: {
      show: false, // Hide x-axis ticks
    },
    tickAmount: 2, // Show ticks only for every 2nd point
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
    labels: {
      show: false, // Hide y-axis labels
    },
    axisBorder: {
      show: false, // Hide y-axis border
    },
    axisTicks: {
      show: false, // Hide y-axis ticks
    },
  },
};

const categories = [
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
];
interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const MyChart: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
    ],
  });

  const currentDate = new Date();
  const option = { day: "numeric", month: "short", year: "numeric" };
  //@ts-ignore
  const date = currentDate.toLocaleDateString("en-US", option);

  const today = `Today: ${date}`;



  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex">
            <h1>{today}</h1>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
             {"<"}
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
            {">"}
            </button>

          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="relative -ml-5">
          <div className="absolute top-[6] left-3 right-0 flex justify-between gap-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-sm font-semibold text-black"
                style={{ width: `${100 / categories.length}%` }}
              >
                <span>{category}</span>
              </div>
            ))}
          </div>
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={268}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default MyChart;
