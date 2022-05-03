import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import {
  BlogCard,
  HCardLayoutList,
  VCardLayoutList,
  WorkCard,
} from "../components/Card";
import { Header } from "../components/Header";
import { Blogs, getHome, Works } from "./api/fetch";

export interface HomePageProps {
  data: Works & Blogs;
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title="Nur Fikri | Front-end Developer"
        description="I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app."
        openGraph={{
          url: "https://kikiding.space/",
          title: "Nur Fikri | Front-end Developer",
          description:
            "I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app.",
          images: [
            {
              url: "https://kikiding.space/api/social-image?title=Hi,%20I%20am%20Kiki&description=I am a software engineer focused on frontend development. I can describe my self as a designer who trapped in the mind of a programmer, I love building modern and beautiful app&path=https://kikiding.space/",
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
      <Header />
      <HCardLayoutList link="/blog" title="Recent Posts">
        {data.allBlogs.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </HCardLayoutList>
      <VCardLayoutList link="/works" title="Recent Works">
        {data.allWorks.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </VCardLayoutList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getHome()) || [];
  return {
    props: { data },
  };
};

export default Home;
