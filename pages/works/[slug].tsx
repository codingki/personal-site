import NavBar from "../../components/Common/NavBar";
import { Button, ShareToTwitterButton } from "../../components/Button";
import Footer from "../../components/Common/Footer";
import markdownToHtml from "../api/mdToHtml";
import markdownStyles from "../../styles/markdown-styles.module.css";
import { getWorkPost, getWork, Work } from "../api/fetch";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import { SinglePageLayout } from "../../components/Common/Layout";
import { ContentCard } from "../../components/Common/Card";
import { WorkContentCard } from "../../components/Page/Works";

const SingleWorks = ({
  data,
  content,
}: {
  data: { work: Work };
  content: string;
}) => {
  const work = data.work;
  return (
    <>
      <NextSeo
        title={work.title}
        description={work.excerpt}
        openGraph={{
          url: `https://kikiding.space/works/${work.slug}`,
          title: work.title,
          description: work.excerpt,
          images: [
            {
              url: `https://kikiding.space/api/social-image?title=${work.title}&description=${work.excerpt}&path=https://kikiding.space/works/${work.slug}`,
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
        <NavBar page="Works" />
        <WorkContentCard work={work} content={content} />
        <Footer />
      </SinglePageLayout>
    </>
  );
};

export default SingleWorks;

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await getWork();
  const allPosts = allBlogs.allWorks;
  return {
    paths: allPosts.map((post) => `/works/${post.slug}`) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getWorkPost(params.slug);
  const content = await markdownToHtml(data.work.about || "");
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, content },
  };
};
