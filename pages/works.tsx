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
        description="Projects that I've touched"
        openGraph={{
          url: "https://kikiding.space/works",
          title: "My Works | Nur Fikri",
          description: "Project that I've touched",
          images: [
            {
              url: encodeURI(
                "https://kikiding.space/api/social-image?title=Kiki's Works&description=Project that I've touched",
              ),
              width: 1200,
              height: 630,
              alt: "kikiding.space",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title="My Works | Nur Fikri"
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <VCardLayoutList disableViewAll title="Recent Works">
        {data.allWorks.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </VCardLayoutList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await request<AllworkQuery>(AllworkDocument);
  return {
    props: { data },
  };
};

export default Works;
