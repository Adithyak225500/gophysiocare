"use client";

import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Ramesh K",
      treatment: "Knee Rehabilitation",
      review:
        "Excellent home physiotherapy service. The recovery after my knee surgery was much faster than expected.",
    },
    {
      name: "Priya S",
      treatment: "Neck & Back Pain",
      review:
        "Professional treatment at home. The exercises and manual therapy significantly reduced my pain.",
    },
    {
      name: "Arun M",
      treatment: "Stroke Rehabilitation",
      review:
        "Dedicated sessions and personalized care helped improve mobility and confidence.",
    },
  ];

  return (
    <section className="relative py-36 bg-black overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-yellow-400">
            Patient Reviews
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            What Patients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 1,
              }}
              className="
                bg-white/5
                border
                border-yellow-500/20
                backdrop-blur-2xl
                rounded-[35px]
                p-10
              "
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{review.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-white font-bold">
                  {review.name}
                </h3>

                <p className="text-yellow-400 text-sm mt-1">
                  {review.treatment}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}