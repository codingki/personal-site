import { Twitter } from "@chakra-icons/bootstrap";
import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { format } from "date-fns";
import type { AllBlogQuery, SingleBlogQuery } from "graphql/generated";
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
              width: 1200,
              height: 630,
              alt: data.blog?.title || "",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title={data.blog?.title || ""}
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <SinglePageContent minH={["75vh", "65vh"]} p={0}>
        <Flex direction="column" gap={2} height="100%" p={4} pb={12} pt={4}>
          <Heading>{data.blog?.title}</Heading>
          <Text fontSize="lg" fontWeight="semibold">
            {data.blog?.categories} | {data.blog?.date ? format(new Date(data.blog.date), "dd MMM yyyy") : null}
          </Text>
          <NextLink
            href={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${data.blog?.slug}&text=${data.blog?.title}`}
            passHref
          >
            <SocialButton
              alignSelf="flex-start"
              as="a"
              bgColor="twitter.500"
              color="paper"
              fontSize="md"
              mb={4}
              px={3}
              py={0.5}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              target="_blank"
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
                  <Link color="blue" fontWeight="semibold" href={props.href}>
                    {props.children}
                  </Link>
                );
              },
              img: (props) => {
                return (
                  <Box className="handDrawnBorderLight" minH={[250, 400, 480]} position="relative">
                    <Image
                      alt={data.blog?.title || ""}
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
            {data.blog?.content || ""}
          </ReactMarkdown>
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await request<AllBlogQuery>(AllBlogDocument);
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
