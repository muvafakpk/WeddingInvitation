import { motion } from 'framer-motion';
import { FiMapPin, FiNavigation } from 'react-icons/fi';

export function Venue() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#d4af37]/25 bg-white/70 shadow-[0_24px_70px_rgba(15,109,88,0.12)] backdrop-blur lg:grid lg:grid-cols-[0.95fr_0.9fr]">
        <div className="relative min-h-[200px] overflow-hidden bg-slate-200 sm:min-h-[230px] lg:min-h-[280px]">
          <img
            src="/assets/Location.jpg"
            alt="Wedding venue ambiance"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f6d58]/80 via-[#0f6d58]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white sm:p-6">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] sm:text-xs">Wedding Venue</p>
            <h3 className="mt-1 font-[Cinzel] text-xl sm:mt-2 sm:text-2xl">Elegant celebration setting</h3>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center p-5 sm:p-6 lg:p-8"
        >
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Venue</p>
          <h2 className="mt-3 font-[Cinzel] text-3xl text-[#0f6d58]">The Royal Grand Hall</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <div className="mt-5 space-y-3 rounded-[1.25rem] border border-[#d4af37]/20 bg-[#f8f6f1] p-5">
            <div className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-xl text-[#0f6d58]" />
              <p className="font-[Poppins] text-sm leading-7 text-slate-600">
                Mattool Street No.10 Near NMUP School
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/Nurture+Spark+Digital/@12.1048924,75.2074726,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba46d615f856083:0xcad474701a3d2e85!8m2!3d12.1048924!4d75.2074726!16s%2Fg%2F11z3ktkpzq!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
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
