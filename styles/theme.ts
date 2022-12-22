import type { ThemeOverride } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("yellow", "gray.800")(props),
        lineHeight: "base",
      },
      "*::placeholder": {
        color: mode("gray.400", "whiteAlpha.400")(props),
      },
      "*, *::before, &::after": {
        borderColor: mode("gray.200", "whiteAlpha.300")(props),
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
