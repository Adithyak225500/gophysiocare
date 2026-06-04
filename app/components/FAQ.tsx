"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you provide physiotherapy at home?",
    answer:
      "Yes. GoPhysioCare specializes in premium home physiotherapy services across Bangalore.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We provide services throughout Bangalore including Whitefield, Marathahalli, Electronic City, HSR Layout, Indiranagar, JP Nagar and surrounding areas.",
  },
  {
    question: "Do you treat neurological conditions?",
    answer:
      "Yes. We provide stroke rehabilitation, Parkinson's rehabilitation, spinal cord injury rehabilitation and other neurological recovery programs.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Simply click the WhatsApp button and share your condition. We will schedule a home visit.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-yellow-400">
            FAQ
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                bg-white/5
                border
                border-white/10
                rounded-[30px]
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  w-full
                  text-left
                  p-8
                  text-white
                  text-xl
                  font-semibold
                "
              >
                {faq.question}
              </button>

              {open === index && (

                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  className="px-8 pb-8"
                >
                  <p className="text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}