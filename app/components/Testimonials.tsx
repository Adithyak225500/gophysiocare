"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Orthopedic Patient",
      treatment: "Knee Rehabilitation",
      review:
        "The home physiotherapy sessions helped me recover much faster after my surgery. Professional care without leaving home.",
    },
    {
      name: "Stroke Recovery Patient",
      treatment: "Neuro Rehabilitation",
      review:
        "The personalized treatment plan improved my mobility and confidence significantly. The attention to detail was outstanding.",
    },
    {
      name: "Sports Injury Patient",
      treatment: "Sports Rehabilitation",
      review:
        "Returned to training sooner than expected. Structured recovery and strength conditioning made a huge difference.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-black py-36 overflow-hidden"
    >
      {/* GOLD GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-500/10 blur-[220px]" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-yellow-400 mb-5">
            Testimonials
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold">
            Recovery Stories
            <br />
            That Inspire Confidence
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8">
            Real patients. Real recovery journeys. Real results.
          </p>
        </motion.div>

        {/* CARDS */}

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                relative
                rounded-[35px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-10
                overflow-hidden
              "
            >
              {/* GOLD ACCENT */}

              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300" />

              {/* STARS */}

              <div className="flex gap-1 mb-6 text-yellow-400 text-xl">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed text-lg">
                "{item.review}"
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">

                <h3 className="text-white font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-yellow-400 mt-1">
                  {item.treatment}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}