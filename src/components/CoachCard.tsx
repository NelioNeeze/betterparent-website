import type { NextPage } from "next";
import styles from "../styles/components/coach-card.module.css";
import { useRouter } from "next/router";
import { useCallback } from "react";

type CoachType = {
    name?: string;
    expertise?: string;
    detailedDescription?: string;
    image?: string;  
    id?: string;
};

const CoachCard: NextPage<CoachType> = ({
    name = "No Coach name found",
    detailedDescription = "No detailedDescription found",
    image = "No Image found",
    id = "No Id found",
}) => {

    const router = useRouter()

    const onCourseClick = useCallback((coachID: any) => {
        router.push(`/coach-detail?coachID=${coachID}`);
    }, [router]);

    return (
    <>
        <div className={styles.coursecard} onClick={() => onCourseClick(id)}>
            <img className={styles.imageIcon} alt="" src={image} />
            <div className={styles.cardbottom}>
              <div className={styles.label}>
                <b className={styles.charlotteHoffmann}>{name}</b>
                <img
                    src="arrow_right.svg" 
                    width={18} 
                    height={18} 
                    alt="Arrow Icon"
                ></img>
              </div>
              <div className={styles.description}>
                {detailedDescription}
              </div>
            </div>
        </div>
    </>

  );
};

export default CoachCard;
