import axios from "axios";
import { CourseType } from "../interfaces/ICourse";

export async function getCoaches() {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/coaches?populate=*"
    return axios
        .get(url) 
        .then(res => { 
            return res.data.data
        })
}

export async function getCoach( coachID: string ) {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/coaches/" + coachID + "?populate=*"
    return axios
        .get(url) 
        .then(res => { 
            return res.data.data
        })
}

export async function getCoursesOfCoach( coachID: string ){
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/coaches/" + coachID + "?populate=courses.image&populate=courses.category"
    return axios
        .get(url) 
        .then(res => { 
            const coach = res.data.data;
            const coursesWithDefaultImages = setDefaultImages(coach.attributes.courses.data)
            return coursesWithDefaultImages;
        })
}

  
// Check if the image is null and replace it with the default image URL
function setDefaultImages(courses: any) {

    const coursesWithDefaultImages = courses.map((course: CourseType) => {
        if (course.attributes.image.data === null) {
            course.attributes.image.data = {
                attributes: {
                url: '/defaultCourseImage.png',
                },
            };
        } else {
            course.attributes.image.data.attributes.url =
                process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + course.attributes.image.data.attributes.url;
        }
        return course
    });

    return coursesWithDefaultImages;
}
  

