import { HStack, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { NAVIGATION } from "../constant/navigation";
import { MyButton } from "./Button";

export const Navigation = () => {
  const routes = useRouter();
  const variant = useBreakpointValue(["handDrawnBorderLight", "handDrawnBorder"]);
  if (routes.pathname === "/image") return null;
  return (
    <HStack
      bgColor="orange"
      bottom={4}
      className={`${variant} centerFixed hideScrollbar`}
      maxW="calc(100vw - 14px)"
      overflow="auto !important"
      position="fixed"
      px={["3", "4"]}
      py={["2", "2"]}
      spacing={["1"]}
    >
      {NAVIGATION.map((item) => (
        <Link key={item.title} href={item.path} passHref>
          <MyButton
            bgColor={`/${routes.pathname.split("/")[1]}` === item.path ? "blue" : "paper"}
            color={`/${routes.pathname.split("/")[1]}` === item.path ? "paper" : "black"}
            fontSize={["md", "xl"]}
            minW={["65px", "97px"]}
            px={["1", "4"]}
            py={["0.5", "1"]}
            textTransform="capitalize"
          >
            {item.title}
          </MyButton>
        </Link>
      ))}
    </HStack>
  );
};
