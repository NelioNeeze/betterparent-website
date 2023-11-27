import type { NextPage } from "next";
import styles from "../styles/components/blog-card.module.css";
import { useRouter } from "next/router";
import { useCallback } from "react";


const BlogCard: NextPage<any> = ({
    title = "No Coach name found",
    category = "No category found",
    image = "No Image found",
    id = "-1",
    coach = ""
}) => {

    const router = useRouter()

    const onCourseClick = useCallback((blogID: any) => {
        router.push(`/blog-detail?blogID=${blogID}`);
    }, [router]);

    return (
    <>
        <div className={styles.coursecard} onClick={() => onCourseClick(id)}>
            <img className={styles.image} alt="" src={image} />
            <div className={styles.cardbottom}>
                <b className={styles.charlotteHoffmann}>{title}</b>
                <div className={styles.description}>von - {coach}</div>
                <div className={styles.category}>{category}</div>
            </div>
        </div>
    </>

  );
};

export default BlogCard;
