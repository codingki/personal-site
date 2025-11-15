import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SEOConfig from "./components/SEOConfig";
import JsonLd from "./components/JsonLd";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SEOConfig />
        <JsonLd />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
