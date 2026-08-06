import { motion } from 'framer-motion';

const timeline = [
  { title: 'Engagement', date: 'May 2026', description: 'A cherished beginning filled with joy and blessings.' },
  { title: 'Nikah', date: '01 November2026', description: 'The sacred ceremony with families and loved ones.' },
  { title: 'Reception', date: '01 November 2026', description: 'A grand celebration of love and togetherness.' },
  { title: 'Dinner', date: 'After reception', description: 'An intimate gathering for heartfelt memories.' },
];

export function Timeline() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Timeline</p>
          <h2 className="mt-2 font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">Moments we cherish</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <div className="mt-10 space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col rounded-[1.5rem] border border-[#d4af37]/20 bg-white/70 p-6 shadow-[0_15px_40px_rgba(15,109,88,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="font-[Cinzel] text-xl text-[#0f6d58]">{item.title}</h3>
                <p className="mt-2 font-[Poppins] text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
              <div className="mt-4 rounded-full border border-[#d4af37]/30 bg-[#f8f6f1] px-4 py-2 font-[Poppins] text-sm uppercase tracking-[0.25em] text-[#0f6d58] md:mt-0">
                {item.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
