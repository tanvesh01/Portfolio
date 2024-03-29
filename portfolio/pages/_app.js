import "../styles/globals.css";
import "../public/Projects.css";
import "../public/projectGallery.css";
import { motion } from "framer-motion";
import Head from "next/head";

const apps = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
};

const DESCRIPTION =
  "I build apps with beautiful UI/UX. Doing what I absolutely love.";
const twitterHandle = "@Sarve___tanvesh";
const currentURL = "https://tanvesh.vercel.app/";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="twitter:image:src" content="/meta.png"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        <meta name="theme-color" content="#1de400"></meta>

        <meta name="description" content={DESCRIPTION}></meta>
        <meta property="og:title" content={"Tanvesh"} key="ogtitle" />
        <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
        <meta property="og:image" content={"/meta.png"} key="ogimage" />
        <meta property="og:url" content={currentURL} key="ogurl" />
        {/* Open Graph */}
        <meta property="og:site_name" content={"Tanvesh"} key="ogsitename" />
        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary" key="twcard" /> */}
        {/* <meta name="twitter:image" content="/meta.png"></meta> */}
        <link rel="shortcut icon" href="/green.svg" />

        <title>Tanvesh</title>
      </Head>
      <motion.div initial="initial" animate="visible" variants={apps}>
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;
