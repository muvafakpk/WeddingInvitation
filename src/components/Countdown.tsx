import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

function getTimeLeft(targetDate: Date) {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isOver: true,
    };
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
      initial={{
        opacity: 0,
        y: 8,
        scale: 0.85,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="inline-block"
    >
      {value}
    </motion.span>
  );
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));

    const now = Date.now();
    const msToNextSecond = 1000 - (now % 1000);

    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      setTimeLeft(getTimeLeft(targetDate));

      intervalId = window.setInterval(() => {
        setTimeLeft(getTimeLeft(targetDate));
      }, 1000);
    }, msToNextSecond);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [targetDate]);

  const values = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-5xl rounded-[1.8rem] border border-[#C8A95B]/25 bg-[#FFF8EE] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.10)] sm:p-10"
      >
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="text-center"
        >
          {/* Small label */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 15,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-[Poppins] text-[10px] uppercase tracking-[0.4em] text-[#0f6d58] sm:text-sm"
          >
            Our Special Day
          </motion.p>

          {/* Main heading */}
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{ duration: 0.7 }}
            className="font-[Cinzel] text-2xl leading-tight text-[#0f6d58] sm:text-4xl"
          >
            Our Beautiful Journey Begins Soon
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                scaleX: 0,
              },
              visible: {
                opacity: 1,
                scaleX: 1,
              },
            }}
            transition={{ duration: 0.7 }}
            className="mx-auto my-5 h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          />
        </motion.div>

        {!timeLeft.isOver ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4"
          >
            {values.map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.94,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-[#C8A95B]/20 bg-[#F7E8D9] p-2 text-center shadow-[0_10px_25px_rgba(0,0,0,0.08)] sm:p-4 lg:p-5"
              >
                <div className="font-[Cinzel] text-xl font-semibold text-[#C8A95B] sm:text-3xl lg:text-5xl">
                  <NumberDisplay value={item.value} />
                </div>

                <div className="mt-1 font-[Poppins] text-[0.55rem] uppercase tracking-[0.12em] text-[#8C9A91] sm:mt-2 sm:text-xs sm:tracking-[0.3em] lg:text-sm">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="rounded-2xl border border-[#C8A95B]/20 bg-[#F7E8D9] px-5 py-8 text-center"
          >
            <p className="font-[Cormorant_Garamond] text-2xl text-[#C8A95B]">
              ✨
            </p>

            <p className="mt-3 font-[Cormorant_Garamond] text-2xl text-[#0f6d58]">
              Alhamdulillah
            </p>

            <p className="mt-2 font-[Poppins] text-sm text-[#8C9A91]">
              Our Wedding Day Has Arrived
            </p>

            <p className="mt-3 font-[Cormorant_Garamond] text-2xl text-[#C8A95B]">
              ✨
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}