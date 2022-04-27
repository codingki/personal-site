import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import markdownToHtml from "./api/mdToHtml";
import moment from "moment";
import markdownStyles from "../styles/markdown-styles.module.css";
import { getNow } from "./api/fetch";
import { GetStaticProps } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import { SinglePageLayout } from "../components/Common/Layout";
import { ShareToTwitterButton } from "../components/Button";
import { ContentCard } from "../components/Common/Card";

const NowPage = ({
  data,
  content,
}: {
  data: { now: { content: string; updatedAt: Date } };
  content: string;
}) => {
  return (
    <>
      <NextSeo
        title="Nur Fikri | Front-end Developer"
        description="Current status"
        openGraph={{
          url: "https://kikiding.space/now",
          title: "Nur Fikri | Front-end Developer",
          description: "Current status",
          images: [
            {
              url: "https://kikiding.space/api/social-image?Nur Fikri | Front-end Developer=&description=Current status%20by%20me&path=https://kikiding.space/now",
            },
          ],
          site_name: "Kikiding.space",
        }}
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />

      <SinglePageLayout>
        <NavBar page="Now" />
        <ContentCard>
          <div className="md:py-6 md:px-6 py-6 px-4 ">
            <h1 className="text-4xl font-bold">Now</h1>
            <p className="text-lg font-semibold mt-2">
              Last updated {moment(data.now.updatedAt).format("DD/MM/YYYY")}
            </p>
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="flex flex-row justify-end">
              <ShareToTwitterButton url="https://twitter.com/intent/tweet?url=https://kikiding.space/now&text=@kikiding current status" />
            </div>
          </div>
        </ContentCard>

        <Footer />
      </SinglePageLayout>
    </>
  );
};

export default NowPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getNow();
  const content = await markdownToHtml(data.now.content || "");
  return {
    props: { data, content },
  };
};
