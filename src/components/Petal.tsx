import { motion } from "framer-motion";

export default function Petal({ delay = 0 }: { delay?: number }) {
  const left = `${Math.random() * 100}%`;
  const size = Math.random() * 20 + 20; // 20-40px

  // Random pastel pinks and whites
  const colors = ["#FFB7C5", "#FFC0CB", "#FFDDE4", "#FFF0F5", "#FF69B4"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className="absolute"
      style={{ left, width: size, height: size }}
      animate={{ y: "110vh", rotate: Math.random() > 0.5 ? 360 : -360 }}
      transition={{
        duration: 10 + Math.random() * 5,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill={color}
        className="w-full h-full opacity-70"
      >
        {/* Teardrop / Petal shape */}
        <path d="M12 0C8 8 0 12 12 24C24 12 16 8 12 0Z" />
      </svg>
    </motion.div>
  );
}
