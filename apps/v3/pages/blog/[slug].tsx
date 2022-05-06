import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { SinglePageContent } from "../../components/Layout";
import { Blog, getBlog, getPost } from "../api/fetch";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { Twitter } from "@chakra-icons/bootstrap";
import { SocialButton } from "../../components/Button";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import { Tweet } from "react-twitter-widgets";

export interface SingleBlogPageProps {
  data: { blog: Blog };
}

const SingleBlog: NextPage<SingleBlogPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title={data.blog.title}
        description={data.blog.excerpt}
        openGraph={{
          url: `https://kikiding.space/blog/${data.blog.slug}`,
          title: data.blog.title,
          description: data.blog.excerpt,
          images: [
            {
              url: encodeURI(
                `https://kikiding.space/api/social-image?title=${data.blog.title}&description=${data.blog.excerpt}&path=https://kikiding.space/blog/${data.blog.slug}`
              ),
              width: 1024,
              height: 512,
              alt: data.blog.title,
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
          <Heading>{data.blog.title}</Heading>
          <Text fontWeight="semibold" fontSize="lg">
            {data.blog.categories} |{" "}
            {format(new Date(data.blog.date), "dd MMM yyyy")}
          </Text>
          <NextLink
            href={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${data.blog.slug}&text=${data.blog.title}`}
            passHref
          >
            <SocialButton
              bgColor="twitter.500"
              color="paper"
              as="a"
              alignSelf="flex-start"
              fontSize={"md"}
              py={0.5}
              px={3}
              // @ts-ignore
              target="_blank"
              mb={4}
            >
              <Twitter color="paper" />
              Share to twitter
            </SocialButton>
          </NextLink>
          <ReactMarkdown
            children={data.blog.content}
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
            }}
            skipHtml
          />
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await getBlog();
  const allPosts = allBlogs.allBlogs;
  return {
    paths: allPosts.map((post) => `/blog/${post.slug}`) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPost(params?.slug);
  return {
    props: { data },
  };
};

export default SingleBlog;
