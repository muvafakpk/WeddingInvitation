import { motion } from 'framer-motion';
import { FiMapPin, FiNavigation } from 'react-icons/fi';

export function Venue() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#d4af37]/25 bg-white/70 shadow-[0_24px_70px_rgba(15,109,88,0.12)] backdrop-blur lg:grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-h-[260px] bg-slate-200 sm:min-h-[320px]">
          <iframe
            title="Wedding Venue"
            src="https://www.google.com/maps?q=Dubai%20Royal%20Grand%20Hall&z=14&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center p-6 sm:p-8 lg:p-10"
        >
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Venue</p>
          <h2 className="mt-3 font-[Cinzel] text-3xl text-[#0f6d58]">The Royal Grand Hall</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <div className="mt-6 space-y-4 rounded-[1.5rem] border border-[#d4af37]/20 bg-[#f8f6f1] p-6">
            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-xl text-[#0f6d58]" />
              <p className="font-[Poppins] text-sm leading-7 text-slate-600">
                Al Barsha, Dubai, United Arab Emirates
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dubai%20Royal%20Grand%20Hall"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-[#d4af37] px-5 py-3 font-[Poppins] text-sm font-semibold uppercase tracking-[0.25em] text-[#111111]"
            >
              <FiNavigation /> Open Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
