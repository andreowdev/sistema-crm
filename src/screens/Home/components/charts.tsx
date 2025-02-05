
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"



const chartData = [
  { month: "Mar", base: 0},
  { month: "April", base: 20},
  { month: "May", base: 40},
  { month: "June", base: 27},
  { month: "Jul", base: 45},
  { month: "Aug", base: 120},
  { month: "Sep", base: 0},
]

const chartConfig = {
  base: {
    label: "Base",
    color: "blue",
  },
} satisfies ChartConfig

export function Charts() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Crescimento da base com o tempo.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
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
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="base"
              type="monotoneX"
              fill="var(--color-base)"
              fillOpacity={0.4}
              stroke="var(--color-base)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
