import { motion } from "framer-motion";
import Petal from "./Petal";

interface CardProps {
  title: string;
  message: string;
  sender: string;
}

const textVariant = (delay: number) => ({
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { delay, duration: 0.6 },
});

export default function MothersDayCard({ title, message, sender }: CardProps) {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 overflow-x-hidden overflow-y-auto py-10 space-y-10">
      {/* Petal Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Petal key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Card 1 - Greeting */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10"
      >
        <motion.h1
          className="text-3xl font-bold text-pink-600 text-center"
          {...textVariant(0.2)}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-gray-700 text-base text-center"
          {...textVariant(0.4)}
        >
          {message}
        </motion.p>
        <motion.p
          className="text-sm text-gray-500 text-center"
          {...textVariant(0.6)}
        >
          {sender}
        </motion.p>
      </motion.div>

      {/* Card 2 - Why I Love You */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10"
      >
        <motion.h2
          className="text-xl font-semibold text-pink-500 text-center"
          {...textVariant(0.2)}
        >
          Why I Love You
        </motion.h2>
        <motion.p className="text-gray-600 text-center" {...textVariant(0.4)}>
          Your kindness, strength, and unconditional love inspire me every day.
        </motion.p>
      </motion.div>

      {/* Card 3 - Favorite Memory */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10"
      >
        <motion.h2
          className="text-xl font-semibold text-pink-500 text-center"
          {...textVariant(0.2)}
        >
          A Favorite Memory
        </motion.h2>
        <motion.p className="text-gray-600 text-center" {...textVariant(0.4)}>
          I will always cherish the moments you took time out of your day to
          prioritize me. From the countless school pickups to the guitar
          lessons, laundry at HCC on the weekends. You were always there for me,
          and I will always be grateful for that. I love you so much, Mom!
        </motion.p>
        <div className="rounded-xl overflow-hidden border border-pink-200">
          <img
            src="/images/bday.png"
            alt="Favorite memory with mom"
            className="w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Card 4 - Photo Gallery */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10"
      >
        <motion.h2
          className="text-xl font-semibold text-pink-500 text-center"
          {...textVariant(0.2)}
        >
          Some of My Favorite Pictures of You
        </motion.h2>
        <img src="/images/ja.png" alt="Memory 4" className="rounded-lg" />
        <div className="grid grid-cols-2 gap-2">
          <img src="/images/al.png" alt="Memory 1" className="rounded-lg" />
          <img src="/images/cold.png" alt="Memory 2" className="rounded-lg" />
          <img src="/images/joint.png" alt="Memory 3" className="rounded-lg" />
          <img
            src="/images/wedding.png"
            alt="Memory 4"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  );
}
