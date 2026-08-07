import { motion } from "framer-motion";

const leaves = Array.from({ length: 18 });

export default function FallingLeaves() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {leaves.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 12 + Math.random() * 8;
        const delay = Math.random() * 10;
        const size = 10 + Math.random() * 12;
        const rotate = Math.random() * 360;

        return (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: `${left}vw`,
              rotate,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              x: [
                `${left}vw`,
                `${left + 3}vw`,
                `${left - 3}vw`,
                `${left}vw`,
              ],
              rotate: rotate + 360,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: size,
              height: size,
            }}
            className="absolute"
          >
            <svg
              viewBox="0 0 32 32"
              fill="#6B1D2A"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2C10 9 6 13 6 19C6 25 10 30 16 30C22 30 26 25 26 19C26 13 22 9 16 2Z" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}