import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiBookOpen, FiCoffee } from 'react-icons/fi';

const details = [
  { icon: FiCalendar, title: 'Date', value: '18 December 2026', accent: 'text-[#0f6d58]' },
  { icon: FiClock, title: 'Time', value: '6:30 PM', accent: 'text-[#0f6d58]' },
  { icon: FiMapPin, title: 'Venue', value: 'The Royal Grand Hall, Dubai', accent: 'text-[#0f6d58]' },
  { icon: FiBookOpen, title: 'Nikah', value: 'Ceremony & Blessings', accent: 'text-[#0f6d58]' },
  { icon: FiCoffee, title: 'Dinner', value: 'Elegant reception feast', accent: 'text-[#0f6d58]' },
];

export function WeddingDetails() {
  return (
    <section id="details" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Wedding Details</p>
          <h2 className="mt-2 font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">A celebration of love, faith, and family</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <motion.article
                key={detail.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-[#D0B16A]/25 bg-[#FFF7EE] p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf0d8] text-2xl ${detail.accent}`}>
                  <Icon />
                </div>
                <h3 className="font-[Cinzel] text-xl text-[#0f6d58]">{detail.title}</h3>
                <p className="mt-2 font-[Poppins] text-sm leading-7 text-slate-600">{detail.value}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
