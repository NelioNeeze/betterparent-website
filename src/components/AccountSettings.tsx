import type { NextPage } from "next";
import styles from "../styles/coaches.module.css";
import { Checkbox } from "@mui/material";

const AccountSettings: NextPage = () => {

    return (
        <div className={styles.features3}>
            <p>Deine Einstellungen</p>
            <Checkbox></Checkbox>
            <Checkbox></Checkbox>
            <Checkbox></Checkbox>
        </div>
    );
};

export default AccountSettings;
