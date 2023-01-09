import { Image, Modal, ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { CardShell } from "components/Card";
import type { ShotsPageQuery } from "graphql/generated";
import { ShotsPageDocument } from "graphql/generated";
import { request } from "lib/request";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useState } from "react";

export interface ShotsPageProps {
  data: ShotsPageQuery;
}
export const Shots: NextPage<ShotsPageProps> = ({ data }) => {
  const [selected, setSelected] = useState<{ id: string; imagePath: string } | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure({
    onClose: () => {
      setSelected(null);
    },
  });
  return (
    <>
      <NextSeo
        title="Shots | Nur Fikri"
        description="Shots by Kiki"
        openGraph={{
          url: "https://kikiding.space/blog",
          title: "Shots | Nur Fikri",
          description: "Shots by Kiki",
          images: [
            {
              url: encodeURI(
                "https://kikiding.space/api/social-image?title=Shots&description=Shots by Kiki&path=https://kikiding.space/shots",
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
      <SimpleGrid columns={[2, 2, 3]} spacing={[4, 4, 8]}>
        {data.allShotsAnalogs[0]?.shots.map((item) => {
          return (
            <CardShell
              key={item.filename}
              p="2"
              onClick={() => {
                setSelected({
                  id: item.filename,
                  imagePath: item.url,
                });
                onOpen();
              }}
            >
              <Image
                alt={item.filename}
                src={item.url}
                verticalAlign="middle"
                width="100%"
                fallbackSrc="image-loading.jpg"
                className="handDrawnBorderLight"
              />
              <Text fontWeight="semibold" textAlign="center" fontSize="lg">
                {item.filename}
              </Text>
            </CardShell>
          );
        })}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
        <ModalOverlay />
        <ModalContent backgroundColor="transparent" px={4}>
          <CardShell p="2" onClick={onOpen}>
            <Image
              fallbackSrc="image-loading.jpg"
              alt="11"
              src={selected?.imagePath || ""}
              verticalAlign="middle"
              width="100%"
              className="handDrawnBorderLight"
            />
            <Text fontWeight="semibold" textAlign="center" fontSize="lg">
              {selected?.id}
            </Text>
          </CardShell>
        </ModalContent>
      </Modal>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await request(ShotsPageDocument);
  return {
    props: {
      data,
    },
  };
};

export default Shots;
