import { Twitter } from "@chakra-icons/bootstrap";
import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import type { SingleWorkQuery } from "graphql/generated";
import { AllworkDocument, SingleWorkDocument } from "graphql/generated";
import { request } from "lib/request";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import { Tweet } from "react-twitter-widgets";

import { MyButton, SocialButton } from "../../components/Button";
import { SinglePageContent } from "../../components/Layout";

export interface SingleWorkPageProps {
  data: SingleWorkQuery;
}

const SingleWork: NextPage<SingleWorkPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title={data.work?.title || ""}
        description={data.work?.excerpt || ""}
        openGraph={{
          url: `https://kikiding.space/works/${data.work?.slug}`,
          title: data.work?.title || "",
          description: data.work?.excerpt || "",
          images: [
            {
              url: encodeURI(
                `https://kikiding.space/api/social-image?title=${data.work?.title}&description=${data.work?.excerpt}&path=https://kikiding.space/works/${data.work?.slug}`,
              ),
              width: 1024,
              height: 512,
              alt: data.work?.title || "",
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
      <SinglePageContent minH="75vh" p={0}>
        {data.work?.image && (
          <Box minH={[250, 400]} position="relative" className="handDrawnBorder" m={4} mb={0}>
            <Image
              alt={data.work.title || ""}
              src={data.work.image.url}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        )}

        <Flex direction="column" p={4} pt={4} pb={12} gap={4}>
          <Heading>{data.work?.title}</Heading>
          <Flex wrap="wrap" gap={2}>
            {data.work?.categories?.split(", ").map((item) => (
              <MyButton
                key={item}
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
                    <Image
                      alt={data.work?.title || ""}
                      src={String(props.src)}
                      fill
                      sizes="100vw"
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
            {data.work?.about || ""}
          </ReactMarkdown>
          <Text fontWeight="semibold" fontSize="xl">
            Technology used :
          </Text>
          <Flex wrap="wrap" gap={2}>
            {data.work?.technologyUsed?.split(", ").map((item) => (
              <MyButton
                key={item}
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
          {data.work?.deployment && (
            <Text fontWeight="semibold" fontSize="xl">
              Links :
            </Text>
          )}

          <Flex wrap="wrap" gap={2}>
            {data.work?.deployment?.split(", ").map((item) => {
              const val = item.split(": ");
              const txt = `${val[0]?.charAt(0).toUpperCase()} ${val[0]?.slice(1)}`;
              return (
                <a key={val[1]} href={val[1]} target="_blank" rel="noopener">
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
              );
            })}
          </Flex>
          <NextLink
            href={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${data.work?.slug}&text=${data.work?.title}`}
            passHref
          >
            <SocialButton
              bgColor="twitter.500"
              color="paper"
              as="a"
              alignSelf="flex-end"
              fontSize="md"
              py={0.5}
              px={3}
              // @ts-expect-error
              target="_blank"
            >
              <Twitter color="paper" />
              Share to twitter
            </SocialButton>
          </NextLink>
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const workRes = await request(AllworkDocument);
  const allWorks = workRes.allWorks;
  return {
    paths: allWorks.map((post) => `/works/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await request(SingleWorkDocument, { slug: params?.slug });

  return {
    props: { data },
  };
};

export default SingleWork;
