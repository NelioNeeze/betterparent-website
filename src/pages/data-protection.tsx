import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { getDataProtection } from "../services/legalService";
import { useQuery } from "@tanstack/react-query";
import pageStyles from "../styles/legal-page.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


const DataProtection: NextPage = () => {

    const { data: dataprotection } = useQuery({
        queryKey: ["dataprotection"],
        queryFn: () => getDataProtection(),
    })

    return (
        <div className={styles.homepage}>
            <Navbar/>
            <div className={pageStyles.content}>
                <b>Datenschutz</b>
                <ReactMarkdown className={pageStyles.text}>{dataprotection?.content}</ReactMarkdown>
            </div>
            <Footer />
        </div>
    );
};

export default DataProtection;
