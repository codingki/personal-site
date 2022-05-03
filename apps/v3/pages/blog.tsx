import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { BlogCard, VCardLayoutList } from "../components/Card";
import { Blogs, getBlog } from "./api/fetch";

export interface BlogPageProps {
  data: Blogs;
}

const Blog: NextPage<BlogPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title="My Blog | Nur Fikri"
        description="A place to share something"
        openGraph={{
          url: "https://kikiding.space/blog",
          title: "My Blog | Nur Fikri",
          description: "A place to share something",
          images: [
            {
              url: "https://kikiding.space/api/social-image?title=My Blog&description=A place to share something &path=https://kikiding.space/blog",
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
      <VCardLayoutList title="Recent Posts" disableViewAll>
        {data.allBlogs.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </VCardLayoutList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getBlog()) || [];
  return {
    props: { data },
  };
};

export default Blog;
