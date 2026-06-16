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
            Premium physiotherapy and rehabilitation services
            delivered directly to your doorstep in {area}.
          </p>

          <a
            href="https://wa.me/918747912575"
            className="inline-block mt-8 bg-yellow-500 text-black px-6 py-3 rounded-xl"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-8">
          Services Available in {area}
        </h2>

        <ul className="space-y-4">
          <li>✓ Orthopedic Physiotherapy</li>
          <li>✓ Neuro Rehabilitation</li>
          <li>✓ Stroke Rehabilitation</li>
          <li>✓ Parkinson's Rehabilitation</li>
          <li>✓ Sports Physiotherapy</li>
          <li>✓ Dry Needling</li>
          <li>✓ Post Surgical Rehabilitation</li>
        </ul>
      </section>
    </main>
  );
}