import React from "react";
import { Work } from "../../pages/api/fetch";
import { Button, ShareToTwitterButton } from "../Button";
import { ContentCard } from "../Common/Card";
import markdownStyles from "../../styles/markdown-styles.module.css";

export const WorkContentCard: React.FC<{ work: Work; content: string }> = (
  props
) => {
  const category = props.work.categories.split(", ");
  const technology = props.work.technologyUsed.split(", ");
  const deployment = props.work.deployment.split(", ");
  return (
    <ContentCard>
      {props.work.image && (
        <img src={props.work.image.url} className="border-b-4 border-black" />
      )}
      <div className="md:py-6 md:px-6 py-6 px-4 ">
        <h1 className="text-4xl font-bold">{props.work.title}</h1>
        <div className="flex-row flex flex-wrap mt-4 gap-2">
          {category.map((item, index) => (
            <Button key={index} text={item} color="orange" />
          ))}
        </div>
        <p className="text-xl mt-4 leading-relaxed font-semibold">
          About the project
        </p>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />

        <p className="text-xl mt-4 leading-relaxed font-semibold">
          Technology used :
        </p>
        <div className="flex-row flex flex-wrap mt-2 gap-2">
          {technology.map((item, index) => (
            <Button key={index} text={item} tag />
          ))}
        </div>
        <p className="text-xl mt-4 leading-relaxed font-semibold">Links :</p>
        <div className="flex-row flex flex-wrap mt-2 gap-2">
          {deployment.map((item, index) => {
            const val = item.split(": ");
            const txt = val[0].charAt(0).toUpperCase() + val[0].slice(1);
            return (
              <a href={val[1]} target="_blank" key={index}>
                <Button text={txt} deployment />
              </a>
            );
          })}
        </div>

        <div className="flex flex-row justify-end">
          <ShareToTwitterButton
            url={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${props.work.slug}&text=${props.work.title}`}
          />
        </div>
      </div>
    </ContentCard>
  );
};
