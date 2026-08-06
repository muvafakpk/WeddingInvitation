import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const couple = [
  {
    name: 'Shaza',
    role: 'The bride — graceful and radiant.',
  },
  {
    name: 'Salman',
    role: 'The groom — kind and devoted.',
  },
];

export function Couple() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#d4af37]/25 bg-white/60 p-8 shadow-[0_20px_60px_rgba(15,109,88,0.1)] backdrop-blur md:p-12">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Bride & Groom</p>
          <h2 className="mt-2 font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">Two hearts, one promise</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          {couple.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-[360px] w-[260px] items-end justify-center overflow-visible rounded-[1.2rem] p-2 sm:h-[420px] sm:w-[320px]">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="arch-frame absolute -top-6 h-[95%] w-[92%] overflow-hidden rounded-[28px] border-4 border-[#C8A95B] bg-[#fbf6ee] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                      <img src="/assets/couple-portrait.svg" alt="Couple portrait" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-[Cormorant_Garamond] text-2xl text-[#C8A95B]">{person.name}</h3>
              <p className="mx-auto mt-3 max-w-sm font-[Poppins] text-sm leading-7 text-[#6b6b6b]">{person.role}</p>
            </motion.div>
          ))}
          <div className="hidden lg:flex justify-center">
            <div className="rounded-full border border-[#d4af37]/30 bg-[#f8f6f1] p-4 text-3xl text-[#d4af37] shadow-sm">
              <FiHeart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
