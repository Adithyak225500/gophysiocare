"use client";

import { motion } from "framer-motion";

export default function WhyChoose() {
  const features = [
    {
      title: "Home Visits Across Bangalore",
      description:
        "Professional physiotherapy services delivered directly to your home across Bangalore.",
      icon: "🏠",
    },
    {
      title: "One-to-One Care",
      description:
        "Every session is focused entirely on you with personalized rehabilitation plans.",
      icon: "👨‍⚕️",
    },
    {
      title: "Certified Professionals",
      description:
        "Experienced physiotherapists using evidence-based treatment approaches.",
      icon: "🎓",
    },
    {
      title: "Orthopedic & Neuro Rehab",
      description:
        "Specialized care for orthopedic injuries, neurological conditions and post-surgical recovery.",
      icon: "🦴",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Appointments designed around your schedule for maximum convenience.",
      icon: "📅",
    },
    {
      title: "Results-Driven Recovery",
      description:
        "Focused treatment plans that prioritize long-term recovery and independence.",
      icon: "📈",
    },
  ];

  return (
    <section
      className="relative bg-black py-40 overflow-hidden"
      id="whychoose"
    >
      {/* GOLD AMBIENT LIGHT */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-yellow-400 uppercase tracking-[8px]"
        >
          Why Choose Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-center
            text-white
            text-5xl
            md:text-7xl
            font-bold
            mt-6
          "
        >
          Why Patients Trust
          <br />
          GoPhysioCare
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            text-center
            text-gray-400
            max-w-3xl
            mx-auto
            mt-8
            text-lg
          "
        >
          Delivering premium rehabilitation services with clinical expertise,
          convenience and personalized care directly at your doorstep.
        </motion.p>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-yellow-500/20
                bg-white/5
                backdrop-blur-2xl
                p-8
                shadow-[0_0_60px_rgba(255,215,0,0.08)]
              "
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-white text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300" />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}