import { Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NAVIGATION } from "../constant/navigation";
import { MyButton } from "./Button";

export const Navigation = () => {
  const routes = useRouter();
  const variant = useBreakpointValue([
    "handDrawnBorderLight",
    "handDrawnBorder",
  ]);
  if (routes.pathname === "/image") return null;
  return (
    <HStack
      position="fixed"
      px={["3", "4"]}
      py={["2", "2"]}
      bgColor="orange"
      className={`${variant} centerFixed hideScrollbar`}
      bottom={4}
      spacing={["1"]}
      maxW="calc(100vw - 14px)"
      overflow="auto !important"
    >
      {NAVIGATION.map((item) => (
        <Link href={item.path} passHref key={item.title}>
          <a>
            <MyButton
              bgColor={
                `/${routes.pathname.split("/")[1]}` === item.path
                  ? "blue"
                  : "paper"
              }
              color={
                `/${routes.pathname.split("/")[1]}` === item.path
                  ? "paper"
                  : "black"
              }
              minW={["65px", "97px"]}
              px={["1", "4"]}
              py={["0.5", "1"]}
              textTransform="capitalize"
              fontSize={["md", "xl"]}
            >
              {item.title}
            </MyButton>
          </a>
        </Link>
      ))}
    </HStack>
  );
};
