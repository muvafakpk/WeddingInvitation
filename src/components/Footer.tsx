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
    <footer className="m-0 px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-4 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#D0B16A]/25 bg-[#FEF6EA] px-5 py-6 text-[#2b2a28] shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8">

        {/* Heading */}
        <div className="text-center">
          <p className="font-[Poppins] text-[9px] uppercase tracking-[0.4em] text-[#d4af37] sm:text-sm">
            Thank You
          </p>

          <h2 className="mt-2 font-[Cinzel] text-2xl leading-tight sm:mt-3 sm:text-4xl">
            May Allah Bless Our Marriage
          </h2>

          <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent sm:mt-6 sm:w-24" />
        </div>

        {/* Social Buttons */}
        <div className="mt-5 grid grid-cols-4 gap-2 sm:mt-8 sm:gap-5">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/shza__a?igsh=MXZrNDdkeHh5dmU5dg=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#D0B16A]/20 bg-white/60 px-1 py-3 transition-all duration-300 hover:bg-white hover:shadow-lg sm:rounded-2xl sm:p-5"
          >
            <FiInstagram className="text-lg sm:text-3xl" />

            <p className="mt-1.5 truncate text-[8px] font-[Poppins] sm:mt-2 sm:text-sm">
              Instagram
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919847740385"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#D0B16A]/20 bg-white/60 px-1 py-3 transition-all duration-300 hover:bg-white hover:shadow-lg sm:rounded-2xl sm:p-5"
          >
            <FiMessageCircle className="text-lg sm:text-3xl" />

            <p className="mt-1.5 truncate text-[8px] font-[Poppins] sm:mt-2 sm:text-sm">
              WhatsApp
            </p>
          </a>

          {/* Call */}
          <a
            href="tel:+919847740385"
            className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#D0B16A]/20 bg-white/60 px-1 py-3 transition-all duration-300 hover:bg-white hover:shadow-lg sm:rounded-2xl sm:p-5"
          >
            <FiPhone className="text-lg sm:text-3xl" />

            <p className="mt-1.5 truncate text-[8px] font-[Poppins] sm:mt-2 sm:text-sm">
              Call
            </p>
          </a>

          {/* Location */}
          <a
            href="#venue"
            className="flex min-w-0 flex-col items-center justify-center rounded-xl border border-[#D0B16A]/20 bg-white/60 px-1 py-3 transition-all duration-300 hover:bg-white hover:shadow-lg sm:rounded-2xl sm:p-5"
          >
            <FiMapPin className="text-lg sm:text-3xl" />

            <p className="mt-1.5 truncate text-[8px] font-[Poppins] sm:mt-2 sm:text-sm">
              Location
            </p>
          </a>

        </div>

        {/* Scroll Top */}
        <motion.a
          href="#top"
          whileHover={{ y: -3, scale: 1.03 }}
          className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-[#d4af37]/30 bg-white px-4 py-2 text-[9px] uppercase tracking-[0.22em] sm:mt-8 sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.25em]"
        >
          <FiArrowUp />
          Scroll to Top
        </motion.a>

        {/* Copyright */}
        <p className="mt-5 text-center font-[Poppins] text-[8px] text-[#8C7A5A] sm:mt-8 sm:text-sm">
          © 2026 Shaza & Salman. All rights reserved.
        </p>

      </div>
    </footer>
  );
}