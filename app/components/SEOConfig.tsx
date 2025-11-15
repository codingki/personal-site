import { generateDefaultSeo } from "next-seo/pages";

export default function SEOConfig() {
  return (
    <>
      {generateDefaultSeo({
        title: "Nur Fikri (Kiki) - Software Engineer",
        description:
          "Software Engineer that focused on frontend development. Passionate about building scalable systems and beautiful user experiences with React, Next.js, and TypeScript.",
        canonical: "https://kikiding.space",
        openGraph: {
          type: "website",
          locale: "en_US",
          url: "https://kikiding.space",
          siteName: "Nur Fikri",
          title: "Nur Fikri (Kiki) - Software Engineer",
          description:
            "Software Engineer that focused on frontend development. Passionate about building scalable systems and beautiful user experiences with React, Next.js, and TypeScript.",
          images: [
            {
              url: "https://kikiding.space/og-image.png",
              width: 1200,
              height: 630,
              alt: "Nur Fikri - Software Engineer",
              type: "image/png",
            },
          ],
        },
        twitter: {
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        },
        additionalMetaTags: [
          {
            name: "keywords",
            content:
              "Nur Fikri, Kiki, Software Engineer, Frontend Developer, Frontend Engineer, React Developer, Next.js Developer, TypeScript, React Native, Cosmos Labs, Blockchain Developer, Full Stack Developer, Jakarta, Indonesia, Web Developer, Ethers, Viem, CosmJS",
          },
          {
            name: "author",
            content: "Nur Fikri",
          },
        ],
        additionalLinkTags: [
          {
            rel: "icon",
            href: "/icon.svg",
          },
          {
            rel: "apple-touch-icon",
            href: "/icon.svg",
          },
        ],
        robotsProps: {
          nosnippet: false,
          notranslate: false,
          noimageindex: false,
          noarchive: false,
          maxSnippet: -1,
          maxImagePreview: "large",
          maxVideoPreview: -1,
        },
      })}
    </>
  );
}
