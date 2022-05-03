import { Stack, Flex, Text, StackProps } from "@chakra-ui/react";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import { Blog, Work } from "../pages/api/fetch";
import { MyButton, SocialButton } from "./Button";

export const HCardLayoutList = ({
  children,
  title,
  link,
}: {
  children: React.ReactNode;
  title: string;
  link: string;
}) => (
  <Stack spacing="4">
    <Flex align="center" justifyContent="space-between">
      <MyButton bgColor="blue" color="paper" as="div">
        {title}
      </MyButton>
      <Link href={link} passHref>
        <a>
          <MyButton bgColor="paper">View All</MyButton>
        </a>
      </Link>
    </Flex>
    <Stack direction={["column", "column", "row"]} spacing={4}>
      {children}
    </Stack>
  </Stack>
);
export const VCardLayoutList = ({
  children,
  title,
  link,
  disableViewAll,
}: {
  children: React.ReactNode;
  title: string;
  link?: string;
  disableViewAll?: boolean;
}) => (
  <Stack spacing="4">
    <Flex align="center" justifyContent="space-between">
      <MyButton bgColor="blue" color="paper" as="div">
        {title}
      </MyButton>
      {!disableViewAll && link && (
        <Link href={link} passHref>
          <a>
            <MyButton bgColor="paper" color="black">
              View All
            </MyButton>
          </a>
        </Link>
      )}
    </Flex>
    <Stack direction="column" spacing={4}>
      {children}
    </Stack>
  </Stack>
);

export const CardShell: React.FC<StackProps> = (props) => (
  <Stack
    w="full"
    bg="paper"
    className="handDrawnBorder"
    p={"4"}
    spacing={1}
    {...props}
  />
);

export const BlogCard = ({ item }: { item: Blog }) => (
  <Link as={`/blog/${item.slug}`} href={"/blog/[slug]"} passHref>
    <CardShell as="a">
      <Text fontWeight="bold" fontSize={["xl", "2xl"]} noOfLines={1}>
        {item.title}
      </Text>
      <Text>
        {format(new Date(item.date), "dd MMM yyyy")} | {item.categories}
      </Text>
      <Text noOfLines={3}>{item.excerpt}</Text>
    </CardShell>
  </Link>
);

export const WorkCard = ({ item }: { item: Work }) => (
  <Link as={`/works/${item.slug}`} href={"/works/[slug]"} passHref>
    <CardShell as="a">
      <Text fontWeight="bold" fontSize={["xl", "2xl"]} noOfLines={1}>
        {item.title}
      </Text>
      <Text noOfLines={3}>{item.excerpt}</Text>
      <Flex wrap="wrap" direction="row" gap={1} pt={2}>
        {item.categories.split(", ").map((item, index) => (
          <MyButton
            key={index}
            px={2}
            py={0.5}
            bgColor="orange"
            color="paper"
            fontSize="sm"
          >
            {item}
          </MyButton>
        ))}
      </Flex>
    </CardShell>
  </Link>
);
