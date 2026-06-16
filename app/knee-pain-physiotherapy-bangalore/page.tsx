import ServicePageTemplate from "../components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      title="Knee Pain Physiotherapy In Bangalore"
      description="Home physiotherapy for knee pain and arthritis."
      conditions={[
        "Arthritis",
        "Meniscus Injury",
        "Ligament Injury",
        "Knee Replacement Rehab",
        "Patellar Pain",
        "Chronic Knee Pain",
      ]}
    />
  );
}