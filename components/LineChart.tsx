import {
    ResponsiveContainer,
    LineChart,
    CartesianGrid,
    Line,
    XAxis,
    Tooltip,
    YAxis,
  } from "recharts";
  
  export function LineChartComponent({
    data,
    color,
    yAxisLabel = "Mill. Euro",
    subtitle,
  }: {
    data: { year: number; value: number }[];
    color: string;
    yAxisLabel?: string;
    subtitle?: string;
  }) {
    return (
      <div className="text-center">
        {subtitle && <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="year"
              tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              label={{
                value: yAxisLabel,
                angle: -90,
                position: "insideLeft",
                style: { fill: "hsl(var(--foreground))", fontSize: 12 },
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                color: "hsl(var(--foreground))",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              itemStyle={{ color }}
              cursor={{ stroke: color, strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={3}
              dot={{ fill: color, r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }