import { Twitter, Github, Youtube } from "@chakra-icons/bootstrap";
import { Stack, Heading, Flex, Box, Text } from "@chakra-ui/react";
import { SocialButton } from "./Button";
import Image from "next/image";
import { SOCIAL_LINKS } from "../constant/social";
import Link from "next/link";

export const Header = () => (
  <Stack
    direction="row"
    w="full"
    bg="paper"
    align="flex-end"
    className="handDrawnBorder"
  >
    <Stack p={"8"} px={["4", "8", "8"]}>
      <Heading>Hi👋 I'm Kiki</Heading>
      <Text fontWeight="bold" fontSize={["xl", "2xl"]}>
        Creative Technologist
      </Text>
      <Text fontSize={["lg", "xl"]}>
        I’m a designer who trapped in the mind of a programmer. Crafting
        beautiful apps with React and ❤️
      </Text>
      <Flex flexWrap="wrap" gap={2} pt="4">
        {SOCIAL_LINKS.map((item) => (
          <Link href={item.link} key={item.title} passHref>
            <a target="_blank">
              <SocialButton>{item.icon}</SocialButton>
            </a>
          </Link>
        ))}
      </Flex>
    </Stack>
    <Box
      display={["none", "none", "block"]}
      width={500}
      height={240}
      position="relative"
    >
      <Image src={"/me.png"} layout="fill" />
    </Box>
  </Stack>
);
