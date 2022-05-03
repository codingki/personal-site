import { Box, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Image from "next/image";

const SocialImage = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) => (
  <Flex
    direction="row"
    p={14}
    py={20}
    position={"absolute"}
    top={0}
    left={0}
    width="1024px"
    height="512px"
  >
    <Stack
      direction="row"
      w="full"
      bg="paper"
      align="center"
      className="handDrawnBorder"
    >
      <Stack p={"8"} px={["4", "8", "8"]} minW="70%">
        <Heading fontWeight="bold" fontSize="4xl">
          {title}
        </Heading>
        <Text fontSize={["lg", "2xl"]} fontWeight="semibold">
          {description}
        </Text>
        <Text fontSize="lg">{path}</Text>
      </Stack>
      <Box
        display={["none", "none", "block"]}
        width={500}
        height={250}
        position="relative"
        alignSelf="flex-end"
      >
        <Image src={"/me.png"} layout="fill" />
      </Box>
    </Stack>
  </Flex>
);
export default SocialImage;

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
