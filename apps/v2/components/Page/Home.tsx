import moment from "moment";
import Link from "next/link";
import React from "react";
import { Blog, Work } from "../../pages/api/fetch";
import { Button, ShareToTwitterButton } from "../Button";

export const Header: React.FC = (props) => (
  <div className=" bg-myYellow items-center  py-5 ">
    <div className="container max-w-screen-md  mx-auto md:px-0 px-4">
      <div className="mt-5 bg-white  border-2 border-b-8 border-black rounded-xl grid grid-cols-12  justify-between duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ">
        <div className="col-span-12 md:col-span-8 sm:py-10 sm:px-8 p-5 ">
          <p className="font-bold sm:text-4xl text-2xl  text-black">
            Hi, I am Kiki,
          </p>
          <p className="font-semibold sm:text-2xl text-xl text-black">
            Creative Technologist
          </p>
          <p className="font-normal sm:text-xl text-md text-black mt-2">
            Im a guy that can code and design, but internet makes me can do
            anything. Crafting beautiful apps with React and ❤️
          </p>
          <div className="flex ">
            <ShareToTwitterButton url="https://twitter.com/intent/tweet?url=https://kikiding.space/&text=@kikiding's website" />
          </div>
        </div>
        <div className="col-span-4 m-auto hidden md:inline mt-12 ">
          <img className="" src="/me.png" />
        </div>
      </div>
    </div>
  </div>
);

export const BlogListSection = (props: { children: React.ReactNode }) => (
  <div className=" bg-myYellow items-center  pt-0 pb-5">
    <div className="container max-w-screen-md  mx-auto md:flex-row flex-col gap-4 flex justify-between md:px-0 px-4">
      {props.children}
    </div>
  </div>
);

export const WorkListSection = (props: { children: React.ReactNode }) => (
  <div className=" bg-myYellow items-center  pt-0 pb-20">
    <div className="container max-w-screen-md  mx-auto  flex-col gap-4 flex justify-between md:px-0 px-4">
      {props.children}
    </div>
  </div>
);

export const BlogCard: React.FC<{ blog: Blog }> = (props) => (
  <div className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
    <Link as={`/blog/${props.blog.slug}`} href={"/blog/[slug]"}>
      <a>
        <h1
          className="font-bold sm:text-2xl text-xl hover:underline"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {props.blog.title}
        </h1>
      </a>
    </Link>
    <p className="sm:text-lg text-md sm:mt-2 mt-1 ">
      {moment(props.blog.date).format("DD MMM YYYY")} | {props.blog.categories}
    </p>
    <p
      className="sm:text-lg text-md sm:mt-2 mt-1 "
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
      }}
    >
      {props.blog.excerpt}
    </p>
  </div>
);

export const WorkCard: React.FC<{ work: Work }> = (props) => {
  const category = props.work.categories.split(", ");
  return (
    <div className=" flex-1 flex-row flex duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
      <div className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1">
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
