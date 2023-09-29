import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { SOCIAL_LINKS } from "../constant/social";
import { SocialButton } from "./Button";

export const Header = () => {
  return (
    <Stack align="flex-end" bg="paper" className="handDrawnBorder" direction="row" w="full">
      <Stack p="8" px={["4", "8", "8"]}>
        <Heading>Hi👋 I&apos;m Kiki</Heading>
        <Text fontSize={["xl", "2xl"]} fontWeight="bold">
          Creative Technologist
        </Text>
        <Text fontSize={["lg", "xl"]}>
          I&apos;m a designer who trapped in the mind of a programmer. Crafting beautiful apps with React and ❤️
        </Text>
        <Flex flexWrap="wrap" gap={2} pt="4">
          {SOCIAL_LINKS.map((item) => (
            <a key={item.title} href={item.link} rel="noopener" target="_blank">
              <SocialButton arial-label={item.title} as="button" fontSize="md" px={3} py={1}>
                {item.icon}
              </SocialButton>
            </a>
          ))}
        </Flex>
      </Stack>
      <Box display={["none", "none", "block"]} height={240} position="relative" width={500}>
        <Image alt="Kiki Illustrated" fill sizes="100vw" src="/me.png" />
      </Box>
    </Stack>
  );
};
