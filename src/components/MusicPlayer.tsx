import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMusic, FiPauseCircle, FiPlayCircle } from 'react-icons/fi';

export function MusicPlayer() {
  const [playing, setPlaying] = useState(true);

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      onClick={() => setPlaying((prev) => !prev)}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-white/80 px-4 py-3 text-[#0f6d58] shadow-[0_15px_35px_rgba(15,109,88,0.18)] backdrop-blur"
    >
      {playing ? <FiPauseCircle className="text-xl" /> : <FiPlayCircle className="text-xl" />}
      <span className="font-[Poppins] text-sm uppercase tracking-[0.2em]">{playing ? 'Pause' : 'Play'} Music</span>
      <FiMusic className="text-xl" />
    </motion.button>
  );
}
