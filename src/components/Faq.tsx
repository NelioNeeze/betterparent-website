import type { NextPage } from "next";
import styles from "../styles/coaches.module.css";
import { getQuestions } from "../services/faqService"
import { useQuery } from "@tanstack/react-query";
import Question from "./Question";
import Heading from "./Heading";

type QuestionType = {
    attributes: {
      question: string;
      answer: string;
    };
    id: number
};  

const Faq: NextPage = () => {

    const { data: questions, isLoading, isError, error } = useQuery({
        queryKey: ["questions"],
        queryFn: () => getQuestions(),
    })

    return (
    <>
        <div className={styles.features3}>
            <Heading text="Meist gestellte Fragen"/>
            {questions?.map( (question: QuestionType) => (
                <Question
                    key={question.id}
                    question={question.attributes.question}
                    answer={question.attributes.answer}
                ></Question>
            ))}
        </div>
    </>

  );
};

export default Faq;
