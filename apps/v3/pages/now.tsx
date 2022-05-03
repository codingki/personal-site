import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import type { GetStaticProps, NextPage } from "next";
import { SinglePageContent } from "../components/Layout";
import { getNow } from "./api/fetch";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";

export interface NowPageProps {
  data: { now: { content: string; updatedAt: Date } };
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
              url: "https://kikiding.space/api/social-image?title=Now Page&description=My current state&path=https://kikiding.space/now",
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
            {format(new Date(data.now.updatedAt), "dd MMM yyyy")}
          </Text>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={data.now.content}
            skipHtml
          />
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getNow();
  return {
    props: { data },
  };
};

export default Now;
