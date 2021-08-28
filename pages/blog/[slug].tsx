import NavBar from "../../components/Common/NavBar";
import Footer from "../../components/Common/Footer";
import markdownToHtml from "../api/mdToHtml";
import moment from "moment";
import markdownStyles from "../../styles/markdown-styles.module.css";
import { getPost, getBlog, Blog } from "../api/fetch";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import { SinglePageLayout } from "../../components/Common/Layout";
import { ShareToTwitterButton } from "../../components/Button";
import { ContentCard } from "../../components/Common/Card";
import { BlogContentCard } from "../../components/Page/Blog";

const SingleBlog = ({
  data,
  content,
}: {
  data: { blog: Blog };
  content: string;
}) => {
  const blog = data.blog;
  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.excerpt}
        openGraph={{
          url: `https://kikiding.space/blog/${blog.slug}`,
          title: blog.title,
          description: blog.excerpt,
          images: [
            {
              url: `https://kikiding.space/api/social-image?title=${blog.title}&description=${blog.excerpt}&path=https://kikiding.space/blog/${blog.slug}`,
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
        <NavBar page="Blog" />
        <BlogContentCard blog={blog} content={content} />
        <Footer />
      </SinglePageLayout>
    </>
  );
};

export default SingleBlog;

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await getBlog();
  const allPosts = allBlogs.allBlogs;
  return {
    paths: allPosts.map((post) => `/blog/${post.slug}`) || [],
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPost(params.slug);
  const content = await markdownToHtml(data.blog.content || "");
  return {
    props: { data, content },
  };
};
