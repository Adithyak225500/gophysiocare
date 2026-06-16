import ServicePageTemplate from "../components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      title="Parkinson's Rehabilitation In Bangalore"
      description="Home physiotherapy programs for Parkinson's disease patients."
      conditions={[
        "Balance Training",
        "Gait Training",
        "Mobility Exercises",
        "Strength Training",
        "Fall Prevention",
        "Functional Independence",
      ]}
    />
  );
}