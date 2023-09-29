import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  const maliBold = await fetch(new URL("../../assets/Mali-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
  const maliSemiBold = await fetch(new URL("../../assets/Mali-SemiBold.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const maliRegular = await fetch(new URL("../../assets/Mali-Regular.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const maliMedium = await fetch(new URL("../../assets/Mali-Medium.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );

  const { searchParams } = new URL(request.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "Hi👋 I'm Kiki";

  const hasDescription = searchParams.has("description");
  const description = hasDescription
    ? searchParams.get("description")?.slice(0, 100)
    : "I'm a designer who trapped in the mind of a programmer. Crafting beautiful apps with React and ❤️";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "60px",
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundColor: "rgb(255, 189, 18)",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#fbfbf8",
            borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
            border: "solid 6px #0a0a0a",
            overflow: "hidden",
            paddingRight: "32px",
            paddingLeft: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <p style={{ fontFamily: "MaliBold", fontWeight: "bold", fontSize: "48px" }}>{title}</p>
            <p style={{ fontFamily: "MaliRegular", fontSize: "24px", fontWeight: "semibold" }}>{description}</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: maliRegular,
          name: "MaliRegular",
          style: "normal",
        },
        {
          data: maliBold,
          name: "MaliBold",
          style: "normal",
        },
        {
          data: maliSemiBold,
          name: "MaliSemiBold",
          style: "normal",
        },
        {
          data: maliMedium,
          name: "MaliMedium",
          style: "normal",
        },
      ],
    },
  );
}
