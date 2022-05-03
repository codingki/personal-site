import { Flex, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import type { GetStaticProps, NextPage } from "next";
import { SinglePageContent } from "../components/Layout";
import { getAbout, getNow } from "./api/fetch";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";
import { MyButton } from "../components/Button";
import Link from "next/link";

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
              url: "https://kikiding.space/api/social-image?title=About Me&description=Know me more&path=https://kikiding.space/about",
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
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={data.about.content}
            skipHtml
          />
          <Link href="/resume" passHref>
            <a target="_blank">
              <MyButton bgColor="orange" color="paper">
                View my resume
              </MyButton>
            </a>
          </Link>
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
