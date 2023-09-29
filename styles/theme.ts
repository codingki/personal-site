import type { ThemeOverride } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Mali , cursive",
    heading: "Mali, cursive",
  },
  colors: {
    orange: "rgb(249, 90, 44)",
    yellow: "rgb(255, 189, 18)",
    blue: "rgb(25, 71, 229)",
    paper: "#fbfbf8",
    black: "#0a0a0a",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "body",
        color: "gray.800",
        bg: "yellow",
        lineHeight: "base",
      },
      "*::placeholder": {
        color: "gray.400",
      },
      "*, *::before, &::after": {
        borderColor: "gray.200",
        wordWrap: "break-word",
      },
      ".handDrawnBorder": {
        borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
        border: "solid 6px #0a0a0a",
        overflow: "hidden",
      },
      ".handDrawnBorder:hover": {
        borderRadius: "10px 212px 30px 251px/223px 12px 223px 25px",
        border: "solid 6px #0a0a0a",
        overflow: "hidden",
      },
      ".handDrawnBorderLight": {
        borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
        border: "solid 4px #0a0a0a",
        overflow: "hidden",
      },
      ".handDrawnBorderLight:hover": {
        borderRadius: "10px 212px 30px 251px/223px 12px 223px 25px",
        border: "solid 4px #0a0a0a",
        overflow: "hidden",
      },
      ".centerFixed": {
        left: "50%",
        transform: "translateX(-50%)",
      },
      ".hideScrollbar::-webkit-scrollbar": {
        display: "none",
      },
      ".hideScrollbar": {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      },
      ".handDrawnBorderLeft": {
        borderRadius: "0px 15px 225px 15px/15px 225px 15px 255px",
        borderLeft: "solid 6px #0a0a0a",
        borderTop: "solid 6px #0a0a0a",
        overflow: "hidden",
      },
    }),
  },
} as ThemeOverride);
