import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F5EF]"
    >
      <div className="text-center px-8">

        {/* Small Ornament */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-3xl text-[#C8A95B]"
        >
          ✦
        </motion.div>

        {/* Welcome */}

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          className="font-[Cormorant_Garamond] text-6xl font-semibold text-[#40382F]"
        >
          Welcome
        </motion.h1>

        {/* Divider */}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="mx-auto mt-6 h-[2px] w-32 origin-center rounded-full bg-[#C8A95B]"
        />

        {/* Arabic */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
          className="mt-8 font-[Amiri] text-3xl text-[#B18A35]"
        >
          بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيم
        </motion.p>

        {/* Invitation */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mt-8 text-base uppercase tracking-[8px] text-[#7C7062]"
        >
          Wedding Invitation
        </motion.p>

      </div>
    </motion.div>
  );
}