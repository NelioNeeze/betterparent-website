import axios from "axios";

export async function getQuestions() {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/faqs"
    return axios
        .get(url)
        .then(res => { 
            return res.data.data
        })
}