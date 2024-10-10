"use client"

import { Bar, BarChart, Rectangle, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

const healthcareData = [
  { year: 2018, contributors: 45000000, recipients: 73000000, costIndex: 100, wageIndex: 100, expenditure: 375.6, deficit: -3.5 },
  { year: 2019, contributors: 45500000, recipients: 73500000, costIndex: 102, wageIndex: 101, expenditure: 402.8, deficit: -2.8 },
  { year: 2020, contributors: 45200000, recipients: 74000000, costIndex: 105, wageIndex: 102, expenditure: 425.1, deficit: -5.2 },
  { year: 2021, contributors: 45100000, recipients: 74500000, costIndex: 108, wageIndex: 103, expenditure: 441.7, deficit: -5.8 },
  { year: 2022, contributors: 45300000, recipients: 75000000, costIndex: 112, wageIndex: 105, expenditure: 460.2, deficit: -6.7 },
]

export default function HealthcareFactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="w-full">
        <CardHeader className="p-4 pb-0">
          <CardTitle>Contributors</CardTitle>
          <CardDescription>
            The number of people contributing to the healthcare system has remained relatively stable.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {healthcareData[healthcareData.length - 1].contributors.toLocaleString()}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              people
            </span>
          </div>
          <ChartContainer
            config={{
              contributors: {
                label: "Contributors",
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
                dataKey="contributors"
                fill="var(--color-contributors)"
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
          <CardTitle>Recipients</CardTitle>
          <CardDescription>
            The number of healthcare recipients has been steadily increasing over the years.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {healthcareData[healthcareData.length - 1].recipients.toLocaleString()}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              people
            </span>
          </div>
          <ChartContainer
            config={{
              recipients: {
                label: "Recipients",
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
                dataKey="recipients"
                fill="var(--color-recipients)"
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
          <CardTitle>Healthcare Expenditure</CardTitle>
          <CardDescription>
            Total healthcare expenditure has been rising steadily, putting pressure on the system.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {healthcareData[healthcareData.length - 1].expenditure.toFixed(1)}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              billion €
            
            </span>
          </div>
          <ChartContainer
            config={{
              expenditure: {
                label: "Expenditure",
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
                dataKey="expenditure"
                fill="var(--color-expenditure)"
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
          <CardTitle>System Deficit</CardTitle>
          <CardDescription>
            The healthcare system&apos;s deficit has been growing, indicating increasing financial strain.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row items-baseline justify-between p-4 pt-2">
          <div className="flex items-baseline gap-2 text-2xl sm:text-3xl font-bold tabular-nums leading-none">
            {Math.abs(healthcareData[healthcareData.length - 1].deficit).toFixed(1)}
            <span className="text-xs sm:text-sm font-normal text-muted-foreground">
              billion € deficit
            </span>
          </div>
          <ChartContainer
            config={{
              deficit: {
                label: "Deficit",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="w-[64px]"
          >
            <BarChart
              accessibilityLayer
              margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
              data={healthcareData.map(d => ({ ...d, absDeficit: Math.abs(d.deficit) }))}
            >
              <Bar
                dataKey="absDeficit"
                fill="var(--color-deficit)"
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
  )
}