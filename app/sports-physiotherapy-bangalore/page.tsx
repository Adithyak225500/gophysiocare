import ServicePageTemplate from "../components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      title="Sports Physiotherapy In Bangalore"
      description="Sports injury recovery and rehabilitation."
      conditions={[
        "ACL Injuries",
        "Ankle Sprains",
        "Shoulder Injuries",
        "Muscle Strains",
        "Sports Recovery",
        "Return To Sport",
      ]}
    />
  );
}