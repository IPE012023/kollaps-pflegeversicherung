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
  const [customIncreaseRate] = useState(increaseRate);
  const [deficitGKV, setDeficitGKV] = useState(initialDeficit);
  const [customIncreaseRateGKV] = useState(increaseRateGKV);
  const [deficitGPV, setDeficitGPV] = useState(initialDeficit);
  const [customIncreaseRateGPV] = useState(increaseRateGPV);
  const [deficitGRV, setDeficitGRV] = useState(initialDeficit);
  const [customIncreaseRateGRV] = useState(increaseRateGRV);
  const [deficitGAV, setDeficitGAV] = useState(initialDeficit);
  const [customIncreaseRateGAV] = useState(increaseRateGAV);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setDeficit((prevDeficit) => prevDeficit + customIncreaseRate);
        setDeficitGKV((prevDeficit) => prevDeficit + customIncreaseRateGKV);
        setDeficitGPV((prevDeficit) => prevDeficit + customIncreaseRateGPV);
        setDeficitGRV((prevDeficit) => prevDeficit + customIncreaseRateGRV);
        setDeficitGAV((prevDeficit) => prevDeficit + customIncreaseRateGAV);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    isRunning,
    customIncreaseRate,
    customIncreaseRateGKV,
    customIncreaseRateGPV,
    customIncreaseRateGRV,
    customIncreaseRateGAV,
  ]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Karten */}
        {[{
          title: "Krankenversicherung (GKV)",
          description: "Jährliches Defizit von 9,3 Mrd.€ (2022)",
          value: deficitGKV
        }, {
          title: "Pflegeversicherung (GPV)",
          description: "Jährliches Defizit von 47,7 Mrd.€ (2022)",
          value: deficitGPV
        }, {
          title: "Rentenversicherung (GRV)",
          description: "Jährliches Defizit von 1,5 Mrd.€ (2024)",
          value: deficitGRV
        }, {
          title: "Arbeitslosenversicherung (GAV)",
          description: "Jährliches Defizit von 3,4 Mrd.€ (2024)",
          value: deficitGAV
        }].map((card, index) => (
          <Card key={index} className="w-full border-4 flex flex-col justify-between shadow-lg">
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
                  <div className="relative bg-[#000000] px-2 py-1 rounded">
                    <span className="relative z-10">
                      {Math.round(card.value)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                      €
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Große Uhr */}
      <div className="mt-8">
        <Card className="w-full lg:max-w-[calc(100%-2rem)] mx-auto border-4 rounded-lg shadow-lg">
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
                Quelle: ...
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-lg"
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
                className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full font-bold text-lg"
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
