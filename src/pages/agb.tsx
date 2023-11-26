import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { getAgb } from "../services/legalService";
import { useQuery } from "@tanstack/react-query";
import pageStyles from "../styles/legal-page.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Agb: NextPage = () => {

    const { data: agb } = useQuery({
        queryKey: ["agb"],
        queryFn: () => getAgb(),
    })

    return (
        <div className={styles.homepage}>
            <Navbar/>
            <div className={pageStyles.content}>
                <b>Allgemeine Geschäftsbedingungen</b>
                <ReactMarkdown className={pageStyles.text}>{agb?.content}</ReactMarkdown>
            </div>
            <Footer />
        </div>
    );
};

export default Agb;




