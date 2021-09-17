import "../styles/globals.css";
import "../public/Projects.css";
import "../public/projectGallery.css";
import { motion } from "framer-motion";

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

function MyApp({ Component, pageProps }) {
    return (
        <motion.div initial="initial" animate="visible" variants={apps}>
            <Component {...pageProps} />
        </motion.div>
    );
}

export default MyApp;
