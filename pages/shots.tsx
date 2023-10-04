import { Modal, ModalContent, ModalOverlay, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { CardShell } from "components/Card";
import { ChakraNextImage } from "components/Image";
import type { ShotsPageQuery } from "graphql/generated";
import { ShotsPageDocument } from "graphql/generated";
import { request } from "lib/request";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";

export interface ShotsPageProps {
  data: ShotsPageQuery;
}
export const Shots: NextPage<ShotsPageProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure({
    onClose: () => {
      setSelectedIndex(null);
    },
  });

  const shots = data.allShotsAnalogs[0]?.shots;

  const keyPress = (e: KeyboardEvent) => {
    // left
    if (e.key === "ArrowLeft") {
      if (Number(selectedIndex) !== 0) {
        setSelectedIndex(String(Number(selectedIndex) - 1));
      }
    }
    // right
    if (e.key === "ArrowRight") {
      if (Number(selectedIndex) !== Number(shots?.length) - 1) {
        setSelectedIndex(String(Number(selectedIndex) + 1));
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", keyPress);
    }

    return () => {
      window.removeEventListener("keydown", keyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, selectedIndex]);

  return (
    <>
      <NextSeo
        description="Shots by Kiki"
        openGraph={{
          url: "https://kikiding.space/blog",
          title: "Shots | Nur Fikri",
          description: "Shots by Kiki",
          images: [
            {
              url: encodeURI("https://kikiding.space/api/social-image?title=Shots&description=Shots by Kiki"),
              width: 1200,
              height: 630,
              alt: "kikiding.space",
              type: "image/png",
            },
          ],
          site_name: "Kikiding.space",
        }}
        title="Shots | Nur Fikri"
        twitter={{
          handle: "@kikiding",
          site: "@kikiding",
          cardType: "summary_large_image",
        }}
      />
      <SimpleGrid columns={[2, 2, 3]} spacing={[4, 4, 8]}>
        {shots?.map((item, index) => {
          return (
            <CardShell
              key={item.filename}
              onClick={() => {
                setSelectedIndex(String(index));
                onOpen();
              }}
              p="2"
            >
              <ChakraNextImage
                alt={item.filename}
                className="handDrawnBorderLight"
                height="140px"
                src={item.url}
                verticalAlign="middle"
                width="100%"
              />
              <Text fontSize="lg" fontWeight="semibold" textAlign="center">
                {item.filename}
              </Text>
            </CardShell>
          );
        })}
      </SimpleGrid>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent backgroundColor="transparent" borderRadius={0} p="2" py={8}>
          <CardShell onClick={onOpen} p="2">
            <ChakraNextImage
              alt="11"
              className="handDrawnBorderLight"
              height="50vw"
              src={selectedIndex ? shots?.[Number(selectedIndex)]?.url : ""}
              verticalAlign="middle"
              width="100%"
            />
            <Text fontSize="lg" fontWeight="semibold" textAlign="center">
              {selectedIndex ? shots?.[Number(selectedIndex)]?.filename : "Not found"}
            </Text>
          </CardShell>
        </ModalContent>
      </Modal>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await request<ShotsPageQuery>(ShotsPageDocument);
  return {
    props: {
      data,
    },
  };
};

export default Shots;
