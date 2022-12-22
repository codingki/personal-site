import type { NextSeoProps } from "next-seo";
import { NextSeo } from "next-seo";

export const SEO = (props: NextSeoProps) => (
  <NextSeo
    title="Nur Fikri | Front-end Developer"
    description="Im a guy that can code and design, but internet makes me can do anything. Crafting beautiful apps with React and ❤️"
    openGraph={{
      url: "https://kikiding.space/",
      title: "Nur Fikri | Front-end Developer",
      description:
        "Im a guy that can code and design, but internet makes me can do anything. Crafting beautiful apps with React and ❤️",
      images: [
        {
          url: "https://kikiding.space/api/social-image?title=Hi,%20I%20am%20Kiki&description=Im%20a%20guy%20that%20can%20code%20and%20design,%20but%20internet%20makes%20me%20can%20do%20anything.%20Crafting%20beautiful%20apps%20with%20React&path=https://kikiding.space/",
        },
      ],
      site_name: "Kikiding.space",
    }}
    twitter={{
      handle: "@kikiding",
      site: "@kikiding",
      cardType: "summary_large_image",
    }}
    {...props}
  />
);
