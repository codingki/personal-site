import { Box, Center, Flex, Link } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import { SinglePageContent } from "../components/Layout";
import { getAbout } from "./api/fetch";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";
import { MyButton } from "../components/Button";
import NextLink from "next/link";
import Image from "next/image";
import { Tweet } from "react-twitter-widgets";

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
                "https://kikiding.space/api/social-image?title=About Me&description=Know me more&path=https://kikiding.space/about"
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
        <Box
          minH={[250, 400]}
          position="relative"
          className="handDrawnBorder"
          m={4}
          mb={0}
        >
          <Image
            alt={"actual me"}
            src={"/actualme.jpeg"}
            layout="fill"
            objectFit="cover"
          />
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
                          tweetId={String(
                            props.href.split("status/")[1].split("?")[0]
                          )}
                          renderError={(error) => {
                            return (
                              <NextLink href={"#"} passHref>
                                <Link color="blue">{props.children}</Link>
                              </NextLink>
                            );
                          }}
                        />
                      </Box>
                    </Center>
                  );
                } else {
                  return (
                    <NextLink href={"#"} passHref>
                      <Link color="blue" fontWeight="semibold">
                        {props.children}
                      </Link>
                    </NextLink>
                  );
                }
              },
              img: (props) => {
                return (
                  <Box
                    minH={[250, 400]}
                    position="relative"
                    className="handDrawnBorderLight"
                  >
                    <Image
                      alt={"about"}
                      src={String(props.src)}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                );
              },
            }}
            children={data.about.content}
            skipHtml
          />
          <NextLink href="/resume" passHref>
            <a target="_blank">
              <MyButton bgColor="orange" color="paper">
                View my resume
              </MyButton>
            </a>
          </NextLink>
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAbout();
  return {
    props: { data },
  };
};

export default About;
