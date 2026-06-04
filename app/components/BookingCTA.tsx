"use client";

import { motion } from "framer-motion";

export default function BookingCTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          max-w-6xl
          mx-auto
          px-8
        "
      >
        <div
          className="
            rounded-[50px]
            border
            border-yellow-500/20
            bg-white/5
            backdrop-blur-3xl
            p-14
            text-center
          "
        >
          <h2 className="text-white text-5xl font-bold">
            Recovery Begins At Home
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Expert Physiotherapy, Neuro Rehabilitation,
            Orthopedic Recovery and Sports Rehabilitation
            delivered directly to your doorstep.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">

            <a
              href="https://wa.me/918747912575"
              target="_blank"
              className="
                bg-yellow-500
                text-black
                px-10
                py-5
                rounded-full
                font-bold
              "
            >
              Book Home Visit
            </a>

            <a
              href="tel:+918747912575"
              className="
                border
                border-white/20
                text-white
                px-10
                py-5
                rounded-full
              "
            >
              Call Now
            </a>

          </div>

        </div>
      </motion.div>

    </section>
  );
}