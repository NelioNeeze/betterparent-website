import type { NextPage } from "next";
import styles from "../styles/my-account.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import AccountNavigation from "../components/AccountNavigation";
import AccountSettings from "../components/AccountSettings";
import AccountBookings from "../components/AccountBookings";
import AccountMessages from "../components/AccountMessages";
import { useState } from "react";
import AuthWrapper from "../components/AuthWrapper";

const MyAccount: NextPage = () => {

    const [currentPage, setCurrentPage] = useState("Bookings")

    function changePage(destination: string) {
        if(destination === "Bookings") setCurrentPage("Bookings")
        if(destination === "Messages") setCurrentPage("Messages")
        if(destination === "Settings") setCurrentPage("Settings")
    }

    return (
        <AuthWrapper>
            <div className={styles.homepage}>
                <Navbar/>
                <div className={styles.content}>
                    <AccountNavigation switchTo={changePage}/>
                    {(currentPage === "Bookings") && <AccountBookings/>}
                    {(currentPage === "Messages") && <AccountMessages/>}
                    {(currentPage === "Settings") && <AccountSettings/>}
                </div>
                <Footer />
            </div>
        </AuthWrapper>
    );
};

export default MyAccount;




