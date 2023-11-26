import type { NextPage } from "next";
import styles from "../styles/course-detail.module.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import ReviewSection from "../components/ReviewSection";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { getCoach } from "../services/coachService";
import { getCourse } from "../services/courseService";
import { Typography } from "@mui/material";

const CourseDetail: NextPage = () => {

  const router = useRouter();
  var { courseID } = router.query;

  const [courseData, setCourseData] = useState(undefined);
  const [coachData, setCoachData] = useState(undefined); 
  
  useEffect(() => {
    const fetchData = async () => {
      if (courseID !== undefined) {
        const courseRes = await getCourse(courseID?.toString())
        setCourseData(courseRes)

        const coachRes = await getCoach(courseRes?.attributes.coach.data.id)
        setCoachData(coachRes)
      }
    }
    if (courseID !== undefined) {
      fetchData()
    }
  }, [courseID]);

  const onCoachClick = useCallback((coachID: any) => {
    router.push(`/coach-detail?coachID=${coachID}`);
  }, [router]);

  const openBookingCalendar = () => {
    console.log("Should open booking calendar now!")
  };

  return (
    <div className={styles.coursedetail}>
      <Navbar />
      <div className={styles.coursedetailInner}>
        <div className={styles.courseWrapper}>
          <div className={styles.course}>
            <img className={styles.imageIcon} 
              alt="" 
              src={courseData?.attributes.image.data.attributes.url} 
            />
            <div className={styles.info}>
              <div className={styles.text}>
                <b className={styles.title}>
                  {courseData?.attributes.title}
                </b>
                <div className={styles.description}>
                  {courseData?.attributes.shortDescription}
                </div>
              </div>
              <div className={styles.attributes}>
                  <div className={styles.category}>
                      <Typography>Alter</Typography>
                      <Typography variant="h6">{courseData?.attributes.ageStart} - {courseData?.attributes.ageEnd}</Typography>
                  </div>
                  <div className={styles.age}>
                      <Typography>Kategorie</Typography>
                      <Typography variant="h6">{courseData?.attributes.category.data.attributes.name}</Typography>
                  </div>
              </div>
              <div className={styles.buttonWrapper}>
                <div className={styles.button} onClick={openBookingCalendar}>
                  <b className={styles.buttonlabel}>Beratungsgespräch buchen</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.coursedetailChild}>
        <div className={styles.schlafCoachingParent}>
          <b className={styles.schlafCoaching}>Coaching Inhalt</b>
          <div className={styles.meinNameIstContainer}>
            <p className={styles.meinNameIst}>
              {courseData?.attributes.detailedText}
            </p>
            <p
              className={styles.inFreiburgHabe}
            >{`In Freiburg habe ich erst Grundschullehramt, dann Bildungswissenschaften & Bildungsmanagement studiert. Seit 2018 bin ich zertifizierte Stoffwindelberaterin. Im Frühjahr 2020 habe ich die Ausbildung zur Doula und dem holistischen Babycoach bei der Babycoachakademie erfolgreich abgeschlossen, sodass ich zukünftig viele tolle Geburten begleiten und Familien von Beginn der Schwangerschaft bis ins Kleinkindalter ganzheitlich betreuen und beraten darf.`}</p>
          </div>
        </div>
      </div>
      <div className={styles.image44Parent}>
        <img className={styles.image44Icon} alt="" 
          src={process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + coachData?.attributes.image.data.attributes.url}
        />
        <div className={styles.schlafCoachingParent}>
          <b className={styles.buttonlabel}>Coach</b>
          <b className={styles.natalieSchrder}>{coachData?.attributes.name}</b>
          <div className={styles.meinNameIst1}>
            {coachData?.attributes.previewText}
          </div>
          <div className={styles.button1} onClick={() => onCoachClick(coachData?.id)}>
            <b
              className={styles.buttonlabel}
            >{`Mehr über sie erfahren ->`}</b>
          </div>
        </div>
      </div>
      <ReviewSection coachData={coachData}></ReviewSection>
      <Footer />
    </div>
  );
};

export default CourseDetail;
