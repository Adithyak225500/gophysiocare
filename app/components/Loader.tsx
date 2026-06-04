"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black
      flex
      items-center
      justify-center
      z-[9999]
    "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="text-center"
      >

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <Image
            src="/images/gophysiocare-logo.png"
            alt="logo"
            width={120}
            height={120}
          />
        </motion.div>

        <h2 className="text-white text-3xl font-bold mt-6">
          GoPhysioCare
        </h2>

        <p className="text-yellow-400 mt-2">
          Premium Rehabilitation At Your Doorstep
        </p>

      </motion.div>
    </div>
  );
}