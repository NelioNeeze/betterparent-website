import type { NextPage } from "next";
import styles from "../styles/components/review-card.module.css";

type ReviewCardType = {
    rating?: number;
    author?: string;
    text?: string;
}

function setRatingToStars(rating: number) {
    var starElements = []

    for (let i = 0; i < rating; i++) {
        starElements.push(
          <img key={`star-filled-${i}`} className={styles.starsChild2} alt="Rating Star filled" src="/star-filled.svg" />
        );
    }
    const grayStars = 5 - rating

    if (grayStars > 0) {
        for (let i = 0; i < grayStars; i++) {
            starElements.push(
                <img  key={`star-gray-${i}`}className={styles.starsChild11} alt="Rating Star filled" src="/star-gray.svg" />
            );
        }
    }

    return starElements
}

const ReviewCard: NextPage<ReviewCardType> = ({
    rating = 5, // rating ranges from 1-5
    author = "Maria",
    text = "",
}) => {

    return (
    <>
        <div className={styles.review}>
            <div className={styles.stars1}>
                {setRatingToStars(rating)}
            </div>
            <div className={styles.text3}>
                {text}
            </div>
            <div className={styles.author}>
                <img
                className={styles.authorChild}
                alt=""
                src="/default_avatar.png"
                />
                <b className={styles.anita25}>{author}</b>
            </div>
        </div>
    </>

  );
};

export default ReviewCard;







