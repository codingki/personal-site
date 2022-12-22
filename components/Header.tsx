import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { SOCIAL_LINKS } from "../constant/social";
import { SocialButton } from "./Button";

export const Header = () => {
  return (
    <Stack direction="row" w="full" bg="paper" align="flex-end" className="handDrawnBorder">
      <Stack p="8" px={["4", "8", "8"]}>
        <Heading>Hi👋 I&apos;m Kiki</Heading>
        <Text fontWeight="bold" fontSize={["xl", "2xl"]}>
          Creative Technologist
        </Text>
        <Text fontSize={["lg", "xl"]}>
          I&apos;m a designer who trapped in the mind of a programmer. Crafting beautiful apps with React and ❤️
        </Text>
        <Flex flexWrap="wrap" gap={2} pt="4">
          {SOCIAL_LINKS.map((item) => (
            <a href={item.link} key={item.title} target="_blank" rel="noopener">
              <SocialButton arial-label={item.title} as="button" fontSize="md" px={3} py={1}>
                {item.icon}
              </SocialButton>
            </a>
          ))}
        </Flex>
      </Stack>
      <Box display={["none", "none", "block"]} width={500} height={240} position="relative">
        <Image alt="Kiki Illustrated" src="/me.png" layout="fill" />
      </Box>
    </Stack>
  );
};
