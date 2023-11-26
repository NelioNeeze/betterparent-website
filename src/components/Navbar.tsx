import type { NextPage } from "next";
import styles from "../styles/components/header.module.css";
import stylesHeroHeader from "../styles/components/header-hero.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logout } from "../services/authService";
import Router from "next/router";

type HeaderType = {
    isHeroHeader?: boolean
}

const Navbar: NextPage<HeaderType> = ({isHeroHeader = false}) => {

    var headerStyle = styles
    if(isHeroHeader) {
        headerStyle = stylesHeroHeader
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userString = localStorage.getItem('jwtToken');
        if (userString) setIsLoggedIn(true)
    }, []); 

    function logoutUser() {
        logout()
        Router.push("/")
        setIsLoggedIn(false)
    }

    return (
    <>
        <div className={headerStyle.header}>
            <Link className={headerStyle.logo} href="/">
                <img
                className={headerStyle.weedyALogoOfAStylizedOfIcon}
                alt=""
                src="/weedy-a-logo-of-a-stylized-of-a-parent-holding-a-baby-minimalis-c6c03149042248e7b267c478ad56482e-3@2x.png"
                />
                <div className={headerStyle.betterparent}>BetterParent</div>
            </Link>
            <div className={headerStyle.frameParent}>
                <div className={headerStyle.bersichtParent}>
                    <Link className={headerStyle.bersicht} href="/">
                        Übersicht
                    </Link>
                    <Link className={headerStyle.bersicht} href="/courses">
                        Kurse
                    </Link>
                    <Link className={headerStyle.bersicht} href="/coaches">
                        Coaches
                    </Link>
                    <Link className={headerStyle.bersicht} href="/blogs">
                        Blog
                    </Link>
                </div>
                {!isLoggedIn &&
                    <Link className={headerStyle.kurseDurchsuchenWrapper} href="login">
                        <b className={headerStyle.kurseDurchsuchen}>Login</b>
                    </Link>
                }
                {isLoggedIn &&
                    <div>
                        <div 
                            className={headerStyle.meinAccount} 
                            onClick={() => setModalIsOpen(!modalIsOpen)}
                        >
                            <p>Mein Account</p>
                            <img 
                                className={headerStyle.avatarImage}
                                alt="Default Avatar"
                                src="defaultAvatar.png"
                            ></img>
                        </div>
                        {modalIsOpen &&
                            (<div className={styles.modal}>
                                <Link className={headerStyle.subMenuLinks} href="/my-account">
                                    Buchungen
                                </Link>
                                <Link className={headerStyle.subMenuLinks} href="/my-account">
                                    Nachrichten
                                </Link>
                                <Link className={headerStyle.subMenuLinks} href="/my-account">
                                    Einstellungen
                                </Link>
                                <Link className={headerStyle.subMenuLinks} onClick={logoutUser} href="/">
                                    Abmelden
                                </Link>
                            </div>)
                        }
                    </div>
                }
            </div>
        </div>  
    </>

  );
};

export default Navbar;



