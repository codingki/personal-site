import type { StackProps } from "@chakra-ui/react";
import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import type { SingleBlogQuery, SingleWorkQuery } from "graphql/generated";
import NextLink from "next/link";
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
      <MyButton as="div" bgColor="blue" color="paper">
        {title}
      </MyButton>
      <Link as={NextLink} href={link} passHref>
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
      <MyButton as="div" bgColor="blue" color="paper">
        {title}
      </MyButton>
      {!disableViewAll && link ? (
        <Link as={NextLink} href={link} passHref>
          <MyButton bgColor="paper" color="black">
            View All
          </MyButton>
        </Link>
      ) : null}
    </Flex>
    <Stack direction="column" spacing={4}>
      {children}
    </Stack>
  </Stack>
);

export const CardShell: React.FC<StackProps> = (props) => (
  <Stack bg="paper" className="handDrawnBorder" p="4" spacing={1} w="full" {...props} />
);

export const BlogCard = ({ item }: { item: SingleBlogQuery["blog"] }) => (
  <Link as={NextLink} href={`/blog/${item?.slug}`} passHref>
    <CardShell>
      <Text fontSize={["xl", "2xl"]} fontWeight="bold" noOfLines={1}>
        {item?.title}
      </Text>
      <Text>
        {item?.date ? format(new Date(item.date), "dd MMM yyyy") : null} | {item?.categories}
      </Text>
      <Text noOfLines={3}>{item?.excerpt}</Text>
    </CardShell>
  </Link>
);

export const WorkCard = ({ item }: { item: SingleWorkQuery["work"] }) => (
  <Link as={NextLink} href={`/works/${item?.slug}`} passHref>
    <CardShell>
      <Text fontSize={["xl", "2xl"]} fontWeight="bold" noOfLines={1}>
        {item?.title}
      </Text>
      <Text noOfLines={3}>{item?.excerpt}</Text>
      <Flex direction="row" gap={1} pt={2} wrap="wrap">
        {item?.categories?.split(", ").map((cat) => (
          <MyButton key={cat} bgColor="orange" color="paper" fontSize="sm" px={2} py={0.5}>
            {cat}
          </MyButton>
        ))}
      </Flex>
    </CardShell>
  </Link>
);
