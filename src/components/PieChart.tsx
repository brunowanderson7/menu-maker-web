"use client";

import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      title="Rangos mais vendidas"
      series={[
        {
          data: [
            { id: 0, value: 10, color: "#F87146", label: "Rango A" },
            { id: 1, value: 15, color: "#faa083", label: "Rango B" },
            { id: 2, value: 20, color: "#883e27", label: "Rango C" },
          ],
        },
      ]}
      width={400}
      height={168}
    />
  );
}
