import type { AllworkQuery } from "graphql/generated";
import { AllworkDocument } from "graphql/generated";
import { request } from "lib/request";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { VCardLayoutList, WorkCard } from "../components/Card";

export interface WorksPageProps {
  data: AllworkQuery;
}

const Works: NextPage<WorksPageProps> = ({ data }) => {
  return (
    <>
      <NextSeo
        title="My Works | Nur Fikri"
        description="Projects that I've touched"
        openGraph={{
          url: "https://kikiding.space/works",
          title: "My Works | Nur Fikri",
          description: "Project that I've touched",
          images: [
            {
              url: encodeURI(
                "https://kikiding.space/api/social-image?title=My Works&description=Project that I've touched&path=https://kikiding.space/works",
              ),
              width: 1024,
              height: 512,
              alt: "kikiding.space",
              type: "image/png",
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
      <VCardLayoutList title="Recent Works" disableViewAll>
        {data.allWorks.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </VCardLayoutList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await request(AllworkDocument);
  return {
    props: { data },
  };
};

export default Works;