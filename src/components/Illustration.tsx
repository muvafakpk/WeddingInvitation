import { motion } from 'framer-motion';

export function Illustration({ size = 260 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-[1.2rem] border-4 border-[#C8A95B] bg-gradient-to-b from-[#fffaf6] to-[#f7f2e8] p-4 shadow-[0_30px_80px_rgba(8,8,8,0.28)]"
      >
        <svg width={size} height={size} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <rect x="6" y="6" width="288" height="288" rx="20" fill="#f7f2e8" stroke="#C8A95B" strokeWidth="4" />
          <g transform="translate(45,45) scale(0.65)" fill="#2E3B33">
            <path d="M60 120c-18 0-32-14-32-32s14-32 32-32 32 14 32 32-14 32-32 32z" fill="#163D2D" />
            <path d="M180 120c-18 0-32-14-32-32s14-32 32-32 32 14 32 32-14 32-32 32z" fill="#163D2D" />
            <rect x="46" y="136" width="108" height="64" rx="14" fill="#EDE6DC" />
            <rect x="146" y="136" width="108" height="64" rx="14" fill="#EDE6DC" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

export default Illustration;
