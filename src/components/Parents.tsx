import { motion } from 'framer-motion';

const parents = [
  {
    title: 'Bride Parents',
    names: ['Mr. & Mrs. Rahman', 'With love and blessings'],
  },
  {
    title: 'Groom Parents',
    names: ['Mr. & Mrs. Khalid', 'With heartfelt joy and prayers'],
  },
];

export function Parents() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Parents</p>
          <h2 className="mt-2 font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">With gratitude and blessings</h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {parents.map((parent, index) => (
            <motion.article
              key={parent.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[1.8rem] border border-[#D0B16A]/25 bg-[#FFF6EA] p-8 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur"
            >
              <h3 className="font-[Cinzel] text-2xl text-[#0f6d58]">{parent.title}</h3>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              <p className="mt-4 font-[Cormorant_Garamond] text-xl leading-9 text-slate-700">{parent.names[0]}</p>
              <p className="mt-2 font-[Poppins] text-sm uppercase tracking-[0.25em] text-[#0f6d58]/80">{parent.names[1]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
