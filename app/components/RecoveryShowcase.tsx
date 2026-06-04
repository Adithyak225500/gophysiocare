"use client";

import { motion } from "framer-motion";

export default function RecoveryShowcase() {
  const outcomes = [
    {
      title: "Post Knee Replacement",
      percentage: "92%",
      text: "Improved mobility and independence after structured rehabilitation.",
    },
    {
      title: "Stroke Rehabilitation",
      percentage: "88%",
      text: "Enhanced balance, gait and daily functional abilities.",
    },
    {
      title: "Sports Injury Recovery",
      percentage: "95%",
      text: "Return-to-sport programs focused on strength and performance.",
    },
  ];

  return (
    <section className="relative bg-black py-36 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-500/10 blur-[250px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-yellow-400">
            Recovery Outcomes
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            Results That Matter
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
            Personalized rehabilitation programs designed to improve movement,
            confidence, strength and quality of life.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {outcomes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              className="
                rounded-[35px]
                bg-white/5
                backdrop-blur-2xl
                border
                border-white/10
                p-10
              "
            >
              <div className="text-yellow-400 text-6xl font-bold">
                {item.percentage}
              </div>

              <h3 className="text-white text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {item.text}
              </p>

              <div className="mt-8 h-3 bg-white/10 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: item.percentage,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  className="h-full bg-yellow-400"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}