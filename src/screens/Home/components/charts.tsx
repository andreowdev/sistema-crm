// src/components/Charts.tsx

import React, { useState } from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { InputCharts } from "./inputCharts";
import { chartData } from "../hooks/useFetch";

const chartConfig = {
  base: {
    label: "Base",
    color: "blue",
  },
};

export function Charts() {
  // Estado para armazenar os dados modificados
  const [data, setData] = useState(chartData);

  // Função para atualizar o valor de base de um mês específico
  const handleChange = (month: string, newBase: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.month === month ? { ...item, base: newBase } : item
      )
    );
  };

  return (
    <div>
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
              data={data} // Passando os dados modificados
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

      {/* Passando os dados e a função de alteração para o Popover */}
      <InputCharts data={data} handleChange={handleChange} />
    </div>
  );
}
