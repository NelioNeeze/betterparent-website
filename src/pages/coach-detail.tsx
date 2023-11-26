import type { NextPage } from "next";
import styles from "../styles/coach-detail.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { getCoach, getCoursesOfCoach } from "../services/coachService";
import { useEffect } from "react";
import { useState } from "react";
import CourseCard from "../components/CourseCard";
import ReviewSection from "../components/ReviewSection";
import { CourseType } from "../interfaces/ICourse";
import BlogSection from "../components/BlogSection";
import Heading from "../components/Heading";

const CoachDetail: NextPage = () => {

  const router = useRouter();
  var { coachID } = router.query;

  const [coachData, setCoachData] = useState(undefined);
  const [coursesData, setCoursesData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      if (coachID !== undefined) {
        const coachIDString = coachID?.toString()

        const coachRes = await getCoach(coachIDString)
        setCoachData(coachRes)

        const coursesRes = await getCoursesOfCoach(coachIDString)
        setCoursesData(coursesRes)
      }
    }
    if (coachID !== undefined) {
      fetchData()
    }
  }, [coachID]);
  
  return (
    <div className={styles.coach}>
      <Navbar />
      <div className={styles.image44Parent}>
        <img className={styles.image44Icon} 
          alt="Coach Image" 
          src={process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + coachData?.attributes.image.data.attributes.url} 
        />
        <div className={styles.natalieSchrderParent}>
          <b className={styles.natalieSchrder}>{coachData?.attributes.name}</b>
          <div className={styles.meinNameIstContainer}>
            <p className={styles.meinNameIst}>
              {coachData?.attributes.location}
            </p>
            <p className={styles.meinNameIst}>
              {coachData?.attributes.detailedDescription}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.meineCoachingangeboteParent}>
        <Heading text="Meine Coaching-Angebote"></Heading>
        <div className={styles.courseParent}>
          {coursesData?.map( (course: CourseType, index: number ) => (
              <div key={course.id}>
                <CourseCard 
                  row
                  title={course.attributes.title}
                  description={course.attributes.shortDescription}
                  coachName={course.attributes.name}
                  category={course.attributes.category?.data.attributes.name}
                  ageStart={course.attributes.ageStart}
                  ageEnd={course.attributes.ageEnd}
                  image={course.attributes.image.data.attributes.url}
                  id={course.id}
                ></CourseCard>
                {index !== coursesData?.length - 1 && <div className={styles.frameChild} />}
              </div>
            ))}
        </div>
      </div>

      <BlogSection label="Meine Blog-Artikel"/>

      <ReviewSection coachData={coachData}></ReviewSection>

      <Footer />
    </div>
  );
};

export default CoachDetail;
