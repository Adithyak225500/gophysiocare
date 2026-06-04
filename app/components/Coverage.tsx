"use client";

import { motion } from "framer-motion";

export default function Coverage() {
  const zones = [
    {
      title: "Central Bangalore",
      areas: [
        "MG Road",
        "Brigade Road",
        "Church Street",
        "Ulsoor",
        "Domlur",
        "Frazer Town",
      ],
    },
    {
      title: "South Bangalore",
      areas: [
        "Jayanagar",
        "JP Nagar",
        "Banashankari",
        "BTM Layout",
        "Begur",
        "Uttarahalli",
      ],
    },
    {
      title: "East Bangalore",
      areas: [
        "Whitefield",
        "Marathahalli",
        "Bellandur",
        "Sarjapur Road",
        "KR Puram",
        "Indiranagar",
      ],
    },
    {
      title: "North Bangalore",
      areas: [
        "Hebbal",
        "Yelahanka",
        "Thanisandra",
        "Jakkur",
        "Nagawara",
        "Airport Road",
      ],
    },
    {
      title: "West Bangalore",
      areas: [
        "Rajajinagar",
        "Malleshwaram",
        "Vijayanagar",
        "RR Nagar",
        "Peenya",
        "Nagarbhavi",
      ],
    },
  ];

  return (
    <section
      id="coverage"
      className="relative bg-black py-36 overflow-hidden"
    >
      {/* GOLD GLOW */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-yellow-500/10 blur-[280px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-yellow-400">
            Coverage
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            Home Visits Across Bangalore
          </h2>

          <p className="text-gray-400 max-w-4xl mx-auto mt-8">
            Professional physiotherapy and rehabilitation
            services delivered directly to your doorstep
            across major areas of Bangalore.
          </p>
        </motion.div>

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-6 mb-20">

          {[
            ["25+", "Areas Covered"],
            ["7 Days", "Availability"],
            ["100%", "Home Visits"],
            ["Same Day", "Appointments"],
          ].map((item) => (
            <motion.div
              key={item[0]}
              whileHover={{ y: -8 }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-[30px]
                p-8
                text-center
              "
            >
              <h3 className="text-yellow-400 text-4xl font-bold">
                {item[0]}
              </h3>

              <p className="text-gray-300 mt-3">
                {item[1]}
              </p>
            </motion.div>
          ))}

        </div>

        {/* ZONES */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {zones.map((zone) => (
            <motion.div
              key={zone.title}
              whileHover={{ y: -10 }}
              className="
                bg-white/5
                backdrop-blur-2xl
                border
                border-white/10
                rounded-[35px]
                p-8
              "
            >
              <h3 className="text-yellow-400 text-2xl font-bold mb-6">
                {zone.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {zone.areas.map((area) => (
                  <span
                    key={area}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-white/10
                      border
                      border-white/10
                      text-white
                      text-sm
                    "
                  >
                    {area}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}