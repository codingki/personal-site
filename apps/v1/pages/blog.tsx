import NavBar from "../components/Common/NavBar";
import { Button } from "../components/Button";
import Footer from "../components/Common/Footer";
import { Blogs, getBlog } from "./api/fetch";
import { GetStaticProps } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import { RubricLayout } from "../components/Common/Layout";
import { ListSection, TitleSection } from "../components/Common/Section";
import { BlogCard } from "../components/Common/Card";

const BlogPage = ({ data }: { data: Blogs }) => {
  const blogs = data.allBlogs;
  return (
    <>
      <NextSeo
        title="My Blog"
        description="A place to share something maybe useful"
        openGraph={{
          url: "https://kikiding.space/blog",
          title: "Nur Fikri | Front-end Developer",
          description: "A place to share something maybe useful",
          images: [
            {
              url: "https://kikiding.space/api/social-image?title=My blog&description=A%20place%20to%20share%20something%20maybe%20useful&path=https://kikiding.space/blog/",
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

      <RubricLayout>
        <NavBar page="Blog" />
        <TitleSection classNames="mt-5">
          <Button text="All Posts" color="blue" />
        </TitleSection>

        <ListSection>
          {blogs.map((item) => (
            <BlogCard key={item.id} blog={item} />
          ))}
        </ListSection>
      </RubricLayout>
      <Footer />
    </>
  );
};
export default BlogPage;
export const getStaticProps: GetStaticProps = async () => {
  const data = (await getBlog()) || [];
  return {
    props: { data },
  };
};
