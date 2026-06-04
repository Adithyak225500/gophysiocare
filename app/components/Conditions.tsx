"use client";

import { motion } from "framer-motion";

export default function Conditions() {
  const categories = [
    {
      title: "Orthopedic Conditions",
      conditions: [
        "Lower Back Pain",
        "Neck Pain",
        "Frozen Shoulder",
        "Tennis Elbow",
        "Sciatica",
        "Arthritis",
      ],
    },
    {
      title: "Neurological Conditions",
      conditions: [
        "Stroke Rehabilitation",
        "Parkinson's Disease",
        "Spinal Cord Injury",
        "GBS",
        "Balance Disorders",
        "Neuromuscular Conditions",
      ],
    },
    {
      title: "Sports & Post-Surgical",
      conditions: [
        "ACL Rehabilitation",
        "Sports Injuries",
        "Knee Replacement Recovery",
        "Hip Replacement Recovery",
        "Post-Surgery Recovery",
        "Muscle & Ligament Injuries",
      ],
    },
  ];

  return (
    <section
      id="conditions"
      className="relative bg-black py-36 px-6 overflow-hidden"
    >
      {/* GOLD GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />

      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-yellow-400/10 blur-[220px]" />

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[8px] text-yellow-400 text-sm">
            Conditions We Treat
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            Expert Rehabilitation
          </h2>

          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
            Personalized physiotherapy programs designed
            to reduce pain, restore mobility and improve
            quality of life through evidence-based care.
          </p>
        </motion.div>

        {/* CATEGORIES */}

        <div className="grid lg:grid-cols-3 gap-8">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
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
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                bg-white/5
                backdrop-blur-2xl
                border
                border-white/10
                rounded-[40px]
                p-8
                hover:border-yellow-400/40
                hover:bg-white/10
                transition-all
                duration-500
                shadow-[0_0_50px_rgba(255,215,0,0.08)]
              "
            >
              <h3 className="text-yellow-400 text-2xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.conditions.map((condition) => (

                  <div
                    key={condition}
                    className="
                      flex
                      items-center
                      gap-3
                      bg-white/5
                      border
                      border-white/10
                      rounded-2xl
                      px-4
                      py-3
                    "
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />

                    <span className="text-white">
                      {condition}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <div
            className="
              max-w-5xl
              mx-auto
              bg-white/5
              backdrop-blur-2xl
              border
              border-white/10
              rounded-[40px]
              p-10
              text-center
            "
          >
            <h3 className="text-white text-3xl md:text-4xl font-bold">
              Not Sure Which Treatment You Need?
            </h3>

            <p className="text-gray-400 mt-6">
              Speak with our rehabilitation team and receive
              guidance on the best physiotherapy approach for
              your condition.
            </p>

            <a
              href="https://wa.me/918747912575"
              target="_blank"
              className="
                inline-block
                mt-8
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                font-semibold
                px-8
                py-4
                rounded-full
                transition
              "
            >
              Talk To Our Team
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}   