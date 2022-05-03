import { CenterProps, Flex, forwardRef, Heading, Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { SinglePageContent } from "../../components/Layout";
import { Blog, getBlog, getPost } from "../api/fetch";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { Twitter } from "@chakra-icons/bootstrap";
import { SocialButton } from "../../components/Button";
import Link from "next/link";
import { NextSeo } from "next-seo";

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
              url: `https://kikiding.space/api/social-image?title=${data.blog.title}&description=${data.blog.excerpt}&path=https://kikiding.space/works/${data.blog.slug}`,
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
          <Link
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
          </Link>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={data.blog.content}
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
