import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { format } from "date-fns";
import type { NowPageQuery } from "graphql/generated";
import { NowPageDocument } from "graphql/generated";
import { request } from "lib/request";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import { Tweet } from "react-twitter-widgets";

import { SinglePageContent } from "../components/Layout";

export interface NowPageProps {
  data: NowPageQuery;
}

const Now: NextPage<NowPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        description="My current state"
        openGraph={{
          url: "https://kikiding.space/now",
          title: "Now | Nur Fikri",
          description: "My current state",
          images: [
            {
              url: encodeURI("https://kikiding.space/api/social-image?title=Now Page&description=My current state"),
              width: 1200,
              height: 630,
              alt: "kikiding.space",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title="Now | Nur Fikri"
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <SinglePageContent minH={["75vh", "65vh"]} p={0}>
        <Flex direction="column" gap={2} p={4} pb={12} pt={6}>
          <Heading>Current state</Heading>
          <Text fontSize="lg" fontWeight="semibold" mb={4}>
            Last updated : {data.now?.updatedAt ? format(new Date(data.now.updatedAt), "dd MMM yyyy") : null}
          </Text>
          <ReactMarkdown
            components={{
              ...ChakraUIRenderer(),
              a: (props) => {
                if (props.href?.startsWith("https://twitter.com")) {
                  return (
                    <Center my={2}>
                      <Box minW={["100%", "100%", "500px"]}>
                        <Tweet
                          renderError={(error) => {
                            return <Text>{error.message}</Text>;
                          }}
                          tweetId={String(props.href.split("status/")[1]?.split("?")[0])}
                        />
                      </Box>
                    </Center>
                  );
                }
                return (
                  <Link color="blue" fontWeight="semibold" href={props.href || ""}>
                    {props.children}
                  </Link>
                );
              },
              img: (props) => {
                return (
                  <Box className="handDrawnBorderLight" minH={[250, 400, 480]} position="relative">
                    <Image
                      alt="about"
                      fill
                      sizes="100vw"
                      src={String(props.src)}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                );
              },
            }}
            skipHtml
          >
            {data.now?.content || ""}
          </ReactMarkdown>
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await request<NowPageQuery>(NowPageDocument);
  return {
    props: { data },
  };
};

export default Now;
