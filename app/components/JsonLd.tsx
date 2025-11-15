import { JsonLdScript } from "next-seo";

export default function JsonLd() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nur Fikri",
    alternateName: "Kiki",
    url: "https://kikiding.space",
    image: "https://kikiding.space/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "Indonesia",
    },
    sameAs: [
      "https://github.com/codingki",
      "https://twitter.com/kikiding",
      "https://linkedin.com/in/nur-fikri",
    ],
    knowsAbout: [
      "React",
      "React Native",
      "Electron",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Blockchain Development",
      "Web Development",
      "Software Engineering",
      "Ethers",
      "Viem",
      "CosmJS",
    ],
  };

  return <JsonLdScript data={personData} scriptKey="person-jsonld" />;
}
