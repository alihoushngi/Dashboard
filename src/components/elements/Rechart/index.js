import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

function ReChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#ff4d6d" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#ff4d6d11" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="colorview2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#03e9f4" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#03e9f411" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="name" />
        <YAxis /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Area
          type="monotone"
          dataKey="Sell"
          stroke="red"
          activeDot={{ r: 8 }}
          fill="url(#colorview)"
        />
        <Area
          type="monotone"
          dataKey="Buy"
          stroke="#03e9f4"
          fill="url(#colorview2)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ReChart;
