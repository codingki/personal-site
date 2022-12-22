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
        title="About Me | Nur Fikri"
        description="Know me more"
        openGraph={{
          url: "https://kikiding.space/about",
          title: "About me | Nur Fikri",
          description: "Know me more",
          images: [
            {
              url: encodeURI(
                "https://kikiding.space/api/social-image?title=About Me&description=Know me more&path=https://kikiding.space/about",
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
        <Box minH={[250, 400, 480]} position="relative" className="handDrawnBorder" m={4} mb={0}>
          <Image alt="actual me" src="/kiki.jpg" layout="fill" objectFit="cover" />
        </Box>
        <Flex direction="column" gap={2} p={4} pt={2} pb={12}>
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
                          renderError={(e) => {
                            return <Text color="red">{e.message}</Text>;
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
            {data.about.content}
          </ReactMarkdown>
          <a href="/resume" target="_blank">
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
