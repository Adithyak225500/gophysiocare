"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Gowri Gajendra",
      role: "BPT, MPT Orthopedics",
      experience: "4+ Years Experience",
      description:
        "Specialized in Orthopedic Rehabilitation, Neuro Rehabilitation, Post-Surgical Recovery, Dry Needling and Evidence-Based Physiotherapy.",
      image: "/images/gowri.jpg",
    },
    {
      name: "Adithya K",
      role: "Strength & Conditioning Coach",
      experience: "2+ Years Experience",
      description:
        "Focused on Exercise Therapy, Strength Training, Mobility Enhancement, Recovery Programs and Lifestyle Guidance.",
      image: "/images/adithya.jpg",
    },
  ];

  return (
    <section
      id="doctors"
      className="relative bg-black py-40 overflow-hidden"
    >
      {/* GOLD AMBIENT LIGHTS */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] bg-yellow-500/10 blur-[300px]" />

      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-yellow-400/10 blur-[250px]" />

      <div className="absolute top-[20%] right-0 w-[700px] h-[700px] bg-yellow-300/10 blur-[220px]" />

      {/* HEADER */}

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-yellow-400"
        >
          Meet The Experts
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-7xl font-bold mt-6"
        >
          The Team Behind
          <br />
          Your Recovery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg"
        >
          Combining clinical expertise, rehabilitation science and
          performance-focused recovery programs to help patients regain
          movement, confidence and independence.
        </motion.p>

      </div>

      {/* DOCTOR GRID */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-24">

        <div className="grid lg:grid-cols-2 gap-12">

          {doctors.map((doctor, index) => (

            <motion.div
              key={doctor.name}
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
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                rounded-[40px]
                overflow-hidden
                border
                border-yellow-500/20
                bg-white/5
                backdrop-blur-2xl
                shadow-[0_0_80px_rgba(255,215,0,0.12)]
              "
            >
              {/* GOLD TOP BAR */}

              <div className="h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300" />

              {/* IMAGE */}

              <div className="relative h-[650px] bg-black">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  priority
                  className="
                    object-contain
                    object-center
                    transition-all
                    duration-700
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              </div>

              {/* DETAILS */}

              <div className="p-8 md:p-10">

                <div
                  className="
                    inline-flex
                    px-4
                    py-2
                    rounded-full
                    bg-yellow-500/10
                    border
                    border-yellow-500/20
                    text-yellow-400
                    text-sm
                    mb-4
                  "
                >
                  {doctor.experience}
                </div>

                <h3 className="text-white text-3xl md:text-4xl font-bold">
                  {doctor.name}
                </h3>

                <p className="text-yellow-400 text-xl mt-3">
                  {doctor.role}
                </p>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  {doctor.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}