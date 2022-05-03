import moment from "moment";
import Link from "next/link";
import React from "react";
import { Blog, Work } from "../../pages/api/fetch";
import { Button } from "../Button";

export const WorkCard: React.FC<{ work: Work }> = (props) => {
  const category = props.work.categories.split(", ");
  return (
    <div className=" flex-1 flex-row flex duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <div className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1 ">
        <Link
          key={props.work.id}
          as={`/works/${props.work.slug}`}
          href={"/works/[slug]"}
        >
          <a>
            <h1 className="font-bold sm:text-2xl text-xl hover:underline">
              {props.work.title}
            </h1>
          </a>
        </Link>

        <p className="sm:text-lg text-md sm:mt-2 mt-1 ">{props.work.excerpt}</p>
        <div className="flex-row flex flex-wrap mt-2 gap-2">
          {category.map((item, index) => (
            <Link
              key={index}
              as={`/works/${props.work.slug}`}
              href={"/works/[slug]"}
            >
              <a>
                <Button text={item} color="orange" />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogCard: React.FC<{ blog: Blog }> = (props) => (
  <div className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
    <Link as={`/blog/${props.blog.slug}`} href={"/blog/[slug]"}>
      <a>
        <h1 className="font-bold sm:text-2xl text-xl hover:underline">
          {props.blog.title}
        </h1>
      </a>
    </Link>
    <p className="sm:text-lg text-md sm:mt-2 mt-1 ">
      {moment(props.blog.date).format("DD MMM YYYY")} | {props.blog.categories}
    </p>
    <p className="sm:text-lg text-md sm:mt-2 mt-1 ">{props.blog.excerpt}</p>
  </div>
);

export const ContentCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-myYellow items-center  py-5 my-5 md:px-0 px-4">
    <div className="container max-w-screen-md bg-white border-2 border-b-8 border-black rounded-xl  mx-auto flex-col flex justify-between overflow-hidden">
      {children}
    </div>
  </div>
);
