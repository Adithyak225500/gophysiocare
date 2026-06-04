"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-4 left-0 w-full z-[999] px-4 md:px-10"
    >
      <div
        className={`
          max-w-7xl mx-auto
          flex items-center justify-between
          rounded-full
          border border-yellow-500/20
          backdrop-blur-3xl
          bg-black/50
          shadow-[0_0_50px_rgba(255,215,0,0.08)]
          transition-all duration-500
          ${
            scrolled
              ? "py-2 px-4"
              : "py-4 px-6"
          }
        `}
      >
        {/* LOGO SECTION */}

        <div className="flex items-center gap-4">

          <div className="relative flex items-center justify-center">

            {/* OUTER GOLD GLOW */}

            <div
              className="
                absolute
                w-[120px]
                h-[120px]
                rounded-full
                bg-yellow-500/15
                blur-3xl
                animate-pulse
              "
            />

            {/* ROTATING GOLD RING */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[95px]
                h-[95px]
                rounded-full
                border
                border-yellow-400/40
              "
            />

            {/* SMALL GOLD PARTICLE */}

            <div
              className="
                absolute
                top-1
                right-1
                w-2
                h-2
                bg-yellow-300
                rounded-full
                animate-ping
              "
            />

            {/* LOGO */}

            <Image
              src="/images/gophysiocare-logo.png"
              alt="GoPhysioCare"
              width={78}
              height={78}
              priority
              className="
                relative
                z-10
                rounded-full
                drop-shadow-[0_0_35px_rgba(255,215,0,0.8)]
              "
            />

          </div>

          {/* BRAND NAME */}

          <div>

            <h1 className="text-white font-bold text-xl md:text-2xl">
              GoPhysioCare
            </h1>

            <p
              className="
                text-yellow-400
                text-[10px]
                uppercase
                tracking-[4px]
              "
            >
              Premium Rehabilitation At Your Doorstep
            </p>

          </div>

        </div>

        {/* CENTER MENU */}

        <div
          className="
            hidden lg:flex
            items-center gap-2
            bg-white/5
            border border-white/10
            rounded-full
            px-2 py-2
          "
        >
          {[
            ["Services", "#services"],
            ["Conditions", "#conditions"],
            ["Doctors", "#doctors"],
            ["Coverage", "#coverage"],
            ["FAQ", "#faq"],
            ["Contact", "#contact"],
          ].map(([label, link]) => (
            <a
              key={label}
              href={link}
              className="
                text-white
                hover:text-yellow-400
                hover:bg-white/5
                transition-all
                duration-300
                px-5
                py-2
                rounded-full
              "
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}

        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href="https://wa.me/918747912575"
          target="_blank"
          className="
            relative
            overflow-hidden
            bg-yellow-500
            hover:bg-yellow-400
            text-black
            font-bold
            px-7
            py-3
            rounded-full
            shadow-[0_0_50px_rgba(255,215,0,0.4)]
            transition-all
          "
        >
          <span className="relative z-10">
            Book Visit
          </span>

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              -translate-x-full
              animate-[shine_3s_linear_infinite]
            "
          />
        </motion.a>

      </div>
    </motion.nav>
  );
}