"use client"

import { Bar, BarChart, LabelList, XAxis, YAxis, Area, AreaChart, CartesianGrid } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"

const healthcareData = [
  { year: 2021, contributors: 45100000, costIndex: 108 },
  { year: 2022, contributors: 45300000, costIndex: 112 },
]

const areaChartData = [
  { month: "January", contributors: 45000000, recipients: 73000000 },
  { month: "February", contributors: 45100000, recipients: 73200000 },
  { month: "March", contributors: 45200000, recipients: 73400000 },
  { month: "April", contributors: 45150000, recipients: 73600000 },
  { month: "May", contributors: 45250000, recipients: 73800000 },
  { month: "June", contributors: 45300000, recipients: 74000000 },
]

export default function HealthcareYearComparison() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Contributors</CardTitle>
          <CardDescription>
            The number of contributors has slightly increased compared to last year.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[1].contributors.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">
                contributors
              </span>
            </div>
            <ChartContainer
              config={{
                contributors: {
                  label: "Contributors",
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
                    date: "2022",
                    contributors: healthcareData[1].contributors,
                  },
                ]}
              >
                <Bar
                  dataKey="contributors"
                  fill="var(--color-contributors)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="date"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="date" type="category" tickCount={1} hide />
                <XAxis dataKey="contributors" type="number" hide />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[0].contributors.toLocaleString()}
              <span className="text-sm font-normal text-muted-foreground">
                contributors
              </span>
            </div>
            <ChartContainer
              config={{
                contributors: {
                  label: "Contributors",
                  color: "hsl(var(--muted))",
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
                    date: "2021",
                    contributors: healthcareData[0].contributors,
                  },
                ]}
              >
                <Bar
                  dataKey="contributors"
                  fill="var(--color-contributors)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="date"
                    offset={8}
                    fontSize={12}
                    fill="hsl(var(--muted-foreground))"
                  />
                </Bar>
                <YAxis dataKey="date" type="category" tickCount={1} hide />
                <XAxis dataKey="contributors" type="number" hide />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Cost Index</CardTitle>
          <CardDescription>
            The healthcare cost index has increased compared to last year.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[1].costIndex}
              <span className="text-sm font-normal text-muted-foreground">
                index points
              </span>
            </div>
            <ChartContainer
              config={{
                costIndex: {
                  label: "Cost Index",
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
                    date: "2022",
                    costIndex: healthcareData[1].costIndex,
                  },
                ]}
              >
                <Bar
                  dataKey="costIndex"
                  fill="var(--color-costIndex)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="date"
                    offset={8}
                    fontSize={12}
                    fill="white"
                  />
                </Bar>
                <YAxis dataKey="date" type="category" tickCount={1} hide />
                <XAxis dataKey="costIndex" type="number" hide />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="grid auto-rows-min gap-2">
            <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
              {healthcareData[0].costIndex}
              <span className="text-sm font-normal text-muted-foreground">
                index points
              </span>
            </div>
            <ChartContainer
              config={{
                costIndex: {
                  label: "Cost Index",
                  color: "hsl(var(--muted))",
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
                    date: "2021",
                    costIndex: healthcareData[0].costIndex,
                  },
                ]}
              >
                <Bar
                  dataKey="costIndex"
                  fill="var(--color-costIndex)"
                  radius={4}
                  barSize={32}
                >
                  <LabelList
                    position="insideLeft"
                    dataKey="date"
                    offset={8}
                    fontSize={12}
                    fill="hsl(var(--muted-foreground))"
                  />
                </Bar>
                <YAxis dataKey="date" type="category" tickCount={1} hide />
                <XAxis dataKey="costIndex" type="number" hide />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Contributors vs Recipients</CardTitle>
          <CardDescription>
            Showing total contributors and recipients for the last 6 months
          </CardDescription>
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
            <AreaChart
              accessibilityLayer
              data={areaChartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillContributors" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-contributors)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-contributors)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillRecipients" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-recipients)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-recipients)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="contributors"
                type="natural"
                fill="url(#fillContributors)"
                fillOpacity={0.4}
                stroke="var(--color-contributors)"
                stackId="a"
              />
              <Area
                dataKey="recipients"
                type="natural"
                fill="url(#fillRecipients)"
                fillOpacity={0.4}
                stroke="var(--color-recipients)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Recipients increasing by 1.4% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2022
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}