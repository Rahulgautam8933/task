import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "On Time", value: 400 },
  { name: "Late", value: 300 },
  { name: "Pending", value: 300 },
];

const COLORS = ["#BBE999", "#56CA00", "#77D433"];

const RADIAN = Math.PI / 180;
// Helper function to render the percentage label on hover
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieCard = () => {
  return (
    <>
      <div className="mb-5 shadow-lg  p-5 w-full rounded bg-white">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-gray-500 text-2xl">Delivery Exceptions</p>
            <p className="text-gray-400">subHeading</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              //   label={renderCustomizedLabel} // Use the custom label function to display percentages
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => [
                `${((value / 1000) * 100).toFixed(2)}%`,
                name,
              ]}
            />
          </PieChart>
        </div>
        <div className="mt-1">
          <ul className="text-center text-gray-500 space-y-2">
            <li>Some Text Here</li>
            <li>Some Text Here</li>
            <li>Some Text Here</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PieCard;
