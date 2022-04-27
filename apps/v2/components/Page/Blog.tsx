import moment from "moment";
import React from "react";
import { Blog } from "../../pages/api/fetch";
import { ContentCard } from "../Common/Card";
import markdownStyles from "../../styles/markdown-styles.module.css";
import { ShareToTwitterButton } from "../Button";

export const BlogContentCard: React.FC<{ blog: Blog; content: string }> = (
  props
) => (
  <ContentCard>
    {props.blog.image && (
      <img src={props.blog.image.url} className="border-b-4 border-black" />
    )}
    <div className="md:py-6 md:px-6 py-6 px-4 ">
      <h1 className="text-4xl font-bold">{props.blog.title}</h1>
      <p className="text-lg font-semibold mt-2">
        {props.blog.categories} |{" "}
        {moment(props.blog.date).format("DD MMM YYYY")}
      </p>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />

      <div className="flex flex-row justify-end">
        <ShareToTwitterButton
          url={`https://twitter.com/intent/tweet?url=https://kikiding.space/blog/${props.blog.slug}&text=${props.blog.title}`}
        />
      </div>
    </div>
  </ContentCard>
);
