import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Physiotherapist At Home Bangalore | GoPhysioCare",
  description:
    "Professional Physiotherapist At Home Services Across Bangalore. Orthopedic, Neuro, Sports and Post-Surgical Rehabilitation at your doorstep.",
};

export default function PhysiotherapistAtHomeBangalore() {
  return (
    <ServicePageTemplate
      title="Physiotherapist At Home In Bangalore"
      description="Certified physiotherapists providing home visit physiotherapy services across Bangalore for pain relief, rehabilitation and faster recovery."
      conditions={[
        "Back Pain",
        "Neck Pain",
        "Knee Pain",
        "Shoulder Pain",
        "Frozen Shoulder",
        "Arthritis",
        "Stroke Rehabilitation",
        "Parkinson's Rehabilitation",
        "Sports Injuries",
        "Post Surgical Rehabilitation",
        "Balance Training",
        "Gait Training",
      ]}
    />
  );
}