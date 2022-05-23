import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { MyButton } from "../components/Button";
import {
  BlogCard,
  CardShell,
  HCardLayoutList,
  VCardLayoutList,
  WorkCard,
} from "../components/Card";
import { Header } from "../components/Header";
import { Blogs, getHome, LogList, Works } from "./api/fetch";

export interface HomePageProps {
  data: Works & Blogs & { allLogLists: LogList[] };
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title="Nur Fikri | Front-end Developer"
        description="I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app."
        openGraph={{
          url: "https://kikiding.space/",
          title: "Nur Fikri | Front-end Developer",
          description:
            "I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app.",
          images: [
            {
              url: encodeURI(
                "https://kikiding.space/api/social-image?title=Hi,%20I%20am%20Kiki&description=I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app&path=https://kikiding.space/"
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
      <Header />
      <HCardLayoutList link="/blog" title="Recent Posts">
        {data.allBlogs.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </HCardLayoutList>
      <VCardLayoutList link="/works" title="Recent Works">
        {data.allWorks.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </VCardLayoutList>

      <Stack spacing="4">
        <Flex align="center" justifyContent="space-between">
          <MyButton bgColor="blue" color="paper" as="div">
            Timeline
          </MyButton>
        </Flex>
        <Stack direction="column" spacing={0}>
          {data.allLogLists.map((item, index) => (
            <Stack key={index} direction={"row"} spacing={0}>
              {index !== 0 ? (
                <Box className="handDrawnBorderLeft" />
              ) : (
                <Box className="handDrawnBorderLeft" marginTop={"34px"} />
              )}

              <Box
                w="8px"
                height={"6px"}
                backgroundColor="black"
                alignSelf={"center"}
              />
              <Box
                boxSize={6}
                className="handDrawnBorder"
                backgroundColor="orange"
                alignSelf={"center"}
              />

              <Box display={"flex"} w="full" py="2" pl={[2, 3, 4]}>
                <CardShell p="2" px="4">
                  <Stack
                    direction={["column", "column", "row"]}
                    alignItems={["flex-start", "flex-start", "center"]}
                    spacing={[0, 0, 4]}
                  >
                    <Text fontWeight="bold" fontSize={["xl"]}>
                      {format(new Date(item.date), "MMM yyyy")}
                    </Text>
                    <Text fontWeight="normal" fontSize={["lg"]}>
                      {item.content}
                    </Text>
                  </Stack>
                </CardShell>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getHome()) || [];
  return {
    props: { data },
  };
};

export default Home;
