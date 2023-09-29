import type { CenterProps } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import React from "react";

export const MyButton: React.FC<CenterProps> = (props) => (
  <Center
    as="button"
    className="handDrawnBorderLight"
    fontSize={["md", "xl"]}
    fontWeight="bold"
    gap="2"
    px={["2.5", 4]}
    py="1"
    {...props}
  />
);

export const SocialButton: React.FC<CenterProps> = (props) => (
  <MyButton bgColor="orange" color="paper" px={["3", "4"]} {...props}>
    {props.children}
  </MyButton>
);
