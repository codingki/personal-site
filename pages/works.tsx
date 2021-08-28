import NavBar from "../components/Common/NavBar";
import { Button } from "../components/Button";
import Footer from "../components/Common/Footer";
import { getWork, Works } from "./api/fetch";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import { RubricLayout } from "../components/Common/Layout";
import { ListSection, TitleSection } from "../components/Common/Section";
import { WorkCard } from "../components/Common/Card";

const WorksPage = ({ data }: { data: Works }) => {
  const works = data.allWorks;
  return (
    <>
      <NextSeo
        title="My Works"
        description="Projects by me"
        openGraph={{
          url: "https://kikiding.space/works",
          title: "My Works",
          description: "Projects by me",
          images: [
            {
              url: "https://kikiding.space/api/social-image?title=My Works&description=Projects%20by%20me&path=https://kikiding.space/works",
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
        <NavBar page="Works" />
        <TitleSection classNames="mt-5">
          <Button text="All Works" color="blue" />
        </TitleSection>

        <ListSection>
          {works.map((item) => (
            <WorkCard key={item.id} work={item} />
          ))}
        </ListSection>
      </RubricLayout>
      <Footer />
    </>
  );
};

export default WorksPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getWork()) || [];
  return {
    props: { data },
  };
};
