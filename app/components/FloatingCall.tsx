"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingCall() {
  return (
    <a
      href="tel:+918747912575"
      className="
      fixed
      bottom-28
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-yellow-500
      flex
      items-center
      justify-center
      text-black
      shadow-[0_0_40px_rgba(255,215,0,0.6)]
      animate-pulse
    "
    >
      <FaPhoneAlt />
    </a>
  );
}