import type { NextPage } from "next";
import styles from "../styles/coaches.module.css";
import { useState } from "react";

type Question = {
    question?: string;
    answer?: string;
};

const Question: NextPage<Question> = ({
    question = "No question loaded",
    answer = "No asnwer loaded",   
}) => {

    const [isOpen, setIsOpen] = useState(false)

    function openAndClose() {
        setIsOpen(!isOpen)
    }

    return (
    <>
        <div className={styles.frameContainer} onClick={openAndClose}>
            <div className={styles.wieLuftDerBuchungsprozessParent}>
                <div className={styles.questionRow}>
                    <div className={styles.wieLuftDer}>
                        {question}
                    </div>
                    <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <div className={styles.groupItem} />
                    </div>
                </div>
                {
                    isOpen &&
                    <div className={styles.answer}>
                        {answer}
                    </div>
                }
            </div>
        </div>
    </>

  );
};

export default Question;
