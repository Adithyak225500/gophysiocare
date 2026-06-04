"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "🦴",
      title: "Orthopedic Rehabilitation",
      subtitle: "Restore movement, reduce pain and regain confidence.",
      conditions: [
        "Cervical Pain",
        "Shoulder Pain",
        "Lower Back Pain",
        "Hip Pain",
        "Knee Pain",
        "Frozen Shoulder",
      ],
    },
    {
      icon: "🧠",
      title: "Neuro Rehabilitation",
      subtitle: "Helping patients regain independence and function.",
      conditions: [
        "Stroke Rehabilitation",
        "Parkinson's Disease",
        "Spinal Cord Injury",
        "GBS",
        "Hemiplegia",
        "Paraplegia",
      ],
    },
    {
      icon: "👶",
      title: "Pediatric Physiotherapy",
      subtitle: "Supporting growth and developmental milestones.",
      conditions: [
        "Delayed Milestones",
        "ADHD",
        "Postural Correction",
        "Balance Training",
        "Motor Development",
      ],
    },
    {
      icon: "🏥",
      title: "Post-Surgery Rehabilitation",
      subtitle: "Guided recovery after surgery and trauma.",
      conditions: [
        "ACL Reconstruction",
        "TKR Recovery",
        "THR Recovery",
        "Fracture Rehabilitation",
      ],
    },
    {
      icon: "🏃",
      title: "Sports Rehabilitation",
      subtitle: "Return stronger, faster and safer.",
      conditions: [
        "Sports Injuries",
        "Muscle Strains",
        "Ligament Injuries",
        "Performance Recovery",
      ],
    },
    {
      icon: "✨",
      title: "Specialized Therapies",
      subtitle: "Advanced techniques for faster recovery.",
      conditions: [
        "Dry Needling",
        "Cupping Therapy",
        "Exercise Therapy",
        "Strength Training",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-black py-36 overflow-hidden"
    >
      {/* GOLD LIGHTS */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-yellow-400/10 blur-[220px]" />

      {/* HEADER */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            Services
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-5">
            Comprehensive
            <br />
            Recovery Solutions
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8">
            Premium physiotherapy and rehabilitation services
            delivered directly to your doorstep anywhere in Bangalore.
          </p>
        </motion.div>

        {/* CARDS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
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
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                shadow-[0_0_50px_rgba(255,215,0,0.08)]
              "
            >
              {/* TOP GOLD BAR */}

              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300" />

              {/* ICON */}

              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              {/* TITLE */}

              <h3 className="text-white text-2xl font-bold">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {service.subtitle}
              </p>

              {/* CONDITIONS */}

              <div className="mt-8 space-y-3">

                {service.conditions.map((condition) => (

                  <div
                    key={condition}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-yellow-400 rounded-full" />

                    <span className="text-gray-300">
                      {condition}
                    </span>
                  </div>

                ))}

              </div>

              {/* GLOW */}

              <div
                className="
                  absolute
                  -bottom-20
                  left-1/2
                  -translate-x-1/2
                  w-[250px]
                  h-[250px]
                  bg-yellow-500/10
                  blur-[100px]
                "
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}