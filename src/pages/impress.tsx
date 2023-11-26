import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import Navbar from "../components/Navbar"
import { useQuery } from "@tanstack/react-query";
import pageStyles from "../styles/legal-page.module.css"
import Footer from "../components/Footer";
import { getImpress } from "../services/legalService";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Impress: NextPage = () => {

    const { data: impress } = useQuery({
        queryKey: ["impress"],
        queryFn: () => getImpress(),
    })

    return (
        <div className={styles.homepage}>
            <Navbar/>
            <div className={pageStyles.content}>
                <b>Impressum</b>
                <ReactMarkdown className={pageStyles.text}>{impress?.content}</ReactMarkdown>
            </div>
            <Footer />
        </div>
    );
};

export default Impress;
