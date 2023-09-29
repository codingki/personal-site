import { Twitter } from "@chakra-icons/bootstrap";
import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import type { AllworkQuery, SingleWorkQuery } from "graphql/generated";
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
              width: 1200,
              height: 630,
              alt: data.work?.title || "",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title={data.work?.title || ""}
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <SinglePageContent minH="75vh" p={0}>
        {data.work?.image ? (
          <Box className="handDrawnBorder" m={4} mb={0} minH={[250, 400]} position="relative">
            <Image
              alt={data.work.title || ""}
              fill
              sizes="100vw"
              src={data.work.image.url}
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        ) : null}

        <Flex direction="column" gap={4} p={4} pb={12} pt={4}>
          <Heading>{data.work?.title}</Heading>
          <Flex gap={2} wrap="wrap">
            {data.work?.categories?.split(", ").map((item) => (
              <MyButton
                key={item}
                as="div"
                bgColor="orange"
                color="paper"
                fontSize={["md"]}
                px="2"
                py="1"
                textTransform="capitalize"
              >
                {item}
              </MyButton>
            ))}
          </Flex>
          <Text fontSize="xl" fontWeight="semibold">
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
                  <Link color="blue" fontWeight="semibold" href={props.href || ""}>
                    {props.children}
                  </Link>
                );
              },
              img: (props) => {
                return (
                  <Box className="handDrawnBorderLight" minH={[250, 400, 480]} position="relative">
                    <Image
                      alt={data.work?.title || ""}
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
            {data.work?.about || ""}
          </ReactMarkdown>
          <Text fontSize="xl" fontWeight="semibold">
            Technology used :
          </Text>
          <Flex gap={2} wrap="wrap">
            {data.work?.technologyUsed?.split(", ").map((item) => (
              <MyButton
                key={item}
                as="div"
                bgColor="blue"
                color="paper"
                fontSize={["md"]}
                px="2"
                py="1"
                textTransform="capitalize"
              >
                {item}
              </MyButton>
            ))}
          </Flex>
          {data.work?.deployment ? (
            <Text fontSize="xl" fontWeight="semibold">
              Links :
            </Text>
          ) : null}

          <Flex gap={2} wrap="wrap">
            {data.work?.deployment?.split(", ").map((item) => {
              const val = item.split(": ");
              const txt = `${val[0]?.charAt(0).toUpperCase()} ${val[0]?.slice(1)}`;
              return (
                <a key={val[1]} href={val[1]} rel="noopener" target="_blank">
                  <MyButton
                    as="a"
                    bgColor="paper"
                    color="black"
                    fontSize={["md"]}
                    px="2"
                    py="1"
                    textTransform="capitalize"
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
              alignSelf="flex-end"
              as="a"
              bgColor="twitter.500"
              color="paper"
              fontSize="md"
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
        </Flex>
      </SinglePageContent>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const workRes = await request<AllworkQuery>(AllworkDocument);
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
