import ServicePageTemplate from "../components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      title="Back Pain Treatment In Bangalore"
      description="Effective home physiotherapy treatment for back pain."
      conditions={[
        "Sciatica",
        "Disc Problems",
        "Muscle Spasm",
        "Postural Pain",
        "Chronic Back Pain",
        "Lumbar Rehabilitation",
      ]}
    />
  );
}