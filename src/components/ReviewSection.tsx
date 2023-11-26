import type { NextPage } from "next";
import styles from "../styles/components/review-card.module.css";
import ReviewCard from "./ReviewCard";

type ReviewSectionType = {
    coachData? : any
}

const ReviewSection: NextPage<ReviewSectionType> = ({
    coachData = undefined
}) => {

    return (
    <>
        { // If Review List is not empty -> Show Reviews
            coachData?.attributes.reviews.data !== undefined && coachData?.attributes.reviews.data.length !== 0 && 
            (<div className={styles.dasSagenUnsereKundenParent}>
                <b className={styles.dasSagenUnsere}>Das sagen unsere Kunden</b>
                <div className={styles.totalratingParent}>
                {coachData?.attributes.reviews.data.map( (review: any, index: number) => (
                    <ReviewCard 
                        key={index}
                        text={review.attributes.text}
                        author={review.attributes.author}
                        rating={review.attributes.rating}
                    />
                ))}
                </div>
            </div>)
        }
    </>

  );
};

export default ReviewSection;



