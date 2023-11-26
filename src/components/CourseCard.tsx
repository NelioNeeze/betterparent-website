import type { NextPage } from "next";
import styles from "../styles/components/course-card.module.css";
import rowStyles from "../styles/components/course-row.module.css";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";

type CourseType = {
    title?: string;
    description?: string;
    coachName?: string;
    image?: string;
    category?: string;
    ageStart?: number;
    ageEnd?: number;
    coachImage?: string;  
    row?: boolean;
    id?: string;
};

const CourseCard: NextPage<CourseType> = ({
    title = "No Title found",
    description = "No description found", 
    category = "No Category found",
    ageStart = "No AgeStart found",
    ageEnd = "No AgeEnd found",
    coachName = "No coachName found",
    image = "No Image found",
    coachImage = "No CoachImage found",
    row = false,
    id = "No Id found",
}) => {

    const router = useRouter()

    function onCourseClick(courseId: string) {
        router.push(`/course-detail?courseID=${courseId}`);
    }

    return (
        <>
            { !row &&
                <div className={styles.coursecard} onClick={() => onCourseClick(id)}>
                    <img className={styles.imageIcon} 
                        alt="Course Image" 
                        src={image} 
                    />
                    <div className={styles.cardbottom}>
                        <div className={styles.label}>
                            <b 
                                className={styles.sorgenfreierBabyschlaf}
                            >
                                {title}
                            </b>
                            <img
                                src="arrow_right.svg" 
                                width={18} 
                                height={18} 
                                alt="Arrow Icon"
                            ></img>
                        </div>
                        <div className={styles.description}>
                            {description}  
                        </div>
                        <div className={styles.coach}>
                            <img
                                className={styles.coachimageIcon}
                                alt="Coach Image"
                                src={coachImage}
                            />
                            <div className={styles.mitAnikaSchiegle}>
                                mit {coachName}
                            </div>
                        </div>
                    </div>
                </div>
            }

            { row &&
                <div className={rowStyles.course} onClick={() => onCourseClick(id)}>
                    <img className={rowStyles.imageIcon} alt="" src={image} />
                    <div className={rowStyles.info}>
                        <div className={rowStyles.text}>
                            <b className={rowStyles.title}>
                                {title}
                            </b>
                            <div className={rowStyles.description}>
                                {description}
                            </div>
                        </div>
                        <div className={rowStyles.agelabelParent}>
                            <div className={rowStyles.category}>
                                <Typography>Alter</Typography>
                                <Typography variant="h6">{ageStart} - {ageEnd}</Typography>
                            </div>
                            <div className={rowStyles.age}>
                                <Typography>Kategorie</Typography>
                                <Typography variant="h6">{category}</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
  );
};

export default CourseCard;

