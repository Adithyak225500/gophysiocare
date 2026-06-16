"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: "🦴",
      title: "Orthopedic Rehabilitation",
      link: "/back-pain-treatment-bangalore",
      subtitle: "Restore movement, reduce pain and regain confidence.",
      conditions: [
        "Cervical Pain",
        "Shoulder Pain",
        "Lower Back Pain",
        "Hip Pain",
        "Knee Pain",
        "Frozen Shoulder",
        "Arthritis Management",
        "Post-Fracture Recovery",
        "Torticollis",
        "CTEV",
      ],
    },

    {
      icon: "🧠",
      title: "Neuro Rehabilitation",
      link: "/neuro-rehabilitation-bangalore",
      subtitle: "Helping patients regain independence and function.",
      conditions: [
        "Stroke Rehabilitation",
        "Parkinson's Disease",
        "Spinal Cord Injury",
        "GBS",
        "Hemiplegia",
        "Paraplegia",
        "Balance Training",
        "Gait Re-education",
        "Bell's Palsy",
      ],
    },

    {
      icon: "👶",
      title: "Pediatric Physiotherapy",
      link: "#",
      subtitle:
        "Supporting children in achieving optimal movement, development and independence.",
      conditions: [
        "Cerebral Palsy",
        "Down Syndrome",
        "Erb's Palsy",
        "Club Foot",
        "Facial Palsy",
        "Delayed Milestones",
        "Autism Spectrum Disorder",
        "Developmental Delay",
      ],
    },

    {
      icon: "👩",
      title: "Women's Health & Postpartum Care",
      link: "#",
      subtitle:
        "Supporting recovery, strength and confidence after childbirth.",
      conditions: [
        "Postpartum Recovery",
        "Diastasis Recti",
        "Pelvic Floor Rehabilitation",
        "Core Strength Restoration",
        "Post-Cesarean Recovery",
        "Pregnancy Related Pain",
      ],
    },

    {
      icon: "🏥",
      title: "Post-Surgery Rehabilitation",
      link: "/post-surgical-rehabilitation-bangalore",
      subtitle: "Guided recovery after surgery and trauma.",
      conditions: [
        "ACL Reconstruction",
        "TKR Recovery",
        "THR Recovery",
        "Fracture Rehabilitation",
        "Spinal Surgery Recovery",
        "Shoulder Surgery Recovery",
      ],
    },

    {
      icon: "🏃",
      title: "Sports Rehabilitation",
      link: "/sports-physiotherapy-bangalore",
      subtitle: "Return stronger, faster and safer.",
      conditions: [
        "Sports Injuries",
        "Muscle Strains",
        "Ligament Injuries",
        "ACL Rehabilitation",
        "Performance Recovery",
        "Injury Prevention",
      ],
    },

    {
      icon: "❤️",
      title: "Cardio-Pulmonary Rehabilitation",
      link: "#",
      subtitle:
        "Improving endurance, breathing and functional capacity.",
      conditions: [
        "Cardiac Rehabilitation",
        "Post Heart Surgery Recovery",
        "Pulmonary Rehabilitation",
        "COPD Support",
        "Breathing Exercises",
        "Endurance Conditioning",
      ],
    },

    {
      icon: "💧",
      title: "Hydrotherapy & Advanced Therapies",
      link: "/dry-needling-bangalore",
      subtitle:
        "Evidence-based treatments for faster recovery.",
      conditions: [
        "Hydrotherapy",
        "Dry Needling",
        "Cupping Therapy",
        "Electrotherapy",
        "Exercise Therapy",
        "Strength Training",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-black py-36 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-yellow-400/10 blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            Services
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-5">
            Comprehensive
            <br />
            Recovery Solutions
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8">
            Premium physiotherapy and rehabilitation services
            delivered directly to your doorstep anywhere in Bangalore.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.link}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[35px]
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  p-8
                  h-full
                  shadow-[0_0_50px_rgba(255,215,0,0.08)]
                "
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300" />

                <div className="text-5xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-white text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {service.subtitle}
                </p>

                <div className="mt-8 space-y-3">
                  {service.conditions.map((condition) => (
                    <div
                      key={condition}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />

                      <span className="text-gray-300">
                        {condition}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-yellow-400 font-semibold">
                  Learn More →
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}