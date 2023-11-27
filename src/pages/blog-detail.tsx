import type { NextPage } from "next";
import styles from "../styles/blog-detail.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { getOneBlog } from "../services/blogService";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import Router from "next/router";
import BlogSection from "../components/BlogSection";
import RecommendedCourses from "../components/RecommendedCourses";

const BlogDetail: NextPage = () => {

    const router = useRouter();
    var { blogID } = router.query;

    const [blogData, setBlogData] = useState(undefined);
    
    useEffect(() => {
        const fetchData = async () => {
            if (blogID !== undefined) {
                const blogRes = await getOneBlog(blogID?.toString())
                setBlogData(blogRes)
            }
        }
        if (blogID !== undefined) {
            fetchData()
        }
    }, [blogID]);

    function navigateToCoach(coachID: string) {
        Router.push("/coach-detail?coachID=" + coachID)
    }

    return (
        <div className={styles.homepage}>
            <Navbar/>
            <div className={styles.content}>
                <div className={styles.blogContent}>
                    <img 
                        className={styles.image}
                        src={blogData?.attributes.image.data.attributes.url}
                    ></img>
                    <Typography
                        variant="h4"
                        >{blogData?.attributes.title}
                    </Typography>
                    <Typography
                        className={styles.category}
                        >{blogData?.attributes.category.data.attributes.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        >{blogData?.attributes.summary}
                    </Typography>
                    <Typography
                        variant="body1"
                        >{blogData?.attributes.text}
                    </Typography>
                    <Typography
                        className={styles.coach}
                        onClick={() => navigateToCoach(blogData?.attributes.coach.data.id)}
                        >Beitrag von {blogData?.attributes.coach.data.attributes.name}
                    </Typography>
                </div>
                <div className={styles.rightSection}>
                    <RecommendedCourses/>
                </div>
            </div>
            <BlogSection label="Weitere Blog-Artikel"/>
            <Footer />
        </div>
    );
};

export default BlogDetail;




