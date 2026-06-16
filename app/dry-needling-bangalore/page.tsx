import ServicePageTemplate from "../components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      title="Dry Needling Therapy In Bangalore"
      description="Professional dry needling therapy for pain relief."
      conditions={[
        "Trigger Points",
        "Neck Pain",
        "Shoulder Pain",
        "Back Pain",
        "Sports Injuries",
        "Muscle Tightness",
      ]}
    />
  );
}