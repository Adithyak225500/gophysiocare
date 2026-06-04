"use client";

import { motion } from "framer-motion";

export default function RecoveryJourney() {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description:
        "Detailed physiotherapy evaluation at your home to identify pain, mobility limitations and recovery goals.",
    },
    {
      number: "02",
      title: "Personalized Plan",
      description:
        "Customized rehabilitation program designed specifically for your condition and lifestyle.",
    },
    {
      number: "03",
      title: "Treatment",
      description:
        "Hands-on therapy, exercise prescription, dry needling, cupping and rehabilitation techniques.",
    },
    {
      number: "04",
      title: "Recovery & Progress",
      description:
        "Continuous monitoring and progression until you regain confidence, movement and independence.",
    },
  ];

  return (
    <section className="relative bg-black py-36 overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-500/10 blur-[250px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-yellow-400">
            Recovery Journey
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            How We Help You Recover
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg">
            A structured rehabilitation process designed
            to deliver measurable results from the comfort
            of your home.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              className="
                bg-white/5
                backdrop-blur-2xl
                border
                border-white/10
                rounded-[35px]
                p-8
                text-center
              "
            >
              <div className="text-6xl font-bold text-yellow-400">
                {step.number}
              </div>

              <h3 className="text-white text-2xl font-bold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-5">
                {step.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}