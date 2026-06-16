import ServicePageTemplate from "../components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      title="Neuro Rehabilitation In Bangalore"
      description="Neurological physiotherapy and rehabilitation at home."
      conditions={[
        "Stroke",
        "Parkinson's Disease",
        "Multiple Sclerosis",
        "Balance Disorders",
        "Neurological Weakness",
        "Mobility Recovery",
      ]}
    />
  );
}