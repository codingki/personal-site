import NavBar from "../components/Common/NavBar";
import { Button } from "../components/Button";
import Footer from "../components/Common/Footer";
import { Blogs, getHome, Works } from "./api/fetch";
import Link from "next/link";
import { GetStaticProps } from "next";
import React from "react";
import { NextSeo } from "next-seo";
import {
  BlogCard,
  Header,
  BlogListSection,
  WorkCard,
  WorkListSection,
} from "../components/Page/Home";
import { TitleSection } from "../components/Common/Section";

const HomePage = ({ data }: { data: Works & Blogs }) => {
  const blogs = data.allBlogs;
  const works = data.allWorks;
  return (
    <>
      <NextSeo
        title="Nur Fikri | Front-end Developer"
        description="Im a guy that can code and design, but internet makes me can do anything. Crafting beautiful apps with React and ❤️"
        openGraph={{
          url: "https://kikiding.space/",
          title: "Nur Fikri | Front-end Developer",
          description:
            "Im a guy that can code and design, but internet makes me can do anything. Crafting beautiful apps with React and ❤️",
          images: [
            {
              url: "https://kikiding.space/api/social-image?title=Hi,%20I%20am%20Kiki&description=Im%20a%20guy%20that%20can%20code%20and%20design,%20but%20internet%20makes%20me%20can%20do%20anything.%20Crafting%20beautiful%20apps%20with%20React&path=https://kikiding.space/",
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

      <NavBar page="Home" />
      <Header />
      <TitleSection>
        <Button text="Recent Posts" color="blue" />
        <Link as={`/blog`} href="/blog">
          <a>
            <Button text="View All" color="white" />
          </a>
        </Link>
      </TitleSection>

      <BlogListSection>
        {blogs.map((item) => (
          <BlogCard key={item.id} blog={item} />
        ))}
      </BlogListSection>
      <TitleSection>
        <Button text="Recent Works" color="blue" />
        <Link as={`/works`} href={"/works"}>
          <a>
            <Button text="View All" color="white" />
          </a>
        </Link>
      </TitleSection>

      <WorkListSection>
        {works.map((item) => (
          <WorkCard key={item.id} work={item} />
        ))}
      </WorkListSection>

      <Footer />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getHome()) || [];
  return {
    props: { data },
  };
};
