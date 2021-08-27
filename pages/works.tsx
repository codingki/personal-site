import Head from "next/head";
import NavBar from "../components/global/NavBar";
import Button from "../components/Button";
import Footer from "../components/global/Footer";
import { getWork, Works } from "./api/fetch";
import Link from "next/link";
import { GetStaticProps } from "next";

const WorksPage = ({ data }: { data: Works }) => {
  const works = data.allWorks;
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />

        <link rel="icon" href="/favicon.png" />
        <title>My Works</title>
        <meta name="description" content="Projects by me" />
        <meta property="og:title" content="My Works" />
        <meta property="og:url" content={`https://kikiding.space/works`} />
        <meta
          property="og:image"
          content={`https://kikiding.space/api/social-image?title=My Works&description=Projects%20by%20me&path=https://kikiding.space/works/`}
        />
      </Head>
      <div className="bg-myYellow min-h-screen">
        <NavBar page="Works" />

        <div className=" bg-myYellow items-center  py-5 mt-5 ">
          <div className="container max-w-screen-md  mx-auto flex-row flex justify-between md:px-0 px-4">
            <Button text="All Works" color="blue" />
          </div>
        </div>
        <div className=" bg-myYellow items-center  pt-0 pb-20">
          <div className="container max-w-screen-md  mx-auto  flex-col gap-5 flex justify-between md:px-0 px-4">
            {works.map((item) => {
              const cat = item.categories.split(", ");
              return (
                <div
                  className=" flex-1 flex-row flex duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                  key={item.id}
                >
                  <div className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1 ">
                    <Link
                      key={item.id}
                      as={`/works/${item.slug}`}
                      href={"/works/[slug]"}
                    >
                      <a>
                        <h1 className="font-bold sm:text-2xl text-xl hover:underline">
                          {item.title}
                        </h1>
                      </a>
                    </Link>

                    <p className="sm:text-lg text-md sm:mt-2 mt-1 ">
                      {item.excerpt}
                    </p>
                    <div className="flex-row flex flex-wrap mt-2 gap-2">
                      {cat.map((x, index) => (
                        <Link
                          key={index}
                          as={`/works/${item.slug}`}
                          href={"/works/[slug]"}
                        >
                          <a>
                            <Button text={x} color="orange" />
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorksPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getWork()) || [];
  return {
    props: { data },
  };
};
