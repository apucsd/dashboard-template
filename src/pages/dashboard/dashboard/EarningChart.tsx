import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const EarningChart = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      tv: "12k",
      amt: 10,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      tv: 1200,
      amt: 20,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      tv: 1200,
      amt: 30,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      tv: 1200,
      amt: 40,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      tv: 1200,
      amt: 50,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      tv: 1200,
      amt: 60,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 70,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 80,
    },
    {
      name: "Sep",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 90,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 110,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      tv: 1200,
      amt: 120,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <ResponsiveContainer width={"100%"} height={400}>
        <AreaChart data={data} barGap={100}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4379EE29" stopOpacity={1} />
              <stop offset="70%" stopColor="#89acf729" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF2D" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid horizontal vertical={false} />
          <XAxis
            dataKey="name"
            padding="gap"
            minTickGap={2}
            fontSize="12px"
            fontWeight="400"
            strokeOpacity={0}
          />
          <YAxis
            tickCount={5}
            width={40}
            fontSize="12px"
            fontWeight="400"
            strokeOpacity={0}
          />
          <Tooltip />
          <Area
            connectNulls
            type="monotone"
            dataKey="uv"
            stroke="#0D2247"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningChart;
