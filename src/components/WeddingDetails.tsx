import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiBookOpen,
} from "react-icons/fi";

const details = [
  {
    icon: FiCalendar,
    title: "Date",
    value: "08 November 2026",
    accent: "text-[#0f6d58]",
    singleLine: true,
  },
  {
    icon: FiClock,
    title: "Time",
    value: "11:00 AM",
    accent: "text-[#0f6d58]",
    singleLine: true,
  },
  {
    icon: FiMapPin,
    title: "Venue",
    value: "Shaza’s, Mattool Street No. 10, Near NMUP School",
    accent: "text-[#0f6d58]",
    singleLine: false,
  },
  {
    icon: FiBookOpen,
    title: "Nikah",
    value: "Vedambram Juma Masjid Mattool",
    accent: "text-[#0f6d58]",
    singleLine: false,
  },
];

export function WeddingDetails() {
  return (
    <section
      id="details"
      className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
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
          {/* Small heading */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: 18,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.6,
            }}
            className="font-[Poppins] text-[10px] uppercase tracking-[0.4em] text-[#0f6d58] sm:text-sm"
          >
            Wedding Details
          </motion.p>

          {/* Main heading */}
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: 22,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-3 font-[Cinzel] text-2xl leading-tight text-[#0f6d58] sm:text-4xl"
          >
            A celebration of love, faith, and family
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
            transition={{
              duration: 0.7,
            }}
            className="mx-auto mt-4 h-px w-24 origin-center bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
          />
        </motion.div>

        {/* Details Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.15,
              },
            },
          }}
          className="mt-7 grid gap-4 md:grid-cols-2 lg:mt-9 lg:grid-cols-4 lg:gap-5"
        >
          {details.map((detail) => {
            const Icon = detail.icon;

            return (
              <motion.article
                key={detail.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                    scale: 0.96,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className="rounded-[1.5rem] border border-[#D0B16A]/25 bg-[#FFF7EE] p-5 text-center shadow-[0_18px_45px_rgba(0,0,0,0.07)] transition-shadow duration-300 hover:shadow-[0_22px_55px_rgba(15,109,88,0.12)] sm:p-6"
              >
                {/* Icon */}
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.5,
                      rotate: -10,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    },
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fbf0d8] text-2xl ${detail.accent}`}
                >
                  <Icon />
                </motion.div>

                {/* Title */}
                <motion.h3
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className="font-[Cinzel] text-xl text-[#0f6d58]"
                >
                  {detail.title}
                </motion.h3>

                {/* Details */}
                <motion.p
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 10,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  className={`mt-2 font-[Poppins] text-[0.8rem] leading-6 text-slate-600 sm:text-sm sm:leading-7 ${
                    detail.singleLine ? "whitespace-nowrap" : ""
                  }`}
                >
                  {detail.value}
                </motion.p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}