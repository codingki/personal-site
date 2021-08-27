import Head from "next/head";
import NavBar from "../../components/global/NavBar";
import Image from "next/image";
import Button from "../../components/Button";
import Icon from "../../components/IconButton";
import Footer from "../../components/global/Footer";
import markdownToHtml from "../api/mdToHtml";
import moment from "moment";
import markdownStyles from "../../styles/markdown-styles.module.css";
import { getWorkPost, getWork, Work } from "../api/fetch";
import { GetStaticPaths, GetStaticProps } from "next";

const SingleWorks = ({
  data,
  content,
}: {
  data: { work: Work };
  content: string;
}) => {
  const work = data.work;
  const cat = data.work.categories.split(", ");
  const tech = data.work.technologyUsed.split(", ");
  const deployment = data.work.deployment.split(", ");

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />

        <link rel="icon" href="/favicon.png" />
        <title>{work.title}</title>
        <meta name="description" content={work.excerpt} />
        <meta property="og:title" content={work.title} />
        <meta
          property="og:url"
          content={`https://kikiding.space/works/${work.slug}`}
        />
        <meta
          property="og:image"
          content={`https://kikiding.space/api/social-image?title=${work.title}&description=${work.excerpt}&path=https://kikiding.space/works/${work.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={work.title} />
        <meta
          name="twitter:image"
          content={`https://kikiding.space/api/social-image?title=${work.title}&description=${work.excerpt}&path=https://kikiding.space/works/${work.slug}`}
        />
        <meta
          name="twitter:domain"
          content={`https://kikiding.space/works/${work.slug}`}
        />
      </Head>
      <div className="bg-myYellow min-h-screen flex flex-col justify-between">
        <NavBar page="Works" />

        <div className=" bg-myYellow items-center  py-5 my-5 md:px-0 px-4 ">
          <div className="container max-w-screen-md bg-white border-2 border-b-8 border-black rounded-xl  mx-auto flex-col flex justify-between overflow-hidden">
            {work.image && (
              <img src={work.image.url} className="border-b-4 border-black" />
            )}
            <div className="md:py-6 md:px-6 py-6 px-4 ">
              <h1 className="text-4xl font-bold">{work.title}</h1>
              <div className="flex-row flex flex-wrap mt-4 gap-2">
                {cat.map((item, index) => (
                  <Button key={index} text={item} color="orange" />
                ))}
              </div>
              <p className="text-xl mt-4 leading-relaxed font-semibold">
                About the project
              </p>
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
              />

              <p className="text-xl mt-4 leading-relaxed font-semibold">
                Technology used :
              </p>
              <div className="flex-row flex flex-wrap mt-2 gap-2">
                {tech.map((item, index) => (
                  <Button key={index} text={item} tag />
                ))}
              </div>
              <p className="text-xl mt-4 leading-relaxed font-semibold">
                Links :
              </p>
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
                <a
                  href={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${work.slug}&text=${work.title}`}
                  target="_blank"
                >
                  <div
                    className=" font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                    style={{ backgroundColor: "rgb(29, 161, 242)" }}
                  >
                    <p className="  text-center">
                      <i
                        className="fab fa-twitter fa-md"
                        style={{ color: "white" }}
                      ></i>{" "}
                      Share this to twitter
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SingleWorks;

export const getStaticPaths: GetStaticPaths = async () => {
  const allBlogs = await getWork();
  const allPosts = allBlogs.allWorks;
  return {
    paths: allPosts.map((post) => `/works/${post.slug}`) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getWorkPost(params.slug);
  const content = await markdownToHtml(data.work.about || "");
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, content },
  };
};
