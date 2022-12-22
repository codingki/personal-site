import { Twitter } from "@chakra-icons/bootstrap";
import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { format } from "date-fns";
import type { SingleBlogQuery } from "graphql/generated";
import { AllBlogDocument, SingleBlogDocument } from "graphql/generated";
import { request } from "lib/request";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import { Tweet } from "react-twitter-widgets";

import { SocialButton } from "../../components/Button";
import { SinglePageContent } from "../../components/Layout";

export interface SingleBlogPageProps {
  data: SingleBlogQuery;
}

const SingleBlog: NextPage<SingleBlogPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title={data.blog?.title || ""}
        description={data.blog?.excerpt || ""}
        openGraph={{
          url: `https://kikiding.space/blog/${data.blog?.slug}`,
          title: data.blog?.title || "",
          description: data.blog?.excerpt || "",
          images: [
            {
              url: encodeURI(
                `https://kikiding.space/api/social-image?title=${data.blog?.title}&description=${data.blog?.excerpt}&path=https://kikiding.space/blog/${data.blog?.slug}`,
              ),
              width: 1024,
              height: 512,
              alt: data.blog?.title || "",
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
        <Flex direction="column" height="100%" gap={2} p={4} pt={4} pb={12}>
          <Heading>{data.blog?.title}</Heading>
          <Text fontWeight="semibold" fontSize="lg">
            {data.blog?.categories} | {data.blog?.date && format(new Date(data.blog.date), "dd MMM yyyy")}
          </Text>
          <NextLink
            href={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${data.blog?.slug}&text=${data.blog?.title}`}
            passHref
          >
            <SocialButton
              bgColor="twitter.500"
              color="paper"
              as="a"
              alignSelf="flex-start"
              fontSize="md"
              py={0.5}
              px={3}
              // @ts-expect-error
              target="_blank"
              mb={4}
            >
              <Twitter color="paper" />
              Share to twitter
            </SocialButton>
          </NextLink>
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
                    <Image alt={data.blog?.title || ""} src={String(props.src)} layout="fill" objectFit="cover" />
                  </Box>
                );
              },
            }}
            skipHtml
          >
            {data.blog?.content || ""}
          </ReactMarkdown>
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await request(AllBlogDocument);
  const allPosts = allBlogs.allBlogs;
  return {
    paths: allPosts.map((post) => `/blog/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await request(SingleBlogDocument, { slug: params?.slug });
  return {
    props: { data },
  };
};

export default SingleBlog;
