import ServicePageTemplate from "../components/ServicePageTemplate";

export const metadata = {
  title: "Stroke Rehabilitation Bangalore | GoPhysioCare",
};

export default function Page() {
  return (
    <ServicePageTemplate
      title="Stroke Rehabilitation In Bangalore"
      description="Specialized home-based stroke rehabilitation programs to improve mobility, balance and independence."
      conditions={[
        "Stroke Recovery",
        "Balance Training",
        "Walking Training",
        "Upper Limb Rehabilitation",
        "Lower Limb Rehabilitation",
        "Mobility Improvement",
      ]}
    />
  );
}