import { motion } from "framer-motion";

interface CardProps {
  title: string;
  message: string;
  sender: string;
}

export default function MothersDayCard({ title, message, sender }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center space-y-4"
      >
        <motion.h1
          className="text-2xl font-bold text-pink-600"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {message}
        </motion.p>

        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          — {sender}
        </motion.p>
      </motion.div>
    </div>
  );
}
