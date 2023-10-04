import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { AboutPageDocument } from "graphql/generated";
import { request } from "lib/request";
import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import { Tweet } from "react-twitter-widgets";

import { MyButton } from "../components/Button";
import { SinglePageContent } from "../components/Layout";

export interface AboutPageProps {
  data: { about: { content: string } };
}

const About: NextPage<AboutPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        description="Know me more"
        openGraph={{
          url: "https://kikiding.space/about",
          title: "About me | Nur Fikri",
          description: "Know me more",
          images: [
            {
              url: encodeURI("https://kikiding.space/api/social-image?title=About Kiki&description=Know me more"),
              width: 1200,
              height: 630,
              alt: "kikiding.space",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title="About Me | Nur Fikri"
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <SinglePageContent minH={["75vh", "65vh"]} p={0}>
        <Center mb="24px">
          <Box className="handDrawnBorder" h="200px" m={4} mb={0} position="relative" w="200px">
            <Image
              alt="actual me"
              fill
              sizes="100vw"
              src="/kiki.jpg"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Center>
        <Flex direction="column" gap={2} p={4} pb={12} pt={2}>
          <ReactMarkdown
            components={{
              ...ChakraUIRenderer(),
              a: (props) => {
                if (props.href?.startsWith("https://twitter.com")) {
                  return (
                    <Center my={2}>
                      <Box minW={["100%", "100%", "500px"]}>
                        <Tweet
                          renderError={(e) => {
                            return <Text color="red">{e.message}</Text>;
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
            {data.about.content}
          </ReactMarkdown>
          <a href="https://resume.io/r/f6cCyb6zF" rel="noopener" target="_blank">
            <MyButton bgColor="orange" color="paper">
              View my resume
            </MyButton>
          </a>
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await request(AboutPageDocument);
  return {
    props: { data },
  };
};

export default About;
