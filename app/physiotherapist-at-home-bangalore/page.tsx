import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Physiotherapist At Home Bangalore | GoPhysioCare",
  description:
    "Professional Physiotherapist At Home Services Across Bangalore.",
};

export default function PhysiotherapistAtHomeBangalore() {
  return (
    <ServicePageTemplate
      title="Physiotherapist At Home In Bangalore"
      description="Expert Home Physiotherapy Services Across Bangalore."
      conditions={[
        "Back Pain",
        "Neck Pain",
        "Knee Pain",
        "Shoulder Pain",
        "Stroke Rehabilitation",
        "Parkinson's Rehabilitation",
        "Sports Injuries",
        "Post Surgical Rehabilitation",
      ]}
    />
  );
}