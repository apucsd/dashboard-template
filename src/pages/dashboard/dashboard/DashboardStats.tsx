import { HiMiniUserGroup } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { MdStorefront } from 'react-icons/md';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';

const DashboardStats = () => {
    const data = [
        {
            name: 'Total User',
            count: '20.10K',
            title1: 'Daily user',
            total: '1025',
            icon: <HiMiniUserGroup size={24} />,
            bgColor: 'from-blue-500/10 to-blue-500/5',
            iconColor: '#4F46E5',
            textColor: '#4F46E5',
            growth: '+12.5%',
        },
        {
            name: 'Total Salon',
            count: '920',
            title1: 'Daily user',
            total: '125',
            icon: <MdStorefront size={24} />,
            bgColor: 'from-purple-500/10 to-purple-500/5',
            iconColor: '#8E3C50',
            textColor: '#8E3C50',
            growth: '+8.2%',
        },
        {
            name: 'Total Earning',
            count: '150.10K',
            title1: 'Daily revenue',
            total: '$2.5k',
            icon: <FaMoneyBillTrendUp size={24} />,
            bgColor: 'from-green-500/10 to-green-500/5',
            iconColor: '#059669',
            textColor: '#059669',
            growth: '+15.3%',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="p-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            transition: { type: 'spring', stiffness: 400 },
                        }}
                        className="overflow-hidden relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-lg"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-30`} />

                        <div className="flex relative gap-4 items-center">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.bgColor} flex items-center justify-center`}
                                style={{ color: item.iconColor }}
                            >
                                {item.icon}
                            </motion.div>

                            <div className="flex flex-1 justify-between items-center">
                                <div>
                                    <p className="mb-1 text-sm font-medium text-gray-600">{item.name}</p>
                                    <motion.h3
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-2xl font-bold"
                                        style={{ color: item.textColor }}
                                    >
                                        {item.count}
                                        <span className="ml-1 text-sm">+</span>
                                    </motion.h3>
                                </div>

                                <div className="text-right">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="mb-1 text-sm font-semibold text-green-500"
                                    >
                                        {item.growth}
                                    </motion.div>
                                    <div className="flex gap-2 items-center text-sm text-gray-500">
                                        <span>{item.title1}:</span>
                                        <span className="font-medium">{item.total}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${item.iconColor}20, ${item.iconColor})`,
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default DashboardStats;
