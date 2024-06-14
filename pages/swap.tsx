import { SwapWidget, SwapWidgetProvider } from "@skip-go/widget";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import { SinglePageContent } from "../components/Layout";

const Swap: NextPage = () => {
  return (
    <>
      <NextSeo
        description="My current state"
        openGraph={{
          url: "https://kikiding.space/now",
          title: "Swap | Nur Fikri",
          description: "Swap page",
          images: [
            {
              url: encodeURI("https://kikiding.space/api/social-image?title=Swap Page"),
              width: 1200,
              height: 630,
              alt: "kikiding.space",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title="Swap | Nur Fikri"
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <SinglePageContent
        alignSelf="center"
        className="handDrawnBorderLight"
        justifySelf="center"
        minH={["75vh", "65vh"]}
        p={4}
        w="450px"
      >
        <SwapWidgetProvider>
          <SwapWidget />
        </SwapWidgetProvider>
      </SinglePageContent>
    </>
  );
};

export default Swap;
