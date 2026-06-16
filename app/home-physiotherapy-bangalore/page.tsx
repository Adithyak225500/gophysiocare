export const metadata = {
  title: "Home Physiotherapy Bangalore | GoPhysioCare",
  description:
    "Premium Home Physiotherapy Services in Bangalore. Orthopedic Rehab, Neuro Rehab, Stroke Recovery, Sports Injury Rehabilitation and Home Visit Physiotherapy.",
};

export default function HomePhysiotherapyBangalore() {
  return (
    <main className="bg-white min-h-screen text-black">

      {/* HERO */}

      <section className="bg-gradient-to-r from-black via-zinc-900 to-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Home Physiotherapy in Bangalore
          </h1>

          <p className="text-xl text-zinc-300 mt-6 max-w-3xl">
            Expert Physiotherapists At Your Doorstep.
            Personalized Rehabilitation Programs,
            Pain Management and Faster Recovery.
          </p>

          <div className="mt-8 flex gap-4">

            <a
              href="tel:8747912575"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918747912575"
              target="_blank"
              className="border border-yellow-500 px-6 py-3 rounded-xl"
            >
              WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="max-w-6xl mx-auto px-6 py-20 text-black">

        <h2 className="text-4xl font-bold mb-10">
          Our Physiotherapy Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Orthopedic Physiotherapy
            </h3>
            <p>
              Treatment for knee pain, back pain, neck pain,
              arthritis and joint disorders.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Neuro Rehabilitation
            </h3>
            <p>
              Stroke rehabilitation, Parkinson’s rehabilitation,
              balance training and mobility recovery.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Sports Injury Rehabilitation
            </h3>
            <p>
              Return-to-sport programs and sports recovery
              treatment plans.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              Post Surgical Rehabilitation
            </h3>
            <p>
              Recovery after knee replacement, hip replacement
              and orthopedic surgeries.
            </p>
          </div>

        </div>

      </section>

      {/* AREAS */}

      <section className="bg-zinc-100 py-20 text-black">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Areas We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <div>Malleshwaram</div>
            <div>Rajajinagar</div>
            <div>Whitefield</div>
            <div>Indiranagar</div>
            <div>Koramangala</div>
            <div>HSR Layout</div>
            <div>Jayanagar</div>
            <div>JP Nagar</div>
            <div>Hebbal</div>
            <div>Yelahanka</div>
            <div>Marathahalli</div>
            <div>Bellandur</div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-black">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Book A Home Visit Today
          </h2>

          <p className="mt-6 text-lg">
            Professional Physiotherapy Treatment
            Delivered At Your Doorstep Anywhere In Bangalore.
          </p>

          <a
            href="https://wa.me/918747912575"
            target="_blank"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl"
          >
            Book On WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}