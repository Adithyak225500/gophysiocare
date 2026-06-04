"use client";

import { motion } from "framer-motion";

export default function Trust() {
  const stats = [
    {
      number: "8000+",
      label: "Patients Assisted",
    },
    {
      number: "5000+",
      label: "Home Visits",
    },
    {
      number: "5+",
      label: "Years Experience",
    },
    {
      number: "98%",
      label: "Patient Satisfaction",
    },
  ];

  return (
    <section className="relative py-36 bg-black overflow-hidden">

      {/* GOLD GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            Trusted Care
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            Results That
            <br />
            Speak For Themselves
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg">
            Professional physiotherapy and rehabilitation
            services delivered directly at home across Bangalore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
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
                duration: 1,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white/5
                backdrop-blur-2xl
                border
                border-yellow-500/20
                rounded-[35px]
                p-10
                text-center
                shadow-[0_0_60px_rgba(255,215,0,0.1)]
              "
            >
              <h3 className="text-yellow-400 text-5xl font-bold">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-4">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}