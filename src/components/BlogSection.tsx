import type { NextPage } from "next";
import blogStyles from "../styles/blogs.module.css";
import getLatestBlogs from "../services/blogService";
import { useQuery } from "@tanstack/react-query";
import { BlogType } from "../interfaces/IBlog";
import Heading from "../components/Heading";
import BlogCard from "../components/BlogCard";

type BlogSectionType = {
    label: string; 
}


const BlogSection: NextPage<BlogSectionType> = ( {
        label = "Unsere Blog-Artikel"}, 
    ) => {

    const { data: blogs } = useQuery({
        queryKey: ["blogs"],
        queryFn: getLatestBlogs
    })

    return (
        <div className={blogStyles.content}>
            <Heading text={label}/>
            <div className={blogStyles.blogCards}>
                {blogs?.map( (blog: BlogType) => (
                    <BlogCard
                        key={blog.id}
                        className={blogStyles.blogCard}
                        title={blog?.attributes.title}
                        summary={blog?.attributes.summary}
                        image={blog?.attributes.image.data.attributes.url}
                        category={blog?.attributes.category.data.attributes.name}
                        coach={blog?.attributes.coach.data.attributes.name}
                        id={blog?.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;

