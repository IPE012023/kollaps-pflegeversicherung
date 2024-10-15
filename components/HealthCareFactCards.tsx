"use client";

import { useState, useEffect } from "react";
import { Bar, BarChart, Rectangle, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

interface HealthcareData {
  year: number;
  personen_gesamt: number;
  ausgaben_gesamt: number;
  finanzierungssaldo: number;
  pflegesatz: number;
}

export default function HealthcareFactCards() {
  const [healthcareData, setHealthcareData] = useState<HealthcareData[]>([]);

  useEffect(() => {
    fetch("/data/health_fact_cards.json")
      .then((response) => response.json())
      .then((data) => setHealthcareData(data));
  }, []);

  if (healthcareData.length === 0) return <div>Loading...</div>;

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
            {healthcareData[healthcareData.length - 1].personen_gesamt.toLocaleString()}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">Menschen</span>
          </div>
          <ChartContainer config={{ personen_gesamt: { label: "Pflegebedürftige", color: "hsl(var(--chart-1))" } }} className="w-[64px]">
            <BarChart accessibilityLayer margin={{ left: 0, right: 0, top: 0, bottom: 0 }} data={healthcareData}>
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
            {healthcareData[healthcareData.length - 1].ausgaben_gesamt.toLocaleString()}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">Mrd. Euro</span>
          </div>
          <ChartContainer config={{ ausgaben_gesamt: { label: "Gesamtausgaben", color: "hsl(var(--chart-2))" } }} className="w-[64px]">
            <BarChart accessibilityLayer margin={{ left: 0, right: 0, top: 0, bottom: 0 }} data={healthcareData}>
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
            Die paritätisch getragenen Pflegebeiträge sind in den letzten Jahren kräftig gestiegen und belasten Arbeitnehmer und Arbeitgeber bereits deutlich.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            4.3
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">Prozent</span>
          </div>
          <ChartContainer config={{ pflegesatz: { label: "Pflegebeitragssatz", color: "hsl(var(--chart-3))" } }} className="w-[64px]">
            <BarChart accessibilityLayer margin={{ left: 0, right: 0, top: 0, bottom: 0 }} data={healthcareData}>
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
            Der Spitzenverband der gesetzlichen Krankenkassen geht von einem Minus von 1,5 Mrd. Euro 2024 und 3.4 Mrd. Euro 2025 aus.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {Math.abs(healthcareData[healthcareData.length - 1].finanzierungssaldo).toFixed(1)}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">Mrd. € Defizit</span>
          </div>
          <ChartContainer config={{ finanzierungssaldo: { label: "Defizit", color: "hsl(var(--chart-4))" } }} className="w-[64px]">
            <BarChart accessibilityLayer margin={{ left: 0, right: 0, top: 0, bottom: 0 }} data={healthcareData.map((d) => ({ ...d, absDeficit: Math.abs(d.finanzierungssaldo) }))}>
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
