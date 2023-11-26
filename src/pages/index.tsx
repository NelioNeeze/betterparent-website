import type { NextPage } from "next";
import styles from "../styles/index.module.css";
import Faq from "../components/Faq";
import Navbar from "../components/Navbar"
import CoachCard from "../components/CoachCard";
import CourseCard from "../components/CourseCard";
import Link from "next/link";
import Footer from "../components/Footer";
import { getCoaches } from "../services/coachService"
import { getCourses } from "../services/courseService"
import { useQuery } from "@tanstack/react-query";
import { CoachType } from "../interfaces/ICoach"  
import { CourseType } from "../interfaces/ICourse"  
import BlogSection from "../components/BlogSection";
import Heading from "../components/Heading";

const Homepage: NextPage = () => {

  const { data: courses } = useQuery({
    queryKey: ["courses"],
    queryFn: () => getCourses(),
  })

  const { data: coaches } = useQuery({
    queryKey: ["coaches"],
    queryFn: () => getCoaches(),
  })

  return (
    <div className={styles.homepage}>
      <div className={styles.headerParent}>
        <Navbar isHeroHeader/>
        <div className={styles.frameGroup}>
          <div className={styles.beABetterParentWithBetterParent}>
            <b className={styles.beABetter}>
              Gemeinsam zu besseren Eltern werden
            </b>
            <div className={styles.letsMakeParenting}>
              Bessere Elternschaft, mehr Freude, weniger Stress
            </div>
          </div>
          <div className={styles.kursFindenWrapper}>
            <Link href="/courses" className={styles.coaches}>Passenden Kurs finden</Link>
          </div>
        </div>
      </div>
      <div className={styles.features3}>
        <Heading text="Gemeinsam zu besseren Eltern werden"/>
        <div className={styles.frameContainer}>
          <div className={styles.parent}>
            <div className={styles.div}>
              <img
                className={styles.welcomeToTheWorld6}
                alt=""
                src="/welcome-to-the-world-6@2x.png"
              />
              <b className={styles.title}>Sorgenfreier Babyschlaf</b>
              <div className={styles.paragraph}>
                Entdecken Sie die Freude eines sorgenfreien Babyschlafs mit
                unserer Unterstützung und starten Sie in ein Leben voller
                Energie und Glück mit Ihrem kleinen Liebling an Ihrer Seite
              </div>
            </div>
            <div className={styles.div}>
              <img
                className={styles.welcomeToTheWorld11}
                alt=""
                src="/welcome-to-the-world1-1@2x.png"
              />
              <b className={styles.title}>Gesund essen, gesund wachsen</b>
              <div className={styles.paragraph}>
                Unsere Ernährungsberatung gibt Ihnen das Vertrauen, dass Ihr
                Kind die besten Nährstoffe erhält, um gesund zu wachsen und ein
                glückliches, erfülltes Leben zu führen
              </div>
            </div>
            <div className={styles.div}>
              <img
                className={styles.welcomeToTheWorld2}
                alt=""
                src="/welcome-to-the-world-2@2x.png"
              />
              <b className={styles.title}>Bindung schaffen, Liebe teilen</b>
              <div className={styles.paragraph}>
                Unsere Bindungsberatung ermöglicht es Ihnen, eine starke,
                liebevolle Bindung zu Ihrem Baby aufzubauen und die Freude des
                Teilens von bedingungsloser Liebe zu erleben
              </div>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.div}>
              <img
                className={styles.welcomeToTheWorld5}
                alt=""
                src="/welcome-to-the-world-5@2x.png"
              />
              <b className={styles.title}>Nachhaltig Wickeln</b>
              <div className={styles.paragraph}>
                Entdecken Sie die umweltfreundliche Welt des nachhaltigen
                Wickelns und gestalten Sie die Zukunft Ihres Babys in Einklang
                mit unserer Erde
              </div>
            </div>
            <div className={styles.div}>
              <img
                className={styles.welcomeToTheWorld1}
                alt=""
                src="/welcome-to-the-world-1@2x.png"
              />
              <b className={styles.title}>Stillen mit Zuversicht</b>
              <div className={styles.paragraph}>
                Stillen mit Zuversicht bedeutet für uns, Ihnen die Gewissheit zu
                geben, dass Sie auf eine erfahrene und liebevolle Begleitung
                zählen können, um Ihre Stillzeit in vollen Zügen zu genießen und
                eine starke, vertrauensvolle Verbindung zu Ihrem Baby aufzubauen
              </div>
            </div>
            <div className={styles.div}>
              <img
                className={styles.welcomeToTheWorld3}
                alt=""
                src="/welcome-to-the-world-3@2x.png"
              />
              <b className={styles.title}>Frühkindliche Förderung</b>
              <div className={styles.paragraph}>
                Mit unserer frühkindlichen Förderung fördern wir nicht nur
                intellektuelle Fähigkeiten, sondern auch soziale Kompetenzen,
                emotionale Intelligenz und körperliche Entwicklung
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features31}>
        <Heading text="Unsere Coaching Angebote"/>
        <div className={styles.coursecardParent}>
          {courses?.slice(0, 6).map( (course: CourseType) => (
            <CourseCard
              key={course.id}
              image={course.attributes.image.data?.attributes.url}
              title={course.attributes.title}
              description={course.attributes.shortDescription}
              coachName={course.attributes.coach.data.attributes.name}
              coachImage="/coachimage@2x.png"
              id={course.id}
            />
          ))}
          <div className={styles.coursecard4}>
            <div className={styles.image} />
            <div className={styles.cardbottom4}>
              <div className={styles.label}>
                <b className={styles.sorgenfreierBabyschlaf}>
                  Alle Kurse anzeigen
                </b>
                <div className={styles.arrow4}>
                  <div className={styles.arrowChild5} />
                  <div className={styles.arrowChild6} />
                </div>
              </div>
            </div>
            <img
              className={styles.welcomeToTheWorld7}
              alt=""
              src="/welcome-to-the-world-7@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.features32}>
        <Heading text="Unsere Coaches"/>
        <div className={styles.coursecardParent}>
          {coaches?.slice(0,6).map( (coach: CoachType) => (
            <CoachCard
              key={coach.id}
              image={process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + coach.attributes.image.data?.attributes.url}
              name={coach.attributes.name}
              detailedDescription={coach.attributes.previewText}
              id={coach.id}
            />
          ))}
          <div className={styles.coursecard9}>
            <div className={styles.image1} />
            <div className={styles.cardbottom9}>
              <div className={styles.label}>
                <b className={styles.sorgenfreierBabyschlaf}>
                  Alle Coaches anzeigen
                </b>
                <div className={styles.arrow4}>
                  <div className={styles.arrowChild5} />
                  <div className={styles.arrowChild6} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogSection label="Unsere Blog-Artikel"/>
      <Faq />
      <Footer />
    </div>
  );
};

export default Homepage;
