import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import type { HomeQueryQuery } from "graphql/generated";
import { HomeQueryDocument } from "graphql/generated";
import { request } from "lib/request";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { MyButton } from "../components/Button";
import { BlogCard, CardShell, VCardLayoutList, WorkCard } from "../components/Card";
import { Header } from "../components/Header";

export interface HomePageProps {
  data: HomeQueryQuery;
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        description="I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app."
        openGraph={{
          url: "https://kikiding.space/",
          title: "Nur Fikri | Front-end Developer",
          description:
            "I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app.",
          images: [
            {
              url: encodeURI("https://kikiding.space/api/social-image"),
              width: 1200,
              height: 630,
              alt: "kikiding.space",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title="Nur Fikri | Front-end Developer"
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <VCardLayoutList link="/blog" title="Recent Posts">
        {data.allBlogs.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </VCardLayoutList>
      <VCardLayoutList link="/works" title="Recent Works">
        {data.allWorks.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </VCardLayoutList>

      <Stack spacing="4">
        <Flex align="center" justifyContent="space-between">
          <MyButton as="div" bgColor="blue" color="paper">
            Timeline
          </MyButton>
        </Flex>
        <Stack direction="column" spacing={0}>
          {data.allLogLists.map((item, index) => (
            <Stack key={item.date} direction="row" spacing={0}>
              {index !== 0 ? (
                <Box className="handDrawnBorderLeft" />
              ) : (
                <Box className="handDrawnBorderLeft" marginTop="34px" />
              )}

              <Box alignSelf="center" backgroundColor="black" height="6px" w="8px" />
              <Box alignSelf="center" backgroundColor="orange" boxSize={6} className="handDrawnBorder" />

              <Box display="flex" pl={[2, 3, 4]} py="2" w="full">
                <CardShell p="2" px="4">
                  <Stack
                    alignItems={["flex-start", "flex-start", "center"]}
                    direction={["column", "column", "row"]}
                    spacing={[0, 0, 4]}
                  >
                    <Text fontSize={["xl"]} fontWeight="bold">
                      {item.date ? format(new Date(item.date), "MMM yyyy") : null}
                    </Text>
                    <Text fontSize={["lg"]} fontWeight="normal">
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
  const data = await request<HomeQueryQuery>(HomeQueryDocument);
  return {
    props: { data },
  };
};

export default Home;
