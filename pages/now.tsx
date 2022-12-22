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
        title="Now | Nur Fikri"
        description="My current state"
        openGraph={{
          url: "https://kikiding.space/now",
          title: "Now | Nur Fikri",
          description: "My current state",
          images: [
            {
              url: encodeURI(
                "https://kikiding.space/api/social-image?title=Now Page&description=My current state&path=https://kikiding.space/now",
              ),
              width: 1024,
              height: 512,
              alt: "kikiding.space",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <SinglePageContent minH={["75vh", "65vh"]} p={0}>
        <Flex direction="column" gap={2} p={4} pt={6} pb={12}>
          <Heading>Current state</Heading>
          <Text fontWeight="semibold" fontSize="lg" mb={4}>
            Last updated : {data.now?.updatedAt && format(new Date(data.now.updatedAt), "dd MMM yyyy")}
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
                          tweetId={String(props.href.split("status/")[1]?.split("?")[0])}
                          renderError={(error) => {
                            return <Text>{error.message}</Text>;
                          }}
                        />
                      </Box>
                    </Center>
                  );
                }
                return (
                  <Link href={props.href || ""} color="blue" fontWeight="semibold">
                    {props.children}
                  </Link>
                );
              },
              img: (props) => {
                return (
                  <Box minH={[250, 400, 480]} position="relative" className="handDrawnBorderLight">
                    <Image alt="about" src={String(props.src)} layout="fill" objectFit="cover" />
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
  const data = await request(NowPageDocument);
  return {
    props: { data },
  };
};

export default Now;
