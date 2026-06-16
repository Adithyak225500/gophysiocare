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

      <section className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            {title}
          </h1>

          <p className="text-xl text-zinc-300 mt-6 max-w-3xl">
            {description}
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

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-10">
          Conditions We Treat
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="shadow-lg rounded-xl p-6 border"
            >
              {condition}
            </div>
          ))}
        </div>

      </section>

      <section className="bg-zinc-100 py-20 text-black">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Areas We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            <div>Malleshwaram</div>
            <div>Rajajinagar</div>
            <div>Indiranagar</div>
            <div>Whitefield</div>
            <div>Koramangala</div>
            <div>HSR Layout</div>
            <div>JP Nagar</div>
            <div>Jayanagar</div>
            <div>Hebbal</div>
            <div>Yelahanka</div>
            <div>Bellandur</div>
            <div>Marathahalli</div>
          </div>

        </div>

      </section>

      <section className="py-24 text-center">

        <h2 className="text-5xl font-bold">
          Book Your Home Visit Today
        </h2>

        <p className="mt-6 text-lg">
          Expert Physiotherapy Treatment At Your Doorstep.
        </p>

        <a
          href="https://wa.me/918747912575"
          target="_blank"
          className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl"
        >
          Book On WhatsApp
        </a>

      </section>

    </main>
  );
}