import { motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d4af37]/25 bg-white/70 p-8 shadow-[0_20px_60px_rgba(15,109,88,0.1)] backdrop-blur md:p-12">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">RSVP</p>
          <h2 className="mt-2 font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">Kindly let us know</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit}
            className="mt-10 grid gap-5 md:grid-cols-2"
          >
            <input className="rounded-2xl border border-[#d4af37]/30 bg-[#f8f6f1] px-4 py-3 outline-none ring-0" placeholder="Name" />
            <input className="rounded-2xl border border-[#d4af37]/30 bg-[#f8f6f1] px-4 py-3 outline-none ring-0" placeholder="Phone" />
            <input className="rounded-2xl border border-[#d4af37]/30 bg-[#f8f6f1] px-4 py-3 outline-none ring-0" placeholder="Guests" />
            <select className="rounded-2xl border border-[#d4af37]/30 bg-[#f8f6f1] px-4 py-3 outline-none ring-0">
              <option>Will Attend</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <textarea className="md:col-span-2 min-h-[120px] rounded-2xl border border-[#d4af37]/30 bg-[#f8f6f1] px-4 py-3 outline-none ring-0" placeholder="Message" />
            <button type="submit" className="md:col-span-2 rounded-full border border-[#d4af37] bg-[#d4af37] px-6 py-3 font-[Poppins] text-sm font-semibold uppercase tracking-[0.25em] text-[#111111]">
              Submit RSVP
            </button>
          </motion.form>
        ) : (
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mt-10 rounded-[1.6rem] border border-emerald-800/20 bg-[#f8f6f1] p-8 text-center">
            <FiCheckCircle className="mx-auto text-5xl text-[#0f6d58]" />
            <h3 className="mt-4 font-[Cinzel] text-2xl text-[#0f6d58]">Thank you for your response</h3>
            <p className="mt-3 font-[Poppins] text-sm leading-7 text-slate-600">We are delighted to have you join us in this blessed celebration.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
