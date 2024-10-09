"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts'

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

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-2 rounded-md shadow-md">
        <p className="font-bold">{`Year: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function DataDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Contributors vs Recipients</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={healthcareData} margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value: number) => `${value / 1000000}M`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="contributors" fill="#8884d8" name="Contributors" />
              <Bar dataKey="recipients" fill="#82ca9d" name="Recipients" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Cost vs Wage Development</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={healthcareData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="costIndex" fill="#8884d8" name="Cost Index" />
              <Bar dataKey="wageIndex" fill="#82ca9d" name="Wage Index" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="col-span-1 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Healthcare System Data</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Contributors</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Cost Index</TableHead>
                <TableHead>Wage Index</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {healthcareData.map((row) => (
                <TableRow key={row.year}>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.contributors.toLocaleString()}</TableCell>
                  <TableCell>{row.recipients.toLocaleString()}</TableCell>
                  <TableCell>{row.costIndex}</TableCell>
                  <TableCell>{row.wageIndex}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}