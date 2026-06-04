"use client";

import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* CALL BUTTON */}

      <a
        href="tel:+918747912575"
        className="
          fixed
          bottom-28
          right-6
          z-[999]
          w-16
          h-16
          rounded-full
          bg-white
          text-black
          flex
          items-center
          justify-center
          shadow-[0_0_30px_rgba(255,255,255,0.3)]
          hover:scale-110
          transition
        "
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WHATSAPP */}

      <a
        href="https://wa.me/918747912575"
        target="_blank"
        className="
          fixed
          bottom-6
          right-6
          z-[999]
          w-16
          h-16
          rounded-full
          bg-green-500
          text-white
          flex
          items-center
          justify-center
          shadow-[0_0_40px_rgba(34,197,94,0.4)]
          animate-pulse
          hover:scale-110
          transition
        "
      >
        <FaWhatsapp size={30} />
      </a>
    </>
  );
}