import "./chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555" />
          <Line type="monotone" dataKey={dataKey} stroke="#555" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#afe0fc" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
