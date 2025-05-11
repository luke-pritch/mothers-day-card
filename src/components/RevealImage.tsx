import { useState } from "react";
import { motion } from "framer-motion";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function RevealImage({
  src,
  alt,
  className = "",
}: RevealImageProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      onClick={() => setRevealed(true)}
      className="relative cursor-pointer overflow-hidden rounded-lg border border-pink-200"
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full transition-all duration-500 ease-in-out ${
          revealed ? "blur-none scale-100" : "blur-sm scale-105"
        } ${className}`}
        whileTap={{ scale: 0.98 }}
      />
      {!revealed && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 text-pink-600 text-sm font-semibold">
          Click to Reveal 🌸
        </div>
      )}
    </div>
  );
}
