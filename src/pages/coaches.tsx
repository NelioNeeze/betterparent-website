import type { NextPage } from "next";
import styles from "../styles/coaches.module.css";
import Faq from "../components/Faq";
import Navbar from "../components/Navbar"
import CoachCard from "../components/CoachCard";
import Footer from "../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getCoaches } from "../services/coachService";
import { CoachType } from "../interfaces/ICoach"; 
import Heading from "../components/Heading";

const Coaches: NextPage = () => {

  const { data: coaches } = useQuery({
    queryKey: ["coaches"],
    queryFn: () => getCoaches(),
  })

  return (
    <div className={styles.coaches}>
      <Navbar />
      <div className={styles.frameGroup}>
        <Heading text="Unsere Coaches"/>
        <div className={styles.coursecardParent}>
          {coaches?.map( (coach: CoachType) => (
            <CoachCard
              key={coach.id}
              image={process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + coach.attributes.image.data?.attributes.url}
              name={coach.attributes.name}
              detailedDescription={coach.attributes.previewText}
              id={coach.id}
            />
          ))}
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Coaches;
