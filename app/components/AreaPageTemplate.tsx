type Props = {
  area: string;
};

export default function AreaPageTemplate({ area }: Props) {
  return (
    <main className="bg-white min-h-screen text-black">

      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Home Physiotherapy in {area}
          </h1>

          <p className="text-xl text-zinc-300 mt-6">
            Expert physiotherapy treatment delivered directly to your home in {area}. We provide orthopedic rehabilitation, neuro rehabilitation, stroke rehabilitation, Parkinson's rehabilitation, sports physiotherapy and post-surgical recovery services.
          </p>

          <a
            href="https://wa.me/918747912575"
            className="inline-block mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Book on WhatsApp
          </a>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Home Physiotherapy Services in {area}
        </h2>

        <p className="mb-8 text-lg">
          GoPhysioCare provides personalized physiotherapy services at home across {area}. Our experienced physiotherapists assess each patient individually and create customized treatment plans to achieve faster recovery and better mobility.
        </p>

        <ul className="space-y-4">
          <li>✓ Orthopedic Physiotherapy</li>
          <li>✓ Neuro Rehabilitation</li>
          <li>✓ Stroke Rehabilitation</li>
          <li>✓ Parkinson's Rehabilitation</li>
          <li>✓ Sports Physiotherapy</li>
          <li>✓ Dry Needling</li>
          <li>✓ Post Surgical Rehabilitation</li>
          <li>✓ Home Exercise Programs</li>
        </ul>

      </section>

      <section className="bg-zinc-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Why Choose GoPhysioCare in {area}?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h3 className="font-bold text-xl mb-3">
                Experienced Physiotherapists
              </h3>

              <p>
                Our therapists provide evidence-based rehabilitation programs for orthopedic, neurological and sports-related conditions.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Convenient Home Visits
              </h3>

              <p>
                Receive treatment in the comfort of your home without the need to travel to clinics.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Personalized Care
              </h3>

              <p>
                Customized treatment plans designed according to each patient's condition and goals.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">
                Bangalore Wide Coverage
              </h3>

              <p>
                Serving patients across {area} and all major areas of Bangalore.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <h3 className="font-bold text-xl mb-2">
          Do you provide home physiotherapy in {area}?
        </h3>

        <p className="mb-6">
          Yes, we provide home visit physiotherapy services throughout {area}.
        </p>

        <h3 className="font-bold text-xl mb-2">
          How can I book an appointment?
        </h3>

        <p className="mb-6">
          You can call us directly or book through WhatsApp.
        </p>

        <h3 className="font-bold text-xl mb-2">
          What conditions do you treat?
        </h3>

        <p>
          We treat orthopedic conditions, neurological disorders, sports injuries and post-surgical rehabilitation cases.
        </p>

      </section>

    </main>
  );
}