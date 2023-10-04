import type { ImageProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import NextImage from "next/image";
import * as React from "react";

export const ChakraNextImage = (props: ImageProps) => {
  const { src, alt, ...rest } = props;
  return (
    <Box position="relative" {...rest}>
      <NextImage
        alt={alt || ""}
        blurDataURL="image-loading.jpg"
        fill
        objectFit="cover"
        placeholder="blur"
        src={src || ""}
      />
    </Box>
  );
};
