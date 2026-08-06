import { motion } from 'framer-motion';

const wishes = [
  { name: 'Fatima', message: 'May your marriage be blessed with peace, love, and endless joy.' },
  { name: 'Noor', message: 'Wishing you both a lifetime of happiness and beautiful memories.' },
  { name: 'Hassan', message: 'May Allah guide and bless your journey together.' },
];

export function Wishes() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Wishes</p>
          <h2 className="mt-2 font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">Messages from loved ones</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {wishes.map((wish, index) => (
            <motion.article
              key={wish.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-[#d4af37]/20 bg-white/70 p-6 shadow-[0_16px_40px_rgba(15,109,88,0.08)] backdrop-blur"
            >
              <p className="font-[Cormorant_Garamond] text-xl leading-8 text-slate-700">“{wish.message}”</p>
              <p className="mt-5 font-[Poppins] text-sm uppercase tracking-[0.25em] text-[#0f6d58]">— {wish.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
