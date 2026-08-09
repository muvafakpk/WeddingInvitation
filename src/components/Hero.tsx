import { motion } from 'framer-motion';

interface HeroProps {
  brideName: string;
  groomName: string;
}

export function Hero({ brideName, groomName }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-start justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-12 lg:px-8 sm:items-center md:min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,91,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(16,76,58,0.18),_transparent_20%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(200,169,91,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,91,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
     <motion.div
  animate={{
    rotate: [-2, 2, -2],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute top-0 -left-10 z-30 origin-top"
>
  <img
    src="/assets/bulb.png"
    alt="Bulbs"
    draggable={false}
    className="w-[160px] md:w-[200px] lg:w-[250px] select-none"
  />
</motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-[58rem] flex-col items-center gap-8 rounded-[2rem] border border-[#C8A95B]/20 bg-[#FCF5EB]/95 p-6 shadow-[0_40px_100px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:p-7 md:p-8 lg:p-10 lg:min-h-[48rem]"
      >
        <div className="flex w-full flex-col items-center gap-4 text-center text-[#2b2a28]">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C8A95B]/80">Forever Begins here !</p>
          <div className="text-[2.6rem] font-[Cinzel] uppercase leading-[0.95] tracking-[0.12em] text-[#2b2a28] sm:text-[4rem] lg:text-[5rem]">
            <span className="block">{brideName}</span>
            <span className="block text-[#C8A95B] text-3xl sm:text-5xl">&amp;</span>
            <span className="block">{groomName}</span>
          </div>
          <p className="whitespace-nowrap text-sm uppercase tracking-[0.35em] text-[#7d715d] sm:text-base">
            01 November 2026 
          </p>
          <p className="whitespace-nowrap text-sm uppercase tracking-[0.35em] text-[#B7B7B7] sm:text-base">
            • 11:00 AM
          </p>
        </div>

<div className="relative w-full max-w-[34rem] overflow-visible rounded-[3.2rem] border-4 border-[#D4B656] bg-[#F7E3CB] px-4 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.11)] sm:max-w-[36rem] sm:px-5 sm:py-5 lg:max-w-[40rem] lg:py-6">
          <div className="absolute left-1/2 top-0 h-10 w-36 -translate-x-1/2 rounded-b-[2rem] bg-[#d9c293]" />
          <div className="relative mx-auto w-full overflow-hidden rounded-[2.8rem] rounded-t-[5.8rem] bg-[#F5E6D1] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)] sm:max-w-[34rem] lg:max-w-full">
            <div className="relative h-[28rem] w-full overflow-hidden rounded-[2.6rem] rounded-t-[5.4rem] bg-[#F6E5D3] sm:h-[32rem] lg:h-[36rem]">
              <img
                src="/assets/shaza.jpeg"
                alt="Shaza and Salman"
                onError={(event) => {
                  const target = event.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/assets/couple-portrait.svg';
                }}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="max-w-2xl text-center text-sm leading-7 text-[#B7B7B7] sm:text-base">
          Join us in celebrating a timeless union with elegance, grace, and love.
        </p>
      </motion.div>
    </section>
  );
}
