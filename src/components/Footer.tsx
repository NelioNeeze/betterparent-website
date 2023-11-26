import type { NextPage } from "next";
import styles from "../styles/components/footer.module.css";
import Link from "next/link";

const Footer: NextPage = () => {

    return (
    <>
        <div className={styles.features31}>
            <div className={styles.betterparentsParent}>
                <p className={styles.label}>Du bist selbst Coach und möchtest Teil von unserem Team werden?</p>
                <Link href="/coach-application" className={styles.applyButton}>Jetzt mehr erfahren</Link>
                <div className={styles.kurseDurchsuchen}>
                    <b>Better</b>
                    <span>Parents</span>
                </div>
                <div className={styles.soulfi2023}>© BetterParent 2023</div>
            </div>
            <div className={styles.frameDiv}>
                <div className={styles.impressumParent}>
                    <Link href="/impress" className={styles.link}>Impressum</Link>
                    <div className={styles.frameChild} />
                    <Link href="/data-protection" className={styles.link}>Datenschutz</Link>
                    <div className={styles.frameChild} />
                    <Link href="/agb" className={styles.link}>Geschäftsbedingungen</Link>
                </div>
                <div className={styles.kurseEntdeckenParent}>
                    <Link href="/" className={styles.link}>Übersicht</Link>
                    <div className={styles.frameInner} />
                    <Link href="/coaches" className={styles.link}>Coaches kennenlernen</Link>
                    <div className={styles.frameInner} />
                    <Link href="/courses" className={styles.link}>Kurse entdecken</Link>
                    <div className={styles.frameInner} />
                    <Link href="/blogs" className={styles.link}>Unser Blog</Link>
                    <div className={styles.frameInner} />
                    <Link href="/coach-application" className={styles.link}>Werde Teil unseres Teams</Link>
                </div>
            </div>
      </div>
    </>

  );
};

export default Footer;
