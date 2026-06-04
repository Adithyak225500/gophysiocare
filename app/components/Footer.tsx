"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* GOLD GLOW */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-yellow-500/10 blur-[260px]" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-4 gap-12"
        >

          {/* BRAND */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/images/gophysiocare-logo.png"
                alt="GoPhysioCare"
                width={60}
                height={60}
                className="rounded-full"
              />

              <div>
                <h2 className="text-3xl font-bold text-yellow-400">
                  GoPhysioCare
                </h2>

                <p className="text-gray-500 text-sm">
                  Recovery At Your Doorstep
                </p>
              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Premium Home Physiotherapy,
              Rehabilitation, Strength &
              Conditioning and Recovery
              Programs delivered across Bangalore.
            </p>

            <a
              href="https://wa.me/918747912575"
              target="_blank"
              className="
                inline-flex
                mt-8
                bg-yellow-500
                hover:bg-yellow-400
                text-black
                px-6
                py-3
                rounded-full
                font-semibold
                transition
              "
            >
              Book On WhatsApp
            </a>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Orthopedic Rehabilitation</li>

              <li>Neuro Rehabilitation</li>

              <li>Sports Rehabilitation</li>

              <li>Pediatric Physiotherapy</li>

              <li>Post-Surgical Rehabilitation</li>

              <li>Dry Needling</li>

              <li>Cupping Therapy</li>

              <li>Exercise Therapy</li>

              <li>Strength & Conditioning</li>

              <li>Geriatric Physiotherapy</li>

              <li>Home Visit Physiotherapy</li>

            </ul>

          </div>

          {/* COVERAGE */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Areas Covered
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>East Bangalore</li>

              <li>West Bangalore</li>

              <li>North Bangalore</li>

              <li>South Bangalore</li>

              <li>Central Bangalore</li>

            </ul>
            
            <p className="mt-5 text-yellow-400 font-semibold">
            Home Visits Across Bangalore
            </p>
            
          </div>

          {/* CONTACT */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div>

                <p className="text-yellow-400 text-sm uppercase tracking-widest">
                  Service Area
                </p>

                <p>
                  Bangalore, Karnataka
                </p>

              </div>

              <div>

                <p className="text-yellow-400 text-sm uppercase tracking-widest">
                  Primary Contact
                </p>

                <a
                  href="tel:+918747912575"
                  className="hover:text-yellow-400 transition"
                >
                  +91 87479 12575
                </a>

              </div>

              <div>

                <p className="text-yellow-400 text-sm uppercase tracking-widest">
                  Alternate Contact
                </p>

                <a
                  href="tel:+919380307462"
                  className="hover:text-yellow-400 transition"
                >
                  +91 93803 07462
                </a>

              </div>

              <div>

                <p className="text-yellow-400 text-sm uppercase tracking-widest">
                  Email
                </p>

                <a
                  href="mailto:gophysiocare@gmail.com"
                  className="hover:text-yellow-400 transition"
                >
                  gophysiocare@gmail.com
                </a>

              </div>

              <div>

                <p className="text-yellow-400 text-sm uppercase tracking-widest">
                  Availability
                </p>

                <p>
                  Home Visits Available
                  7 Days A Week
                </p>

              </div>

            </div>

          </div>

        </motion.div>

        {/* BOTTOM BAR */}

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 GoPhysioCare.
            All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Premium Home Physiotherapy &
            Rehabilitation Services
          </p>

        </div>

      </div>

    </footer>
  );
}