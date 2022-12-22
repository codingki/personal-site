import type { StackProps } from "@chakra-ui/react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import type { SingleBlogQuery, SingleWorkQuery } from "graphql/generated";
import Link from "next/link";
import React from "react";

import { MyButton } from "./Button";

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
        <MyButton bgColor="paper">View All</MyButton>
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
          <MyButton bgColor="paper" color="black">
            View All
          </MyButton>
        </Link>
      )}
    </Flex>
    <Stack direction="column" spacing={4}>
      {children}
    </Stack>
  </Stack>
);

export const CardShell: React.FC<StackProps> = (props) => (
  <Stack w="full" bg="paper" className="handDrawnBorder" p="4" spacing={1} {...props} />
);

export const BlogCard = ({ item }: { item: SingleBlogQuery["blog"] }) => (
  <Link as={`/blog/${item?.slug}`} href="/blog/[slug]" passHref>
    <CardShell as="a">
      <Text fontWeight="bold" fontSize={["xl", "2xl"]} noOfLines={1}>
        {item?.title}
      </Text>
      <Text>
        {item?.date && format(new Date(item.date), "dd MMM yyyy")} | {item?.categories}
      </Text>
      <Text noOfLines={3}>{item?.excerpt}</Text>
    </CardShell>
  </Link>
);

export const WorkCard = ({ item }: { item: SingleWorkQuery["work"] }) => (
  <Link as={`/works/${item?.slug}`} href="/works/[slug]" passHref>
    <CardShell as="a">
      <Text fontWeight="bold" fontSize={["xl", "2xl"]} noOfLines={1}>
        {item?.title}
      </Text>
      <Text noOfLines={3}>{item?.excerpt}</Text>
      <Flex wrap="wrap" direction="row" gap={1} pt={2}>
        {item?.categories?.split(", ").map((cat) => (
          <MyButton key={cat} px={2} py={0.5} bgColor="orange" color="paper" fontSize="sm">
            {cat}
          </MyButton>
        ))}
      </Flex>
    </CardShell>
  </Link>
);
