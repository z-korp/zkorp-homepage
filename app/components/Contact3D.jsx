import { Html } from "@react-three/drei";
import ContactSection from "./ui/Contact";

export function Contact3D() {
  return (
    <Html
      transform
      occlude
      position={[0, -3, 0]} // Ajustez cette position selon vos besoins
      scale={0.1} // Ajustez cette échelle selon vos besoins
    >
      <div style={{ width: "1000px" }}> {/* Ajustez cette largeur selon vos besoins */}
        <ContactSection />
      </div>
    </Html>
  );
}