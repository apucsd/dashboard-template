import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { IoTrendingUp, IoTrendingDown } from 'react-icons/io5';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-lg border border-gray-100 shadow-lg backdrop-blur-md bg-white/90"
            >
                <p className="mb-2 text-sm font-semibold text-gray-800">{label}</p>
                {payload.map((pld: any, index: number) => (
                    <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        key={index}
                        className="flex gap-2 items-center mb-1 last:mb-0"
                    >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pld.color }} />
                        <p className="text-sm text-gray-600">
                            {pld.name}: <span className="ml-1 font-semibold">${pld.value.toLocaleString()}</span>
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        );
    }
    return null;
};

const EarningChart = () => {
    const [hoveredMonth, setHoveredMonth] = useState<string | null>(null);
    const [selectedMetric, setSelectedMetric] = useState<string>('revenue');

    const data = [
        { name: 'Jan', revenue: 4000, profit: 2400, expenses: 1600 },
        { name: 'Feb', revenue: 3000, profit: 1398, expenses: 1602 },
        { name: 'Mar', revenue: 2000, profit: 9800, expenses: 2200 },
        { name: 'Apr', revenue: 2780, profit: 3908, expenses: 1872 },
        { name: 'May', revenue: 1890, profit: 4800, expenses: 2090 },
        { name: 'Jun', revenue: 2390, profit: 3800, expenses: 1590 },
        { name: 'Jul', revenue: 3490, profit: 4300, expenses: 1810 },
        { name: 'Aug', revenue: 4200, profit: 5100, expenses: 1900 },
        { name: 'Sep', revenue: 3890, profit: 4600, expenses: 1710 },
        { name: 'Oct', revenue: 4500, profit: 5300, expenses: 1800 },
        { name: 'Nov', revenue: 4100, profit: 4900, expenses: 1800 },
        { name: 'Dec', revenue: 5200, profit: 6100, expenses: 1900 },
    ];

    const metrics = [
        { name: 'Revenue', key: 'revenue', color: '#4F46E5' },
        { name: 'Profit', key: 'profit', color: '#06B6D4' },
        { name: 'Expenses', key: 'expenses', color: '#F43F5E' },
    ];

    const getGrowthRate = (month: string) => {
        const monthIndex = data.findIndex((item) => item.name === month);
        if (monthIndex > 0) {
            const currentValue = data[monthIndex][selectedMetric as keyof (typeof data)[0]] as number;
            const previousValue = data[monthIndex - 1][selectedMetric as keyof (typeof data)[0]] as number;
            return ((currentValue - previousValue) / previousValue) * 100;
        }
        return 0;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white rounded-xl shadow-sm"
        >
            <div className="mb-6">
                <motion.h3 className="mb-4 text-xl font-semibold text-gray-800" layout>
                    Revenue Analytics
                </motion.h3>
                <div className="flex flex-wrap gap-4">
                    {metrics.map((metric, _index) => (
                        <motion.button
                            key={metric.key}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedMetric(metric.key)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                                selectedMetric === metric.key ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-50'
                            }`}
                            style={{ transformOrigin: 'center' }}
                        >
                            <div
                                className={`w-3 h-3 rounded-full transition-transform duration-200 ${
                                    selectedMetric === metric.key ? 'scale-110' : ''
                                }`}
                                style={{ backgroundColor: metric.color }}
                            />
                            <span
                                className={`text-sm ${
                                    selectedMetric === metric.key ? 'text-gray-900 font-medium' : 'text-gray-600'
                                }`}
                            >
                                {metric.name}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className="relative" style={{ height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        onMouseMove={(e) => {
                            if (e.activeLabel) {
                                setHoveredMonth(e.activeLabel);
                            }
                        }}
                        onMouseLeave={() => setHoveredMonth(null)}
                    >
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#F43F5E" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            dy={10}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            tickFormatter={(value) => `$${value.toLocaleString()}`}
                        />

                        <Tooltip content={<CustomTooltip />} />

                        <Area
                            type="monotone"
                            dataKey="expenses"
                            stroke="#F43F5E"
                            strokeWidth={2}
                            fill="url(#colorExpenses)"
                            fillOpacity={selectedMetric === 'expenses' ? 1 : 0.3}
                        />

                        <Area
                            type="monotone"
                            dataKey="profit"
                            stroke="#06B6D4"
                            strokeWidth={2}
                            fill="url(#colorProfit)"
                            fillOpacity={selectedMetric === 'profit' ? 1 : 0.3}
                        />

                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#4F46E5"
                            strokeWidth={2}
                            fill="url(#colorRevenue)"
                            fillOpacity={selectedMetric === 'revenue' ? 1 : 0.3}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="relative mt-4 h-16">
                <AnimatePresence mode="wait">
                    {hoveredMonth && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute inset-x-0 p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg"
                        >
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-medium text-gray-600">{hoveredMonth} Performance</p>
                                <div className="flex gap-2 items-center">
                                    {getGrowthRate(hoveredMonth) > 0 ? (
                                        <IoTrendingUp className="text-green-500" />
                                    ) : (
                                        <IoTrendingDown className="text-red-500" />
                                    )}
                                    <span
                                        className={`text-sm font-semibold ${
                                            getGrowthRate(hoveredMonth) > 0 ? 'text-green-500' : 'text-red-500'
                                        }`}
                                    >
                                        {Math.abs(getGrowthRate(hoveredMonth)).toFixed(1)}%
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default EarningChart;
