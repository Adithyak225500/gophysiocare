import ServicePageTemplate from "../components/ServicePageTemplate";

export default function Page() {
  return (
    <ServicePageTemplate
      title="Post Surgical Rehabilitation In Bangalore"
      description="Recovery programs after surgery at home."
      conditions={[
        "Knee Replacement",
        "Hip Replacement",
        "ACL Surgery",
        "Spine Surgery",
        "Fracture Recovery",
        "Orthopedic Rehabilitation",
      ]}
    />
  );
}