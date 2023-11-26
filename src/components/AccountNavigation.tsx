import type { NextPage } from "next";
import styles from "../styles/my-account.module.css";
import { Button } from "@mui/material";

type NavType = {
    switchTo: (destination: string) => void; 
}

const AccountNavigation: NextPage<NavType> = ({switchTo}) => {

    return (
        <>
            <div className={styles.navigation}>
                <Button
                    variant="contained"
                    className={styles.navButtons}
                    onClick={() => switchTo("Bookings")}
                    >Buchungen
                </Button>
                <Button
                    variant="contained"
                    className={styles.navButtons}
                    onClick={() => switchTo("Messages")}
                    >Nachrichten
                </Button>
                <Button
                    variant="contained"
                    className={styles.navButtons}
                    onClick={() => switchTo("Settings")}
                    >Einstellungen
                </Button>
            </div>
        </>
    );
};

export default AccountNavigation;
