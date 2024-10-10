"use client"

import { Bar, BarChart, Label, Rectangle, ReferenceLine, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface HealthcareData {
  year: number;
  contributors: number;
  recipients: number;
  costIndex: number;
  wageIndex: number;
}

const healthcareData: HealthcareData[] = [
  { year: 2018, contributors: 45000000, recipients: 73000000, costIndex: 100, wageIndex: 100 },
  { year: 2019, contributors: 45500000, recipients: 73500000, costIndex: 102, wageIndex: 101 },
  { year: 2020, contributors: 45200000, recipients: 74000000, costIndex: 105, wageIndex: 102 },
  { year: 2021, contributors: 45100000, recipients: 74500000, costIndex: 108, wageIndex: 103 },
  { year: 2022, contributors: 45300000, recipients: 75000000, costIndex: 112, wageIndex: 105 },
]

export default function DataDashboard() {
  const averageContributors = Math.round(healthcareData.reduce((sum, data) => sum + data.contributors, 0) / healthcareData.length)
  const totalContributors = healthcareData.reduce((sum, data) => sum + data.contributors, 0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="w-full">
        <CardHeader className="space-y-0 pb-2">
          <CardDescription>Contributors vs Recipients</CardDescription>
          <CardTitle className="text-2xl md:text-4xl tabular-nums">
            {healthcareData[healthcareData.length - 1].contributors.toLocaleString()}{" "}
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              contributors
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              contributors: {
                label: "Contributors",
                color: "hsl(var(--chart-1))",
              },
              recipients: {
                label: "Recipients",
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
                  dataKey="contributors"
                  fill="var(--color-contributors)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <Bar
                  dataKey="recipients"
                  fill="var(--color-recipients)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => `Year: ${value}`}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={averageContributors}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Average Contributors"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value={averageContributors.toLocaleString()}
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
        <CardFooter className="flex-col items-start gap-1">
          <CardDescription>
            Over the past 5 years, there have been an average of{" "}
            <span className="font-medium text-foreground">{averageContributors.toLocaleString()}</span> contributors.
          </CardDescription>
          <CardDescription>
            The total number of contributors over this period was{" "}
            <span className="font-medium text-foreground">{totalContributors.toLocaleString()}</span>.
          </CardDescription>
        </CardFooter>
      </Card>

      <Card className="w-full">
        <CardHeader className="space-y-0 pb-2">
          <CardDescription>Cost vs Wage Development</CardDescription>
          <CardTitle className="text-2xl md:text-4xl tabular-nums">
            {healthcareData[healthcareData.length - 1].costIndex}{" "}
            <span className="text-sm font-normal tracking-normal text-muted-foreground">
              cost index
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              costIndex: {
                label: "Cost Index",
                color: "hsl(var(--chart-3))",
              },
              wageIndex: {
                label: "Wage Index",
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
                  dataKey="costIndex"
                  fill="var(--color-costIndex)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <Bar
                  dataKey="wageIndex"
                  fill="var(--color-wageIndex)"
                  radius={[4, 4, 0, 0]}
                  fillOpacity={0.6}
                  activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => `Year: ${value}`}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={100}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Base Index (2018)"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                  <Label
                    position="insideTopLeft"
                    value="100"
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
        <CardFooter className="flex-col items-start gap-1">
          <CardDescription>
            The cost index has increased by{" "}
            <span className="font-medium text-foreground">
              {healthcareData[healthcareData.length - 1].costIndex - 100}%
            </span> since 2018.
          </CardDescription>
          <CardDescription>
            The wage index has increased by{" "}
            <span className="font-medium text-foreground">
              {healthcareData[healthcareData.length - 1].wageIndex - 100}%
            </span> since 2018.
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}