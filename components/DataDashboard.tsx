"use client";

import {
  Bar,
  BarChart,
  Label,
  Rectangle,
  ReferenceLine,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HealthcareData {
  year: number;
  einnahmen_gesamt: number;
  ausgaben_gesamt: number;
  finanzierungssaldo: number;
  liquide_mittel: number;
}

export default function DataDashboard() {
  const [healthcareData, setHealthcareData] = useState<HealthcareData[]>([]);

  // Fetching the data from the JSON file
  useEffect(() => {
    fetch("/data/budget_data.json")
      .then((response) => response.json())
      .then((data) => setHealthcareData(data));
  }, []);

  if (healthcareData.length === 0) return <div>Loading...</div>;

  const averageEinnahmen = Math.round(
    healthcareData.reduce((sum, data) => sum + data.einnahmen_gesamt, 0) /
      healthcareData.length
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="w-full">
        <CardHeader className="space-y-0 pb-2">
          <CardDescription>
            Einnahmen vs. Ausgaben (2018 - 2023)
          </CardDescription>
          <CardTitle className="text-2xl md:text-4xl tabular-nums">
            {healthcareData[
              healthcareData.length - 1
            ].einnahmen_gesamt.toLocaleString()}
            {" Mrd. Euro (2023) "}
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              Gesamteinnahmen
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              einnahmen_gesamt: {
                label: "Gesamteinnahmen",
                color: "hsl(var(--chart-1))",
              },
              ausgaben_gesamt: {
                label: "Gesamtausgaben",
                color: "hsl(var(--chart-2))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={healthcareData}
                margin={{
                  left: -4,
                  right: -4,
                }}
              >
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                />
                <YAxis hide />
                <Bar
                  dataKey="einnahmen_gesamt"
                  fill="var(--color-einnahmen_gesamt)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <Bar
                  dataKey="ausgaben_gesamt"
                  fill="var(--color-ausgaben_gesamt)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => `Jahr: ${value}`}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={averageEinnahmen}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Einnahmen (in Mrd. €, Durchschnitt)"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value={averageEinnahmen.toLocaleString()}
                    className="text-lg"
                    fill="hsl(var(--foreground))"
                    offset={10}
                    startOffset={100}
                  />
                </ReferenceLine>
              </BarChart>
            </ResponsiveContainer>
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

      <Card className="w-full">
        <CardHeader className="space-y-0 pb-2">
          <CardDescription>
            Finanzierungssaldo und Liquide Mittel zum Jahresende
          </CardDescription>
          <CardTitle className="text-2xl md:text-4xl tabular-nums">
            {healthcareData[healthcareData.length - 1].finanzierungssaldo}{" "}
            Mrd. Euro (2023){" "}
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              Finanzierungssaldo
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              finanzierungssaldo: {
                label: "Finanzierungssaldo",
                color: "hsl(var(--chart-3))",
              },
              liquide_mittel: {
                label: "Liquide Mittel",
                color: "hsl(var(--chart-4))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={healthcareData}
                margin={{
                  left: -4,
                  right: -4,
                }}
              >
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                />
                <YAxis hide />
                <Bar
                  dataKey="finanzierungssaldo"
                  fill="var(--color-finanzierungssaldo)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <Bar
                  dataKey="liquide_mittel"
                  fill="var(--color-liquide_mittel)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => `Jahr: ${value}`}
                    />
                  }
                  cursor={false}
                />
              </BarChart>
            </ResponsiveContainer>
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
    </div>
  );
}
