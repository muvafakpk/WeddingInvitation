import { motion } from 'framer-motion';

export function QuranVerse() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-5xl rounded-[2rem] border border-[#D0B16A]/25 bg-[#FFF8EE] p-8 text-center text-[#2b2a28] shadow-[0_24px_70px_rgba(0,0,0,0.1)] sm:p-10"
      >
        <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#d4af37]">Quran Verse</p>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <p className="mt-6 font-[Amiri] text-3xl leading-[2.3] sm:text-4xl">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنفُسِكُمْ أَزْوَاجًا
        </p>
        <p className="mt-4 font-[Poppins] text-lg italic text-[#4d4638]/90">
          “And among His signs is that He created for you mates...”
        </p>
        <p className="mt-3 font-[Poppins] text-sm uppercase tracking-[0.3em] text-[#d4af37]">Quran 30:21</p>
      </motion.div>
    </section>
  );
}
