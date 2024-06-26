"use client";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { mockData } from "@/utils";

import dynamic from "next/dynamic";

const MyChart = dynamic(() => import("@/components/chart"), {
  ssr: false,
});

const ProgressCard = dynamic(() => import("@/components/card"), {
  ssr: false,
});
const ProductTable = dynamic(() => import("@/components/table"), {
  ssr: false,
});

const Dashboard = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      //This code is executed in the browser
      console.log(window.innerWidth);
    }
  }, []);
  return (
    <>
      <GradientChart />
      <div className="block md:flex items-center mt-5 gap-2">
        <div className="md:w-[60%]">
          <MyChart />
        </div>
        <div className=" w-full md:w-[40%]">
          <ProgressCard />
        </div>
      </div>
      <div>
        <ProductTable productData={mockData} />
      </div>
    </>
  );
};

export default Dashboard;

interface CardData {
  title: string;
  value: number;
  chartData: { name: string; value: number }[];
}

const cardData: CardData[] = [
  {
    title: "Daily Transaction Volume",
    value: 2342,
    chartData: [
      { name: "Day 1", value: 2342 },
      { name: "Day 2", value: 2500 },
      { name: "Day 3", value: 2200 },
      { name: "Day 4", value: 2800 },
    ],
  },
  {
    title: "Daily Transaction Value",
    value: 4000000,
    chartData: [
      { name: "Day 1", value: 4000000 },
      { name: "Day 2", value: 4200000 },
      { name: "Day 3", value: 3800000 },
      { name: "Day 4", value: 4500000 },
    ],
  },
  {
    title: "Total Transaction Volume",
    value: 452000,
    chartData: [
      { name: "Day 1", value: 452000 },
      { name: "Day 2", value: 460000 },
      { name: "Day 3", value: 440000 },
      { name: "Day 4", value: 480000 },
    ],
  },
  {
    title: "Total Transaction Value",
    value: 4000000,
    chartData: [
      { name: "Day 1", value: 40000 },
      { name: "Day 2", value: 4100000 },
      { name: "Day 3", value: 3000000 },
      { name: "Day 4", value: 4200000 },
    ],
  },
];

const GradientChart = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 md:gap-3 xl:grid-cols-4 gap-3  2xl:gap-7.5">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-sm  p-2 md:flex items-center"
        >
          <div>
            <h3 className="text-[#787C90] text-xs font-light mb-1  dark:text-white">
              {data.title}
            </h3>
            <p className="text-black  text-lg font-light dark:text-white">
              {data.value.toLocaleString()}
            </p>
          </div>
          <div className="h-16 w-full md:w-[60%]">
            {isMounted && (
              <ResponsiveContainer>
                <AreaChart data={data.chartData}>
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#0294FF73"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="#0296ff25"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Area
                    type="linear"
                    dataKey="value"
                    strokeWidth={1}
                    stroke="#1875F0"
                    fillOpacity={1}
                    fill={`url(#gradient-${index})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
