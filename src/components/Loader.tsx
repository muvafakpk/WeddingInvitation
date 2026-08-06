import { motion } from 'framer-motion';
import { GiPresent } from 'react-icons/gi';

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(15,109,88,0.24),_transparent_60%),_linear-gradient(135deg,_#f8f6f1,_#fff)]"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="rounded-full border border-emerald-800/20 bg-white/70 p-8 shadow-[0_25px_80px_rgba(15,109,88,0.14)] backdrop-blur-xl"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
          className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-emerald-900/20 border-t-[#d4af37]"
        >
          <GiPresent className="text-4xl text-[#0f6d58]" />
        </motion.div>
        <p className="mt-4 text-center font-[Cormorant_Garamond] text-lg text-[#0f6d58]">
          Preparing your invitation...
        </p>
      </motion.div>
    </motion.div>
  );
}
