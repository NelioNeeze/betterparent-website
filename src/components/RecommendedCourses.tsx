import type { NextPage } from "next";
import styles from "../styles/components/recommendedCourses.module.css";
import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/courseService";
import Router from "next/router";
import { CourseType } from "../interfaces/ICourse";


const RecommendedCourses: NextPage = () => {

    const { data: courses } = useQuery({
        queryKey: ["courses"],
        queryFn: () => getCourses(),
    })

    return (
    <div className={styles.content}>
        <Typography 
            variant="h6"
            >Passende Kurse
        </Typography>
        <div className={styles.courseContainer}>
            {courses?.map( (course: CourseType, index: number ) => (
                <div 
                    key={course.id}
                    className={styles.courseCard}
                    onClick={() => Router.push("/course-detail?courseID=" + course.id)}
                >
                    <img 
                        src={course.attributes.image.data.attributes.url} 
                        alt="course image" 
                        className={styles.image}
                    />
                    <Typography 
                        variant="subtitle1"
                        >{course.attributes.title}
                    </Typography>
                </div>
            ))}
        </div>
    </div>

  );
};

export default RecommendedCourses;



