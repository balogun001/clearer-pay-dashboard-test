import { FaChevronDown } from 'react-icons/fa6';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BodyText } from '@ui/Text';
import Card from './Card';

const data = [
  { name: '1', in: 50000, out: 40000 },
  { name: '8', in: 70000, out: 55000 },
  { name: '15', in: 60000, out: 90000 },
  { name: '22', in: 90000, out: 70000 },
  { name: '31', in: 105000, out: 120000 },
];

function MoneyFlowChart() {
  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <BodyText className="!font-medium">Money out/Money in</BodyText>
        <div className="text-xs bg-gray-200 rounded-md px-3 py-1 flex items-center gap-1">
          Date Range
          <FaChevronDown className="h-4 w-4" />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-300" />
          <span className="text-xs">Money in ₦1,000,000</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-300" />
          <span className="text-xs">Money out ₦1,000,000</span>
        </div>
      </div>

      <div className="h-64 py-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              orientation="right"
              tick={{ fontSize: 10 }}
              tickFormatter={(value) => {
                if (value >= 100000) return `₦${value / 1000}k`;
                return `₦${value}`;
              }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="in"
              stroke="#F6C367"
              fill="#F6C367"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="out"
              stroke="#F87171"
              fill="#F87171"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default MoneyFlowChart;
