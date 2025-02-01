import { Button } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex overflow-hidden relative flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Main Content */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
            >
                <motion.h1
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="mb-4 text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                >
                    404
                </motion.h1>
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h2 className="mb-3 text-2xl font-semibold text-gray-800">Oops! Page Not Found</h2>
                    <p className="mb-8 max-w-md text-gray-600">
                        The page you are looking for might have been removed, had its name changed, or is temporarily
                        unavailable.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            type="primary"
                            onClick={() => navigate('/')}
                            className="px-8 bg-gradient-to-r from-blue-500 to-purple-600 border-none shadow-lg hover:from-blue-600 hover:to-purple-700"
                        >
                            Go Home
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-0">
                {/* Floating Circles */}
                {[...Array(8)].map((_, index) => (
                    <motion.div
                        key={`circle-${index}`}
                        className="absolute rounded-full mix-blend-multiply filter blur-sm"
                        style={{
                            background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, 255, 0.15)`,
                            width: Math.random() * 200 + 50,
                            height: Math.random() * 200 + 50,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * 100 - 50],
                            x: [0, Math.random() * 100 - 50],
                            scale: [1, 1.2, 1],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                    />
                ))}

                {/* Geometric Shapes */}
                {[...Array(6)].map((_, index) => (
                    <motion.div
                        key={`shape-${index}`}
                        className="absolute opacity-20"
                        style={{
                            width: Math.random() * 100 + 30,
                            height: Math.random() * 100 + 30,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            background: `linear-gradient(${Math.random() * 360}deg, #4F46E5, #7C3AED)`,
                            clipPath:
                                index % 2 === 0
                                    ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' // diamond
                                    : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)', // hexagon
                        }}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 0.8, 1],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}

                {/* Light Beam Effect */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background:
                            'linear-gradient(45deg, transparent 45%, rgba(79, 70, 229, 0.1) 50%, transparent 55%)',
                        backgroundSize: '200% 200%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'linear',
                    }}
                />
            </div>
        </div>
    );
};

export default ErrorPage;
