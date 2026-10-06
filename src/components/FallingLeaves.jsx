import { motion } from "framer-motion";
import { useMemo } from "react";

const LEAF_COUNT = 24;

export default function FallingLeaves() {
  const leaves = useMemo(() => {
    return Array.from({ length: LEAF_COUNT }, (_, i) => ({
      id: i,

      // Different starting positions across the screen
      left: Math.random() * 100,

      // Different sizes
      size: 10 + Math.random() * 12,

      // Different falling speeds
      duration: 8 + Math.random() * 8,

      // Stagger the leaves
      delay: Math.random() * 8,

      // Starting rotation
      rotate: Math.random() * 360,

      // Different horizontal movement
      drift: 20 + Math.random() * 50,

      // Slightly different opacity
      opacity: 0.45 + Math.random() * 0.45,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          initial={{
            left: `${leaf.left}%`,
            top: "-8%",
            rotate: leaf.rotate,
            opacity: 0,
          }}
          animate={{
            left: [
              `${leaf.left}%`,
              `${leaf.left + 2}%`,
              `${leaf.left - 2}%`,
              `${leaf.left + 1}%`,
              `${leaf.left}%`,
            ],
            top: ["-8%", "25%", "55%", "80%", "108%"],
            rotate: [
              leaf.rotate,
              leaf.rotate + 90,
              leaf.rotate + 180,
              leaf.rotate + 270,
              leaf.rotate + 360,
            ],
            opacity: [0, leaf.opacity, leaf.opacity, leaf.opacity * 0.7, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
            ease: "linear",
          }}
          style={{
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2C11 7 6 12 6 18C6 25 10.5 30 16 30C21.5 30 26 25 26 18C26 12 21 7 16 2Z"
              fill="#6B1D2A"
            />

            <path
              d="M16 5C15 11 15 18 16 27"
              stroke="#C8A95B"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.65"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}