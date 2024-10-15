"use client";

import { useState, useEffect } from "react";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/chart";
import CustomTooltip from "@/utils/CustomTooltip";
import Link from "next/link";

interface ChartData {
  name: string;
  value: number;
  percentage: string;
  fill: string;
}

const chartConfig = {
  visitors: {
    label: "Recipients",
  },
  "Pflegegrad 1": {
    label: "Pflegegrad 1",
    color: "#FF9F40",
  },
  "Pflegegrad 2": {
    label: "Pflegegrad 2",
    color: "#FF6384",
  },
  "Pflegegrad 3": {
    label: "Pflegegrad 3",
    color: "#36A2EB",
  },
  "Pflegegrad 4": {
    label: "Pflegegrad 4",
    color: "#FFCE56",
  },
  "Pflegegrad 5": {
    label: "Pflegegrad 5",
    color: "#4BC0C0",
  },
} satisfies ChartConfig;

export function CareByDegreeChart() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [totalRecipients, setTotalRecipients] = useState<number>(0);

  useEffect(() => {
    fetch("/data/pflegegrade_data.json")
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
        // Calculate total recipients from the fetched data
        const total = data.reduce((acc: number, curr: ChartData) => acc + curr.value, 0);
        setTotalRecipients(total);
      });
  }, []);

  if (chartData.length === 0) return <div>Loading...</div>;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pflegegrade (2023)</CardTitle>
        <CardDescription>Verteilung der Pflegegrade zum 31.12.2023</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Pie data={chartData} dataKey="value" nameKey="name" innerRadius={100} outerRadius={135} strokeWidth={5} fill="#8884d8">
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalRecipients.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Leistungsbezieher (Gesamt)
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <Link
          className="text-sm"
          href="https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/Pflegeversicherung/Zahlen_und_Fakten/Zahlen-Fakten_Pflegeversicherung.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quelle: Bundesgesundheitsministerium
        </Link>
      </CardFooter>
    </Card>
  );
}
