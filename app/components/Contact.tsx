"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [condition, setCondition] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Hello GoPhysioCare,

Name: ${name}

Phone: ${phone}

Area: ${area}

Condition: ${condition}

Description:
${message}
`;

    window.open(
      `https://wa.me/918747912575?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative bg-black py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            Contact Us
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            Start Your Recovery
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8">
            Premium Physiotherapy & Rehabilitation Services
            Delivered Directly To Your Doorstep Across Bangalore.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[40px]
              p-10
            "
          >
            <h3 className="text-3xl font-bold text-white">
              Home Physiotherapy Across Bangalore
            </h3>

            <p className="text-gray-400 mt-5">
              We provide doorstep physiotherapy,
              orthopedic rehabilitation, neuro rehabilitation,
              sports rehabilitation and post-surgical recovery.
            </p>

            <div className="space-y-6 mt-10">

              <div>
                <p className="text-yellow-400 font-semibold">
                  Primary Contact
                </p>

                <p className="text-white text-xl">
                  +91 87479 12575
                </p>
              </div>

              <div>
                <p className="text-yellow-400 font-semibold">
                  Alternate Contact
                </p>

                <p className="text-white text-xl">
                  +91 93803 07462
                </p>
              </div>

              <div>
                <p className="text-yellow-400 font-semibold">
                  Email
                </p>

                <p className="text-white">
                  gophysiocare@gmail.com
                </p>
              </div>

              <div>
                <p className="text-yellow-400 font-semibold">
                  Availability
                </p>

                <p className="text-white">
                  Home Visits Available 7 Days A Week
                </p>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+918747912575"
                className="
                  bg-yellow-500
                  text-black
                  px-6
                  py-4
                  rounded-full
                  font-semibold
                "
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918747912575"
                target="_blank"
                className="
                  border
                  border-white/20
                  text-white
                  px-6
                  py-4
                  rounded-full
                "
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-[40px]
              p-10
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white"
              />

              <input
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white"
              />

              <input
                type="text"
                placeholder="Condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white"
              />

              <textarea
                rows={5}
                placeholder="Describe your condition..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 rounded-2xl bg-black/40 border border-white/10 text-white"
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-yellow-500
                  hover:bg-yellow-400
                  text-black
                  font-bold
                  py-5
                  rounded-full
                  transition
                "
              >
                Book Appointment on WhatsApp
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}