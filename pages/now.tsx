import Head from "next/head";
import NavBar from "../components/global/NavBar";
import Footer from "../components/global/Footer";
import markdownToHtml from "./api/mdToHtml";
import moment from "moment";
import markdownStyles from "../styles/markdown-styles.module.css";
import { getNow } from "./api/fetch";
import { GetStaticProps } from "next";

const NowPage = ({
  data,
  content,
}: {
  data: { content: string; updatedAt: Date };
  content: string;
}) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />

        <link rel="icon" href="/favicon.png" />
        <title>Nur Fikri | Front-end Developer</title>
        <meta name="description" content="kikiding current status" />
        <meta property="og:title" content="Now" />
        <meta property="og:url" content={`https://kikiding.space/now`} />
        <meta
          property="og:image"
          content={`https://kikiding.space/api/social-image?title=Now&description=Current status&path=https://kikiding.space/now`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Now" />
        <meta
          name="twitter:image"
          content={`https://kikiding.space/api/social-image?title=Now&description=Current status&path=https://kikiding.space/now`}
        />
        <meta name="twitter:domain" content={`https://kikiding.space/now`} />
      </Head>
      <div className="bg-myYellow min-h-screen flex flex-col justify-between">
        <NavBar page="Now" />

        <div className=" bg-myYellow items-center  py-5 my-5 md:px-0 px-4">
          <div className="container max-w-screen-md bg-white border-2 border-b-8 border-black rounded-xl  mx-auto flex-col flex justify-between overflow-hidden">
            <div className="md:py-6 md:px-6 py-6 px-4 ">
              <h1 className="text-4xl font-bold">Now</h1>
              <p className="text-lg font-semibold mt-2">
                Last updated {moment(data.updatedAt).format("DD/MM/YYYY")}
              </p>
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: content }}
              />

              <div className="flex flex-row justify-end">
                <a
                  href={`https://twitter.com/intent/tweet?url=https://kikiding.space/now&text=@kikiding current status`}
                  target="_blank"
                >
                  <div
                    className=" font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black mt-4"
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

export default NowPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getNow();
  const content = await markdownToHtml(data.now.content || "");
  return {
    props: { data, content },
  };
};
