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
              rel="noopener noreferrer"
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
          Professional Home Physiotherapy Services In Bangalore
        </h2>

        <div className="space-y-6 text-lg leading-8 text-gray-700">

          <p>
            GoPhysioCare provides expert physiotherapy and rehabilitation
            services directly at your doorstep across Bangalore. Our treatment
            approach focuses on reducing pain, restoring movement, improving
            strength and helping patients return to their normal lifestyle.
          </p>

          <p>
            Every patient receives a detailed assessment followed by a
            personalized treatment plan. Our goal is not only pain relief but
            long-term recovery and prevention of future problems.
          </p>

          <p>
            We provide orthopedic rehabilitation, neurological rehabilitation,
            stroke rehabilitation, Parkinson's rehabilitation, sports injury
            management, post-surgical rehabilitation, dry needling therapy and
            home exercise programs.
          </p>

          <p>
            Home physiotherapy is ideal for elderly patients, post-operative
            recovery, neurological conditions and individuals who prefer
            receiving treatment in a comfortable environment.
          </p>

        </div>

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

      {/* TREATMENT PROCESS */}

      <section className="bg-zinc-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Our Treatment Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-3">Assessment</h3>
              <p>Detailed evaluation of pain, movement and mobility.</p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-3">Diagnosis</h3>
              <p>Identification of the root cause and rehabilitation goals.</p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-3">Treatment</h3>
              <p>Customized therapy and rehabilitation program.</p>
            </div>

            <div className="border rounded-xl p-6 bg-white">
              <h3 className="font-bold text-xl mb-3">Recovery</h3>
              <p>Progress tracking and return to daily activities.</p>
            </div>

          </div>

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

      {/* WHO NEEDS PHYSIOTHERAPY */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Who Can Benefit From Physiotherapy?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="border rounded-xl p-6">
              Patients suffering from back pain and neck pain
            </div>

            <div className="border rounded-xl p-6">
              Stroke rehabilitation patients
            </div>

            <div className="border rounded-xl p-6">
              Parkinson's disease patients
            </div>

            <div className="border rounded-xl p-6">
              Sports injury recovery
            </div>

            <div className="border rounded-xl p-6">
              Post surgery rehabilitation
            </div>

            <div className="border rounded-xl p-6">
              Elderly individuals with mobility difficulties
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="py-20 bg-zinc-50">

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
            <Link href="/home-physiotherapy-rr-nagar">RR Nagar</Link>
            <Link href="/home-physiotherapy-yelahanka">Yelahanka</Link>
            <Link href="/home-physiotherapy-marathahalli">Marathahalli</Link>
            <Link href="/home-physiotherapy-bellandur">Bellandur</Link>
            <Link href="/home-physiotherapy-electronic-city">Electronic City</Link>
            <Link href="/home-physiotherapy-banashankari">Banashankari</Link>
            <Link href="/home-physiotherapy-jp-nagar">JP Nagar</Link>
            <Link href="/home-physiotherapy-basavanagudi">Basavanagudi</Link>

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
              <h3 className="font-bold text-xl">Do you provide physiotherapy at home?</h3>
              <p className="mt-2">Yes, we provide home physiotherapy services across Bangalore.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Which areas do you cover?</h3>
              <p className="mt-2">We cover major areas across Bangalore including RR Nagar, Whitefield, Hebbal, HSR Layout and more.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">How do I book an appointment?</h3>
              <p className="mt-2">You can call us directly or contact us through WhatsApp.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Do you treat neurological conditions?</h3>
              <p className="mt-2">Yes, we provide stroke rehabilitation, Parkinson's rehabilitation and neuro physiotherapy services.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">How many sessions will I need?</h3>
              <p className="mt-2">The number of sessions depends on your condition and recovery goals.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl">Do you provide treatment for senior citizens?</h3>
              <p className="mt-2">Yes, we provide geriatric physiotherapy and mobility rehabilitation.</p>
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
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold"
        >
          Book On WhatsApp
        </a>

      </section>

    </main>
  );
}