import type { StackProps } from "@chakra-ui/react";
import { Box, Stack } from "@chakra-ui/react";
import React from "react";

import { Navigation } from "./Navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minH="100vh" pb="40" pt={[10, 20]} px={[4, 8]} w="full">
      <Stack maxW="3xl" mx="auto" spacing={10}>
        {children}
      </Stack>
      <Navigation />
    </Box>
  );
};

export const SinglePageContent: React.FC<StackProps> = (props) => (
  <Stack bg="paper" className="handDrawnBorder" p="4" spacing={1} w="full" {...props} />
);
