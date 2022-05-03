import { Twitter } from "@chakra-icons/bootstrap";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { MyButton, SocialButton } from "../../components/Button";
import { SinglePageContent } from "../../components/Layout";
import { getWork, getWorkPost, Work } from "../api/fetch";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

export interface SingleWorkPageProps {
  data: {
    work: Work;
  };
}

const SingleWork: NextPage<SingleWorkPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title={data.work.title}
        description={data.work.excerpt}
        openGraph={{
          url: `https://kikiding.space/works/${data.work.slug}`,
          title: data.work.title,
          description: data.work.excerpt,
          images: [
            {
              url: `https://kikiding.space/api/social-image?title=${data.work.title}&description=${data.work.excerpt}&path=https://kikiding.space/works/${data.work.slug}`,
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
      <SinglePageContent minH="75vh" p={0}>
        {data.work.image && (
          <Box
            minH={[250, 400]}
            position="relative"
            className="handDrawnBorder"
            m={4}
            mb={0}
          >
            <Image
              alt={data.work.title}
              src={data.work.image.url}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        )}

        <Flex direction="column" p={4} pt={4} pb={12} gap={4}>
          <Heading>{data.work.title}</Heading>
          <Flex wrap="wrap" gap={2}>
            {data.work.categories.split(", ").map((item) => (
              <MyButton
                bgColor="orange"
                color="paper"
                px="2"
                py="1"
                textTransform="capitalize"
                fontSize={["md"]}
                as="div"
              >
                {item}
              </MyButton>
            ))}
          </Flex>
          <Text fontWeight="semibold" fontSize="xl">
            About the project
          </Text>
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={data.work.about}
            skipHtml
          />
          <Text fontWeight="semibold" fontSize="xl">
            Technology used :
          </Text>
          <Flex wrap="wrap" gap={2}>
            {data.work.technologyUsed.split(", ").map((item) => (
              <MyButton
                bgColor="blue"
                color="paper"
                px="2"
                py="1"
                textTransform="capitalize"
                fontSize={["md"]}
                as="div"
              >
                {item}
              </MyButton>
            ))}
          </Flex>
          {data.work.deployment && (
            <Text fontWeight="semibold" fontSize="xl">
              Links :
            </Text>
          )}

          <Flex wrap="wrap" gap={2}>
            {data.work.deployment &&
              data.work.deployment.split(", ").map((item) => {
                const val = item.split(": ");
                const txt = val[0].charAt(0).toUpperCase() + val[0].slice(1);
                return (
                  <Link href={val[1]} passHref>
                    <a target="_blank">
                      <MyButton
                        bgColor="paper"
                        color="black"
                        px="2"
                        py="1"
                        textTransform="capitalize"
                        fontSize={["md"]}
                        as="a"
                      >
                        {txt}
                      </MyButton>
                    </a>
                  </Link>
                );
              })}
          </Flex>
          <Link
            href={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${data.work.slug}&text=${data.work.title}`}
            passHref
          >
            <SocialButton
              bgColor="twitter.500"
              color="paper"
              as="a"
              alignSelf="flex-end"
              fontSize={"md"}
              py={0.5}
              px={3}
              // @ts-ignore
              target="_blank"
            >
              <Twitter color="paper" />
              Share to twitter
            </SocialButton>
          </Link>
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const workRes = await getWork();
  const allWorks = workRes.allWorks;
  return {
    paths: allWorks.map((post) => `/works/${post.slug}`) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getWorkPost(params?.slug);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};

export default SingleWork;
