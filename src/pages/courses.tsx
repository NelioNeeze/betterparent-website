import type { NextPage } from "next";
import styles from "../styles/courses.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../services/courseService";
import { CourseType } from "../interfaces/ICourse";
import Heading from "../components/Heading";
import { useState } from "react";

const Coaches: NextPage = () => {

  const [filteredCourses, setFilteredCourses] = useState(undefined);

  const { data: courses } = useQuery(['courses'], getCourses, {
      onSuccess: (data) => {
        setFilteredCourses(data);
      },
  });
  
  const handleCategoryChange = (category: any) => {
    filterCoursesByCategory(category);
  };

  const filterCoursesByCategory = (category: any) => {
      if (!category || category === "Alles") {
          // If no category or Alle Kategorien is selected, show all blogs
          setFilteredCourses(courses);
      } else {
          // Filter blogs by category
          const filtered = courses.filter((course: any) => {
            // Check if category data exists before accessing its attributes
            return (
              course.attributes.category?.data?.attributes?.name === category
            );
          });
          setFilteredCourses(filtered);
      }
  };

  return (
    <div className={styles.courses}>
      <Navbar />
      <div className={styles.meineCoachingangeboteParent}>
        <Heading text="Unsere Coachingangebote" dropdown onCategoryChange={handleCategoryChange}></Heading>
        <div className={styles.courseParent}>
          {filteredCourses?.length === 0 ? (
            // Render this when there are no filtered courses
            <p>Bisher gibt es noch keine Kurse zu diesem Thema.</p>
          ) : (
            // Render course cards when there are filtered courses
            filteredCourses?.map((course: CourseType, index: number) => (
              <>
                <CourseCard
                  row
                  title={course.attributes.title}
                  description={course.attributes.shortDescription}
                  category={course.attributes.category?.data?.attributes?.name}
                  ageStart={course.attributes.ageStart}
                  ageEnd={course.attributes.ageEnd}
                  image={course.attributes.image.data.attributes.url}
                  id={course.id}
                ></CourseCard>
                {index !== courses.length - 1 && <div className={styles.frameChild} />}
              </>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coaches;
