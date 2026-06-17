import Link from "next/link";

type ServicePageProps = {
  title: string;
  description: string;
  conditions: string[];
};

export default function ServicePageTemplate({
  title,
  description,
  conditions,
}: ServicePageProps) {
  return (
    <main className="bg-white min-h-screen text-black">

      {/* HERO */}

      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            {title}
          </h1>

          <p className="text-xl text-zinc-300 mt-6 max-w-3xl">
            {description}
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
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

      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Expert Physiotherapy At Home
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          GoPhysioCare provides professional physiotherapy and rehabilitation
          services directly at your doorstep across Bangalore. Our experienced
          physiotherapists assess, diagnose and create personalized treatment
          plans tailored to your condition. Whether you are recovering from
          surgery, suffering from chronic pain, neurological conditions, sports
          injuries or mobility issues, our goal is to restore movement,
          improve function and help you return to daily activities safely.
        </p>

        <p className="text-lg leading-8 text-gray-700 mt-6">
          We bring hospital-quality rehabilitation services to the comfort of
          your home, eliminating travel difficulties and ensuring continuous
          recovery under expert supervision.
        </p>

      </section>

      {/* CONDITIONS */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold mb-10">
          Conditions We Treat
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="shadow-lg rounded-xl p-6 border bg-white"
            >
              {condition}
            </div>
          ))}
        </div>

      </section>

      {/* BENEFITS */}

      <section className="bg-zinc-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Benefits Of Home Physiotherapy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-6 bg-white rounded-xl shadow">
              Personalized One-On-One Treatment
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              Faster Recovery In Familiar Environment
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              Reduced Travel Stress And Waiting Time
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              Better Comfort And Convenience
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              Family Involvement In Recovery
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              Flexible Appointment Scheduling
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Why Choose GoPhysioCare
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-6">
              Experienced Physiotherapists
            </div>

            <div className="border rounded-xl p-6">
              Home Visit Services Across Bangalore
            </div>

            <div className="border rounded-xl p-6">
              Personalized Treatment Plans
            </div>

            <div className="border rounded-xl p-6">
              Neuro & Orthopedic Specialists
            </div>

            <div className="border rounded-xl p-6">
              Post Surgical Rehabilitation
            </div>

            <div className="border rounded-xl p-6">
              Affordable Home Care Packages
            </div>

          </div>

        </div>

      </section>

      {/* AREAS */}

      <section className="bg-zinc-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Areas We Serve In Bangalore
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            <Link href="/home-physiotherapy-malleshwaram">Malleshwaram</Link>

            <Link href="/home-physiotherapy-rajajinagar">Rajajinagar</Link>

            <Link href="/home-physiotherapy-indiranagar">Indiranagar</Link>

            <Link href="/home-physiotherapy-whitefield">Whitefield</Link>

            <Link href="/home-physiotherapy-koramangala">Koramangala</Link>

            <Link href="/home-physiotherapy-hsr-layout">HSR Layout</Link>

            <Link href="/home-physiotherapy-jayanagar">Jayanagar</Link>

            <Link href="/home-physiotherapy-hebbal">Hebbal</Link>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="font-bold text-xl">
                Do you provide physiotherapy at home?
              </h3>
              <p className="mt-2">
                Yes, we provide home physiotherapy services across Bangalore.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Which areas do you cover?
              </h3>
              <p className="mt-2">
                We serve major areas including Malleshwaram, Rajajinagar,
                Whitefield, Indiranagar, Hebbal, Jayanagar and surrounding
                locations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                How do I book an appointment?
              </h3>
              <p className="mt-2">
                You can call us directly or contact us through WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl">
                Do you treat neurological conditions?
              </h3>
              <p className="mt-2">
                Yes, we provide stroke rehabilitation, Parkinson’s
                rehabilitation and neuro physiotherapy services.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-24 text-center">

        <h2 className="text-5xl font-bold">
          Book Your Home Visit Today
        </h2>

        <p className="mt-6 text-lg">
          Expert Physiotherapy Treatment At Your Doorstep Anywhere In Bangalore.
        </p>

        <a
          href="https://wa.me/918747912575"
          target="_blank"
          className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold"
        >
          Book On WhatsApp
        </a>

      </section>

    </main>
  );
}