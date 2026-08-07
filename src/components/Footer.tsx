import { motion } from 'framer-motion';
import {
  FiInstagram,
  FiPhone,
  FiMapPin,
  FiMessageCircle,
  FiArrowUp,
} from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="px-4 pb-24 pt-7 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#D0B16A]/25 bg-[#FEF6EA] p-6 sm:p-8 text-[#2b2a28] shadow-[0_24px_70px_rgba(0,0,0,0.10)]">

        {/* Heading */}
        <div className="text-center">
          <p className="font-[Poppins] text-xs sm:text-sm uppercase tracking-[0.35em] text-[#d4af37]">
            Thank You
          </p>

          <h2 className="mt-3 font-[Cinzel] text-2xl sm:text-4xl">
            May Allah Bless Our Marriage
          </h2>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>

        {/* Social Buttons */}
        <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-5">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mofz.xx?igsh=eHo2dzc2aHZ5NWhi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-2xl border border-[#D0B16A]/20 bg-white/60 p-3 sm:p-5 transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <FiInstagram className="text-xl sm:text-3xl" />
            <p className="mt-2 text-[10px] sm:text-sm font-[Poppins]">
              Instagram
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918129886664"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-2xl border border-[#D0B16A]/20 bg-white/60 p-3 sm:p-5 transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <FiMessageCircle className="text-xl sm:text-3xl" />
            <p className="mt-2 text-[10px] sm:text-sm font-[Poppins]">
              WhatsApp
            </p>
          </a>

          {/* Call */}
          <a
            href="tel:+918129886664"
            className="flex flex-col items-center justify-center rounded-2xl border border-[#D0B16A]/20 bg-white/60 p-3 sm:p-5 transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <FiPhone className="text-xl sm:text-3xl" />
            <p className="mt-2 text-[10px] sm:text-sm font-[Poppins]">
              Call
            </p>
          </a>

          {/* Location */}
          <a
            href="#venue"
            className="flex flex-col items-center justify-center rounded-2xl border border-[#D0B16A]/20 bg-white/60 p-3 sm:p-5 transition-all duration-300 hover:bg-white hover:shadow-lg"
          >
            <FiMapPin className="text-xl sm:text-3xl" />
            <p className="mt-2 text-[10px] sm:text-sm font-[Poppins]">
              Location
            </p>
          </a>

        </div>

        {/* Scroll Top */}
        <motion.a
          href="#top"
          whileHover={{ y: -4, scale: 1.04 }}
          className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white px-5 py-3 text-xs sm:text-sm uppercase tracking-[0.25em]"
        >
          <FiArrowUp />
          Scroll to Top
        </motion.a>

        {/* Copyright */}
        <p className="mt-8 text-center text-xs sm:text-sm text-[#8C7A5A] font-[Poppins]">
          © 2026 Shaza & Salman. All rights reserved.
        </p>

      </div>
    </footer>
  );
}