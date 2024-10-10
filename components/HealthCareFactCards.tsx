"use client";

import { Bar, BarChart, Rectangle, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

interface HealthcareData {
  year: number;
  personen_gesamt: number;
  ausgaben_gesamt: number;
  finanzierungssaldo: number;
  pflegesatz: number;
}

const healthcareData: HealthcareData[] = [
  {
    year: 2018,
    personen_gesamt: 3685389,
    ausgaben_gesamt: 41.27,
    finanzierungssaldo: -3.55,
    pflegesatz: 2.8,
  },
  {
    year: 2019,
    personen_gesamt: 3999755,
    ausgaben_gesamt: 43.95,
    finanzierungssaldo: 3.29,
    pflegesatz: 3.3,
  },
  {
    year: 2020,
    personen_gesamt: 4322772,
    ausgaben_gesamt: 49.08,
    finanzierungssaldo: 1.54,
    pflegesatz: 3.3,
  },
  {
    year: 2021,
    personen_gesamt: 4606490,
    ausgaben_gesamt: 53.85,
    finanzierungssaldo: -1.35,
    pflegesatz: 3.3,
  },
  {
    year: 2022,
    personen_gesamt: 4875337,
    ausgaben_gesamt: 60.03,
    finanzierungssaldo: -2.25,
    pflegesatz: 3.4,
  },
  {
    year: 2023,
    personen_gesamt: 5236586,
    ausgaben_gesamt: 59.23,
    finanzierungssaldo: 1.78,
    pflegesatz: 4.0,
  },
  {
    year: 2024,
    personen_gesamt: 5236586,
    ausgaben_gesamt: 59.23,
    finanzierungssaldo: 1.5,
    pflegesatz: 4.0,
  },
];

export default function HealthcareFactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="w-full">
        <CardHeader className="p-4 pb-0">
          <CardTitle>Anzahl Pflegebedürftiger</CardTitle>
          <CardDescription>
            Die Anzahl Pflegebedürftiger nimmt rasant zu, in den letzten Jahren mit einem mittleren sechstelligen Betrag. 2023 lag der Zuwachs bei 300.000 Menschen.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {healthcareData[
              healthcareData.length - 1
            ].personen_gesamt.toLocaleString()}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              Menschen
            </span>
          </div>
          <ChartContainer
            config={{
                personen_gesamt: {
                label: "Pflegebedürftige",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="w-[64px]"
          >
            <BarChart
              accessibilityLayer
              margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
              data={healthcareData}
            >
              <Bar
                dataKey="personen_gesamt"
                fill="var(--color-personen_gesamt)"
                radius={2}
                fillOpacity={0.2}
                activeIndex={4}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis dataKey="year" hide />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader className="p-4 pb-0">
          <CardTitle>Gesamtausgaben 2023</CardTitle>
          <CardDescription>
            Die Ausgaben in der Pflege sind in den letzten Jahren immer weiter angestiegen. Treiber waren höhere Kosten aber auch hohe Tarifabschlüsse.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {healthcareData[
              healthcareData.length - 1
            ].ausgaben_gesamt.toLocaleString()}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              Mrd. Euro
            </span>
          </div>
          <ChartContainer
            config={{
                ausgaben_gesamt: {
                label: "Gesamtausgaben",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="w-[64px]"
          >
            <BarChart
              accessibilityLayer
              margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
              data={healthcareData}
            >
              <Bar
                dataKey="ausgaben_gesamt"
                fill="var(--color-ausgaben_gesamt)"
                radius={2}
                fillOpacity={0.2}
                activeIndex={6}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis dataKey="year" hide />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader className="p-4 pb-0">
          <CardTitle>Prognose Beitragsatz 2025</CardTitle>
          <CardDescription>
            Die paritätisch getragenen Pflegebeiträge sind in den letzten Jahren kräftig gestiegen und
            belasten Arbeitnehmer und Arbeitgeber bereits deutlich.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            4.3
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              Prozent
            </span>
          </div>
          <ChartContainer
            config={{
              pflegesatz: {
                label: "Pflegebeitragssatz",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="w-[64px]"
          >
            <BarChart
              accessibilityLayer
              margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
              data={healthcareData}
            >
              <Bar
                dataKey="pflegesatz"
                fill="var(--color-pflegesatz)"
                radius={2}
                fillOpacity={0.2}
                activeIndex={4}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis dataKey="year" hide />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader className="p-4 pb-0">
          <CardTitle>Prognostiziertes Defizit 2024</CardTitle>
          <CardDescription>
            Der Spitzenverband der gesetzlichen Krankenkassen geht von einem
            Minus von 1,5 Mrd. Euro 2024 und 3.4 Mrd. Euro 2025 aus.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {Math.abs(
              healthcareData[healthcareData.length - 1].finanzierungssaldo
            ).toFixed(1)}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              Mrd. € Defizit
            </span>
          </div>
          <ChartContainer
            config={{
              finanzierungssaldo: {
                label: "Defizit",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="w-[64px]"
          >
            <BarChart
              accessibilityLayer
              margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
              data={healthcareData.map((d) => ({
                ...d,
                absDeficit: Math.abs(d.finanzierungssaldo),
              }))}
            >
              <Bar
                dataKey="absDeficit"
                fill="var(--color-finanzierungssaldo)"
                radius={2}
                fillOpacity={0.2}
                activeIndex={4}
                activeBar={<Rectangle fillOpacity={0.8} />}
              />
              <XAxis dataKey="year" hide />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
