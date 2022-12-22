import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import type { GetServerSideProps } from "next";

const SocialImage = ({ title, description, path }: { title: string; description: string; path: string }) => (
  <Flex direction="row" p={14} py={20} position="absolute" top={0} left={0} width="1024px" height="512px">
    <Flex direction="row" w="full" bg="paper" align="center" className="handDrawnBorder">
      <Stack p="8" px={["4", "8", "8"]}>
        <Heading fontWeight="bold" fontSize="4xl">
          {title}
        </Heading>
        <Text fontSize={["lg", "2xl"]} fontWeight="semibold">
          {description}
        </Text>
        <Text fontSize="lg">{path}</Text>
      </Stack>
    </Flex>
  </Flex>
);
export default SocialImage;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async (context) => {
  const t = context.query.title || "";
  const d = context.query.description || "";
  const p = context.query.path || "";

  return {
    props: {
      title: t,
      description: d,
      path: p,
    },
  };
};
