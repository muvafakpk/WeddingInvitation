import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

function getTimeLeft(targetDate: Date) {
  const difference = targetDate.getTime() - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isOver: false,
  };
}

function NumberDisplay({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, scale: 0.88, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.36 }}
      className="inline-block"
    >
      {value}
    </motion.span>
  );
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    // Align updates to the real clock so each tick happens on whole seconds.
    setTimeLeft(getTimeLeft(targetDate));

    const now = Date.now();
    const msToNextSecond = 1000 - (now % 1000);

    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      // First aligned tick
      setTimeLeft(getTimeLeft(targetDate));
      // Then set regular interval every 1000ms
      intervalId = window.setInterval(() => {
        setTimeLeft(getTimeLeft(targetDate));
      }, 1000) as unknown as number;
    }, msToNextSecond) as unknown as number;

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [targetDate]);

  const values = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-5xl rounded-[1.6rem] border border-[#C8A95B]/25 bg-[#FFF8EE] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur sm:p-10"
      >
        <div className="text-center">
          <p className="mb-4 font-[Poppins] text-sm uppercase tracking-[0.35em] text-[#0f6d58]">Live Countdown</p>
          <h2 className="font-[Cinzel] text-3xl text-[#0f6d58] sm:text-4xl">Our Beautiful Journey Begins Soon</h2>
          <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        </div>
        {!timeLeft.isOver ? (
          <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {values.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#C8A95B]/20 bg-[#F7E8D9] p-2 text-center shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-4 lg:p-5">
                <div className="font-[Cinzel] text-xl font-semibold text-[#C8A95B] sm:text-3xl lg:text-5xl">
                  <NumberDisplay value={item.value} />
                </div>
                <div className="mt-1 font-[Poppins] text-[0.6rem] uppercase tracking-[0.15em] text-[#A8B3A8] sm:mt-2 sm:text-xs sm:tracking-[0.3em] lg:text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#C8A95B]/20 bg-[#0B0B0B]/5 px-5 py-10 text-center">
            <p className="font-[Cormorant_Garamond] text-2xl text-[#C8A95B]">✨</p>
            <p className="mt-3 font-[Cormorant_Garamond] text-2xl text-white">Alhamdulillah</p>
            <p className="mt-2 font-[Poppins] text-sm text-[#A8B3A8]">Our Wedding Day Has Arrived</p>
            <p className="mt-3 font-[Cormorant_Garamond] text-2xl text-[#C8A95B]">✨</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
