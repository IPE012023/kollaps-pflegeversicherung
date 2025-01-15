"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";

type ChartDataKey = "GKV" | "GPV" | "GRV" | "GAV";

const chartData: Record<ChartDataKey, { year: number; value: number }[]> = {
  GKV: [
    { year: 2019, value: 239.49 },
    { year: 2020, value: 248.88 },
    { year: 2021, value: 263.41 },
    { year: 2022, value: 274.23 },
    { year: 2023, value: 288.62 },
  ],
  GPV: [
    { year: 2019, value: 100 },
    { year: 2020, value: 120 },
    { year: 2021, value: 140 },
    { year: 2022, value: 160 },
    { year: 2023, value: 180 },
  ],
  GRV: [
    { year: 2019, value: 50 },
    { year: 2020, value: 60 },
    { year: 2021, value: 70 },
    { year: 2022, value: 80 },
    { year: 2023, value: 90 },
  ],
  GAV: [
    { year: 2019, value: 200 },
    { year: 2020, value: 220 },
    { year: 2021, value: 240 },
    { year: 2022, value: 260 },
    { year: 2023, value: 280 },
  ],
};

const chartColors: Record<ChartDataKey, string> = {
  GKV: "hsl(var(--chart-1))",
  GPV: "hsl(var(--chart-2))",
  GRV: "hsl(var(--chart-3))",
  GAV: "hsl(var(--chart-4))",
};

function ChartModal({
  isOpen,
  onClose,
  title,
  data,
  color,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: { year: number; value: number }[];
  color: string;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dark:bg-[hsl(var(--card))] dark:text-[hsl(var(--card-foreground))]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="year"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  color: "hsl(var(--foreground))",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                itemStyle={{ color }}
                cursor={{ stroke: color, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={3}
                dot={{ fill: color, r: 4 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function DeficitClock({
  initialDeficit = 0,
  increaseRate = 1955.155,
  increaseRateGKV = 101.4019,
  increaseRateGPV = 47.5321,
  increaseRateGRV = 1511.5219,
  increaseRateGAV = 294.6992,
}) {
  const [deficit, setDeficit] = useState(initialDeficit);
  const [isRunning, setIsRunning] = useState(false);
  const [deficitGKV, setDeficitGKV] = useState(initialDeficit);
  const [deficitGPV, setDeficitGPV] = useState(initialDeficit);
  const [deficitGRV, setDeficitGRV] = useState(initialDeficit);
  const [deficitGAV, setDeficitGAV] = useState(initialDeficit);
  const [isChartOpen, setChartOpen] = useState(false);
  const [selectedChartTitle, setSelectedChartTitle] = useState("");
  const [selectedChartData, setSelectedChartData] = useState<
    { year: number; value: number }[]
  >([]);
  const [selectedChartColor, setSelectedChartColor] = useState("");

  const openChartModal = (title: string, dataKey: ChartDataKey) => {
    setSelectedChartTitle(title);
    setSelectedChartData(chartData[dataKey]);
    setSelectedChartColor(chartColors[dataKey]);
    setChartOpen(true);
  };

  const closeChartModal = () => {
    setChartOpen(false);
    setSelectedChartTitle("");
    setSelectedChartData([]);
    setSelectedChartColor("");
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setDeficit((prevDeficit) => prevDeficit + increaseRate);
        setDeficitGKV((prevDeficit) => prevDeficit + increaseRateGKV);
        setDeficitGPV((prevDeficit) => prevDeficit + increaseRateGPV);
        setDeficitGRV((prevDeficit) => prevDeficit + increaseRateGRV);
        setDeficitGAV((prevDeficit) => prevDeficit + increaseRateGAV);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    isRunning,
    increaseRate,
    increaseRateGKV,
    increaseRateGPV,
    increaseRateGRV,
    increaseRateGAV,
  ]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Krankenversicherung (GKV)",
            description: "Jährliches Defizit von 9,3 Mrd.€ (2022)",
            dataKey: "GKV",
            value: deficitGKV,
          },
          {
            title: "Pflegeversicherung (GPV)",
            description: "Jährliches Defizit von 47,7 Mrd.€ (2022)",
            dataKey: "GPV",
            value: deficitGPV,
          },
          {
            title: "Rentenversicherung (GRV)",
            description: "Jährliches Defizit von 1,5 Mrd.€ (2024)",
            dataKey: "GRV",
            value: deficitGRV,
          },
          {
            title: "Arbeitslosenversicherung (GAV)",
            description: "Jährliches Defizit von 3,4 Mrd.€ (2024)",
            dataKey: "GAV",
            value: deficitGAV,
          },
        ].map((card, index) => (
          <Card
            key={index}
            className="w-full border-4 flex flex-col justify-between shadow-lg cursor-pointer"
            onClick={() => openChartModal(card.title, card.dataKey as ChartDataKey)}
          >
            <CardHeader className="p-4 pb-0">
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-baseline justify-end p-2 pt-2">
              <div className="bg-[#000000] w-full p-2 rounded-md mb-2 border-4 border-gray-800">
                <div
                  className="flex justify-center items-center space-x-2 font-mono text-xl text-[#ff0000] font-bold"
                  style={{ textShadow: "0 0 10px #ff0000" }}
                >
                  <span>
                    {Math.round(card.value)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    €
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ChartModal
        isOpen={isChartOpen}
        onClose={closeChartModal}
        title={selectedChartTitle}
        data={selectedChartData}
        color={selectedChartColor}
      />

      {/* Große Uhr */}
      <div className="mt-8">
        <Card className="w-full mx-auto border-4 rounded-lg shadow-lg">
          <CardContent className="p-4">
            <div className="p-4 bg-[#000000] rounded-md mb-4 border-8 border-gray-800">
              <div
                className="flex justify-center items-center font-mono text-4xl sm:text-6xl text-[#ff0000] font-bold"
                style={{ textShadow: "0 0 10px #ff0000" }}
              >
                <div className="relative bg-[#000000] px-2 py-1 rounded">
                  <span className="relative z-10">
                  {Math.round(deficit)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                  €
                </span>
              </div>
              </div>
              <div className="text-center text-[#ffffff] text-sm mt-2">
                <span className="font-semibold">Quelle:</span>{" "}
                <Link
                  href="https://www.bundesfinanzministerium.de/Content/DE/Downloads/Broschueren_Bestellservice/tragfaehigkeitsbericht-2024.pdf?__blob=publicationFile&v=4"
                  aria-label="6. Tragfähigkeitsbericht, 2024: Projektionen zur langfristigen Tragfähigkeit der öffentlichen Finanzen"
                >
                  6. Tragfähigkeitsbericht des Bundesministeriums der Finanzen
                  (2024)
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                className="w-full sm:w-auto bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full font-bold text-lg"
              >
                {isRunning ? "Stop" : "Start"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setDeficit(initialDeficit);
                  setDeficitGKV(initialDeficit);
                  setDeficitGPV(initialDeficit);
                  setDeficitGRV(initialDeficit);
                  setDeficitGAV(initialDeficit);
                  setIsRunning(false);
                }}
                className="w-full sm:w-auto border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))] rounded-full font-bold text-lg"
              >
                Zurücksetzen
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
