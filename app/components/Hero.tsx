"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">

      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/75" />

      {/* GOLD LIGHTING */}

      <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-yellow-500/20 blur-[280px]" />

      <div className="absolute left-[-250px] top-[40%] w-[700px] h-[700px] rounded-full bg-yellow-400/10 blur-[220px]" />

      <div className="absolute right-[-250px] top-[20%] w-[700px] h-[700px] rounded-full bg-yellow-500/10 blur-[220px]" />

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* CONTENT */}

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-44 pb-20">

        {/* PREMIUM BADGE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            backdrop-blur-xl
            bg-white/10
            border
            border-yellow-500/20
            rounded-full
            px-8
            py-4
            mb-10
            shadow-[0_0_40px_rgba(255,215,0,0.08)]
          "
        >
          <span className="text-white text-lg">
            Bangalore's Premium Home Physiotherapy Service
          </span>
        </motion.div>

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            text-white
            text-5xl
            md:text-7xl
            xl:text-[8rem]
            font-bold
            leading-[0.9]
            max-w-7xl
          "
        >
          Bringing Expert
          <br />

          <span className="text-yellow-400">
            Physiotherapy
          </span>

          {" "}To Your
          <br />
          Doorstep
        </motion.h1>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-8
            max-w-3xl
            text-lg
            md:text-xl
            text-gray-300
          "
        >
          Expert Physiotherapy, Orthopedic Rehabilitation,
          Neuro Rehabilitation, Sports Recovery,
          Dry Needling, Cupping Therapy,
          Exercise Therapy and Home Visit Care
          across Bangalore.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="
            flex
            flex-col
            md:flex-row
            gap-5
            mt-12
          "
        >
          <a
            href="https://wa.me/918747912575"
            target="_blank"
            className="
              bg-yellow-500
              text-black
              font-semibold
              px-10
              py-5
              rounded-full
              hover:scale-105
              transition-all
              duration-300
              shadow-[0_0_50px_rgba(255,215,0,0.25)]
            "
          >
            Book Home Visit
          </a>

          <a
            href="#services"
            className="
              backdrop-blur-xl
              bg-white/10
              border
              border-white/10
              text-white
              px-10
              py-5
              rounded-full
              hover:bg-white/20
              transition-all
            "
          >
            Explore Services
          </a>
        </motion.div>

        {/* STATS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-5
            mt-20
            max-w-6xl
          "
        >
          {[
            ["8000+", "Patients Assisted"],
            ["5000+", "Home Visits"],
            ["5+", "Years Experience"],
            ["Entire", "Bangalore Coverage"],
          ].map((item) => (
            <div
              key={item[0]}
              className="
                backdrop-blur-2xl
                bg-white/10
                border
                border-white/10
                rounded-[35px]
                p-8
                min-w-[180px]
                shadow-[0_0_40px_rgba(255,215,0,0.08)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <h3 className="text-yellow-400 text-4xl md:text-5xl font-bold">
                {item[0]}
              </h3>

              <p className="text-white mt-3">
                {item[1]}
              </p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">

        <div className="w-[32px] h-[52px] border border-white/40 rounded-full flex justify-center">

          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />

        </div>

      </div>

    </section>
  );
}