import { motion } from "framer-motion";
import { FiMapPin, FiNavigation, FiArrowUp } from "react-icons/fi";

export function Footer() {
  return (
    <footer
      id="venue"
      className="px-4 pb-6 pt-8 sm:px-6 sm:pb-8 sm:pt-10 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-[#d4af37]/25 bg-[#fffaf2] px-6 py-8 text-center shadow-[0_18px_55px_rgba(15,109,88,0.08)] sm:px-10 sm:py-10"
      >
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37] sm:w-14" />
          <span className="text-xs text-[#d4af37]">✦</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4af37] sm:w-14" />
        </div>

        {/* Invitation */}
        <p className="mt-4 font-[Poppins] text-[9px] uppercase tracking-[0.4em] text-[#b28a25] sm:mt-5 sm:text-[10px]">
          With Love & Blessings
        </p>

        <h2 className="mt-3 font-[Cinzel] text-2xl leading-tight text-[#0f6d58] sm:text-3xl">
          Together with our families
        </h2>

        <p className="mx-auto mt-4 max-w-lg font-[Cormorant_Garamond] text-xl leading-[1.45] text-[#555b56] sm:text-2xl">
          We joyfully invite you to share in the happiness of our wedding
          celebration.
        </p>

        <p className="mx-auto mt-3 max-w-lg font-[Cormorant_Garamond] text-lg leading-[1.45] text-[#77736c] sm:text-xl">
          Your presence, prayers, and blessings would make our special day even
          more meaningful.
        </p>

        {/* Small divider */}
        <div className="mx-auto my-5 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-[#d4af37]/60 sm:w-14" />
          <span className="text-[10px] text-[#d4af37]">❖</span>
          <span className="h-px w-10 bg-[#d4af37]/60 sm:w-14" />
        </div>

        {/* Venue */}
        <p className="font-[Poppins] text-[9px] uppercase tracking-[0.4em] text-[#b28a25]">
          Venue
        </p>

        <h3 className="mt-2 font-[Cinzel] text-2xl text-[#0f6d58] sm:text-3xl">
          Shaza's
        </h3>

        <FiMapPin className="mx-auto mt-3 text-xl text-[#0f6d58]" />

        <p className="mt-2 font-[Poppins] text-xs leading-6 text-[#666b67] sm:text-sm">
          Mattool Street No.10
          <br />
          Near NMUP School
        </p>

        {/* Google Maps */}
        <a
          href="https://www.google.com/maps/place/11%C2%B059'28.0%22N+75%C2%B016'31.2%22E/@11.991117,75.2727701,17z/data=!3m1!4b1!4m4!3m3!8m2!3d11.991117!4d75.275345!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 font-[Poppins] text-[9px] font-semibold uppercase tracking-[0.2em] text-[#111] shadow-[0_8px_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:-translate-y-1 sm:px-7 sm:text-[10px]"
        >
          <FiNavigation />
          Location
        </a>

        {/* Bottom ornament */}
        <div className="mx-auto mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-[#d4af37]/60 sm:w-14" />
          <span className="text-[10px] text-[#d4af37]">✦</span>
          <span className="h-px w-10 bg-[#d4af37]/60 sm:w-14" />
        </div>

        {/* Back to top */}
        <motion.a
          href="#top"
          whileHover={{ y: -2 }}
          className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white/80 px-4 py-2 font-[Poppins] text-[8px] uppercase tracking-[0.2em] text-[#666] shadow-sm sm:text-[9px]"
        >
          <FiArrowUp />
          Back to Top
        </motion.a>

        <p className="mt-4 font-[Poppins] text-[7px] text-[#9b8c70] sm:text-[8px]">
          © 2026 Shaza & Salman
        </p>
      </motion.div>
    </footer>
  );
}