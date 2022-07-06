import Head from "next/head";

const Meta = ({ title, keyword, description }) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keyword} />
    <meta name="author" content="Razu Islam" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="4NNGhh2Yr93ykAfqit16o1fNSegQRwQXLMrbopG-xwI" />
    <title>{title}</title>
  </Head>
);

Meta.defaultProps = {
  title: "Home",
  keyword:
    "Razu Islam, Junior Front-end developer, web developer, web designer",
  description:
    "Hello my dear friend, I'm Razu Islam. I'm a junior front-end web developer.",
};


export default Meta