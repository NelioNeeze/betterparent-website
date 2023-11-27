import type { NextPage } from "next";
import blogStyles from "../styles/blogs.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { getAllBlogs } from "../services/blogService";
import { useQuery } from "@tanstack/react-query";
import { BlogType } from "../interfaces/IBlog";
import Heading from "../components/Heading";
import BlogCard from "../components/BlogCard";
import { useState } from "react";
import { Typography } from "@mui/material";

const Blogs: NextPage = () => {

    const [filteredBlogs, setFilteredBlogs] = useState(undefined);

    const { data: blogs } = useQuery(['blogs'], getAllBlogs, {
        onSuccess: (data) => {
            setFilteredBlogs(data);
        },
    });
    
    const handleCategoryChange = (category: any) => {
        filterBlogsByCategory(category);
    };

    const filterBlogsByCategory = (category: any) => {
        if (!category || category === "Alles") {
            // If no category or Alle Kategorien is selected, show all blogs
            setFilteredBlogs(blogs);
        } else {
            // Filter blogs by category
            const filtered = blogs.filter(
                (blog: any) => blog.attributes.category.data.attributes.name === category
            );
            setFilteredBlogs(filtered);
        }
    };

    return (
        <div className={blogStyles.page}>
            <Navbar />
            <div className={blogStyles.content}>
                <Heading
                    dropdown
                    text="Unsere Blog-Artikel"
                    onCategoryChange={handleCategoryChange}
                />
                <div className={blogStyles.blogCards}>
                    {filteredBlogs?.length === 0 ? (
                        // Render this when there are no filtered blogs
                        <Typography variant="body1">Es wurden leider noch keine Artikel für dieses Thema erstellt.</Typography>
                    ) : (
                        // Render blog cards when there are filtered blogs
                        filteredBlogs?.map((blog: BlogType) => (
                            
                            <BlogCard
                            key={blog?.id}
                            className={blogStyles.blogCard}
                            title={blog?.attributes.title}
                            summary={blog?.attributes.summary}
                            image={blog?.attributes?.image?.data?.attributes?.url}
                            category={blog?.attributes?.category.data.attributes.name}
                            coach={blog?.attributes.coach.data.attributes.name}
                            id={blog?.id}
                            />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs