"use client";

import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { CareByDegreeChart } from "./CareByDegreeChart";
import Link from "next/link";

const healthcareData = [
  {
    category: "Gesamt",
    oeffentlicheLeistungsbezieher: 5236586,
    privateLeistungsbezieher: 342743,
  },
  {
    category: "Stationär",
    oeffentlicheLeistungsbezieher: 4393497,
    privateLeistungsbezieher: 285342,
  },
  {
    category: "Ambulant",
    oeffentlicheLeistungsbezieher: 843089,
    privateLeistungsbezieher: 57401,
  },
];

export default function HealthcareYearComparison() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Soziale Pflegeversicherung</CardTitle>
          <CardDescription>
            Die Anzahl der Leistungsbezieher der sozialen Pflegeversicherung
            fällt zu knapp 84% auf ambulante Pflegedienstleistungen (Stand:
            2023).
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[0].oeffentlicheLeistungsbezieher.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">
                Leistungsbezieher
              </span>
            </div>
            <ChartContainer
              config={{
                oeffentlicheLeistungsbezieher: {
                  label: "Leistungsbezieher",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    category: "Gesamt",
                    oeffentlicheLeistungsbezieher:
                      healthcareData[0].oeffentlicheLeistungsbezieher,
                  },
                ]}
              >
                <Bar
                  dataKey="oeffentlicheLeistungsbezieher"
                  fill="var(--color-oeffentlicheLeistungsbezieher)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="category"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="category" type="category" tickCount={1} hide />
                <XAxis
                  dataKey="value"
                  type="number"
                  hide
                  domain={[0, healthcareData[0].oeffentlicheLeistungsbezieher]}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[1].oeffentlicheLeistungsbezieher.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">
                Leistungsbezieher
              </span>
            </div>
            <ChartContainer
              config={{
                oeffentlicheLeistungsbezieher: {
                  label: "Leistungsbezieher",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    category: "Stationär",
                    oeffentlicheLeistungsbezieher:
                      healthcareData[1].oeffentlicheLeistungsbezieher,
                  },
                ]}
              >
                <Bar
                  dataKey="oeffentlicheLeistungsbezieher"
                  fill="var(--color-oeffentlicheLeistungsbezieher)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="category"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="category" type="category" tickCount={1} hide />
                <XAxis
                  dataKey="value"
                  type="number"
                  hide
                  domain={[0, healthcareData[0].oeffentlicheLeistungsbezieher]}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[2].oeffentlicheLeistungsbezieher.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">
                Leistungsbezieher
              </span>
            </div>
            <ChartContainer
              config={{
                oeffentlicheLeistungsbezieher: {
                  label: "Leistungsbezieher",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    category: "Ambulant",
                    oeffentlicheLeistungsbezieher:
                      healthcareData[2].oeffentlicheLeistungsbezieher,
                  },
                ]}
              >
                <Bar
                  dataKey="oeffentlicheLeistungsbezieher"
                  fill="var(--color-oeffentlicheLeistungsbezieher)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="category"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="category" type="category" tickCount={1} hide />
                <XAxis
                  dataKey="value"
                  type="number"
                  hide
                  domain={[0, healthcareData[0].oeffentlicheLeistungsbezieher]}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
        <CardFooter>
          <Link className="text-sm"
            href="https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/Pflegeversicherung/Zahlen_und_Fakten/Zahlen-Fakten_Pflegeversicherung.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quelle: Bundesgesundheitsministerium
          </Link>
        </CardFooter>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Private Pflegepflichtversicherung</CardTitle>
          <CardDescription>
            Die Anzahl der Leistungsbezieher der privaten
            Pflegepflichtversicherung fällt zu knapp 83% auf ambulante
            Pflegedienstleistungen (Stand: 2023).
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[1].privateLeistungsbezieher}
              <span className="text-sm font-normal text-muted-foreground">
                Leistungsbezieher
              </span>
            </div>
            <ChartContainer
              config={{
                privateLeistungsbezieher: {
                  label: "Leistungsbeziher",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    category: "Gesamt",
                    privateLeistungsbezieher:
                      healthcareData[0].privateLeistungsbezieher,
                  },
                ]}
              >
                <Bar
                  dataKey="privateLeistungsbezieher"
                  fill="var(--color-privateLeistungsbezieher)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="category"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="category" type="category" tickCount={1} hide />
                <XAxis
                  dataKey="value"
                  type="number"
                  hide
                  domain={[0, healthcareData[0].privateLeistungsbezieher]}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[1].privateLeistungsbezieher}
              <span className="text-sm font-normal text-muted-foreground">
                Leistungsbezieher
              </span>
            </div>
            <ChartContainer
              config={{
                privateLeistungsbezieher: {
                  label: "Leistungsbezieher",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    category: "Stationär",
                    privateLeistungsbezieher:
                      healthcareData[1].privateLeistungsbezieher,
                  },
                ]}
              >
                <Bar
                  dataKey="privateLeistungsbezieher"
                  fill="var(--color-privateLeistungsbezieher)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="category"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="category" type="category" tickCount={1} hide />
                <XAxis
                  dataKey="value"
                  type="number"
                  hide
                  domain={[0, healthcareData[0].privateLeistungsbezieher]}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[2].privateLeistungsbezieher}
              <span className="text-sm font-normal text-muted-foreground">
                Leistungsbezieher
              </span>
            </div>
            <ChartContainer
              config={{
                privateLeistungsbezieher: {
                  label: "Leistungsbezieher",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="aspect-auto h-[32px] w-full"
            >
              <BarChart
                accessibilityLayer
                layout="vertical"
                margin={{
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    category: "Ambulant",
                    privateLeistungsbezieher:
                      healthcareData[2].privateLeistungsbezieher,
                  },
                ]}
              >
                <Bar
                  dataKey="privateLeistungsbezieher"
                  fill="var(--color-privateLeistungsbezieher)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="category"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="category" type="category" tickCount={1} hide />
                <XAxis
                  dataKey="value"
                  type="number"
                  hide
                  domain={[0, healthcareData[0].privateLeistungsbezieher]}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
        <CardFooter>
          <Link className="text-sm"
            href="https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Statistiken/Pflegeversicherung/Zahlen_und_Fakten/Zahlen-Fakten_Pflegeversicherung.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quelle: Bundesgesundheitsministerium
          </Link>
        </CardFooter>
      </Card>
      <CareByDegreeChart />
    </div>
  );
}
