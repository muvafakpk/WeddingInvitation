import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const images = [
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
];

export function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Gallery</p>
          <h2 className="mt-2 font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">Cherished moments</h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <motion.button
              key={image + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveImage(image)}
              className="mb-4 block w-full overflow-hidden rounded-[1.4rem] border border-[#d4af37]/20 shadow-[0_12px_30px_rgba(15,109,88,0.12)]"
            >
              <img src={image} alt="Wedding gallery" className="h-full w-full object-cover transition duration-500 hover:scale-110" />
            </motion.button>
          ))}
        </div>
      </div>
      {activeImage && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur">
          <div className="relative max-w-4xl rounded-[1.8rem] bg-white p-3 shadow-2xl">
            <button onClick={() => setActiveImage(null)} className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-[#0f6d58]">
              <FiX />
            </button>
            <img src={activeImage} alt="Selected gallery item" className="max-h-[75vh] rounded-[1.4rem] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
