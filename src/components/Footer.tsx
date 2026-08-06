import { motion } from 'framer-motion';
import { FiInstagram, FiPhone, FiMapPin, FiMessageCircle, FiArrowUp } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="px-4 pb-24 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#D0B16A]/25 bg-[#FEF6EA] p-8 text-[#2b2a28] shadow-[0_24px_70px_rgba(0,0,0,0.1)]">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#d4af37]">Thank You</p>
          <h2 className="mt-3 font-[Cinzel] text-3xl sm:text-4xl">May Allah Bless Our Marriage</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <a href="https://www.instagram.com/mofz.xx?igsh=eHo2dzc2aHZ5NWhi" className="rounded-[1.2rem] border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
            <FiInstagram className="mx-auto text-2xl" />
            <p className="mt-2 font-[Poppins] text-sm">Instagram</p>
          </a>
          <a href="https://wa.me/8129886664" className="rounded-[1.2rem] border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
            <FiMessageCircle className="mx-auto text-2xl" />
            <p className="mt-2 font-[Poppins] text-sm">WhatsApp</p>
          </a>
          <a href="tel:+918129886664" className="rounded-[1.2rem] border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
            <FiPhone className="mx-auto text-2xl" />
            <p className="mt-2 font-[Poppins] text-sm">Call</p>
          </a>
          <a href="#venue" className="rounded-[1.2rem] border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
            <FiMapPin className="mx-auto text-2xl" />
            <p className="mt-2 font-[Poppins] text-sm">Location</p>
          </a>
        </div>
        <motion.a
          href="#top"
          whileHover={{ y: -4, scale: 1.04 }}
          className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.25em]"
        >
          <FiArrowUp /> Scroll to Top
        </motion.a>
        <p className="mt-8 text-center font-[Poppins] text-sm text-[#f8f6f1]/80">© 2026 Aisha & Omar. All rights reserved.</p>
      </div>
    </footer>
  );
}
