import { motion } from "framer-motion";
import Petal from "./Petal";
import RevealImage from "./RevealImage";

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

// ...imports remain unchanged

export default function MothersDayCard({ title, message, sender }: CardProps) {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 overflow-x-hidden overflow-y-auto py-10 space-y-10">
      {/* Petal Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <Petal key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Decorative Divider */}
      <div className="text-3xl mb-2">🌼🌻🪻🌼🌻🪻</div>

      {/* Card 1 - Greeting */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10 border border-pink-200"
      >
        <div className="text-2xl mb-2 text-center">🌸🌸</div>
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
          className="text-gray-700 text-base text-center"
          {...textVariant(0.4)}
        >
          I love you so much mom and I am forever grateful for everything you
          do. I hope you have a wonderful day filled with love and joy!
        </motion.p>
        <motion.p
          className="text-sm text-gray-500 text-center"
          {...textVariant(0.6)}
        >
          {sender}
        </motion.p>
      </motion.div>

      {/* Decorative Divider */}
      <div className="text-3xl mt-2">🎉🍰🎈🎉🍰🎈</div>

      {/* Card 2 - Favorite Memory */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10 border border-pink-200"
      >
        <div className="text-2xl mb-2 text-center">🧺🎸</div>
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
          <RevealImage src="/images/bday.png" alt="Favorite memory with mom" />
        </div>
      </motion.div>

      {/* Decorative Divider */}
      <div className="text-3xl mt-2">❤️🩷❤️🩷❤️🩷</div>

      {/* Card 3 - Why I Love You */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10 border border-pink-200"
      >
        <div className="text-2xl mb-2 text-center">🌷🪻</div>
        <motion.h2
          className="text-xl font-semibold text-pink-500 text-center"
          {...textVariant(0.2)}
        >
          Why I Love You
        </motion.h2>
        <motion.p className="text-gray-600 text-center" {...textVariant(0.4)}>
          I love you for so many reasons. You are the most caring and selfless
          person I know. You always put others before yourself. You taught me
          the importance of kindness and compassion. You are my biggest
          supporter and always believe in me, even when I don't believe in
          myself.
        </motion.p>
      </motion.div>

      {/* Decorative Divider */}
      <div className="text-3xl mt-2">📸📸📸📸📸📸</div>

      {/* Card 4 - Photo Gallery */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 w-[90%] max-w-md mx-auto space-y-4 z-10 border border-pink-200"
      >
        <motion.h2
          className="text-xl font-semibold text-pink-500 text-center"
          {...textVariant(0.2)}
        >
          Some of My Favorite Pictures of You
        </motion.h2>

        <RevealImage src="/images/ja.png" alt="Memory 4" />

        <div className="grid grid-cols-2 gap-2">
          <RevealImage src="/images/al.png" alt="Memory 1" />
          <RevealImage src="/images/cold.png" alt="Memory 2" />
          <RevealImage src="/images/joint.png" alt="Memory 3" />
          <RevealImage src="/images/wedding.png" alt="Memory 4" />
        </div>
      </motion.div>
    </div>
  );
}
