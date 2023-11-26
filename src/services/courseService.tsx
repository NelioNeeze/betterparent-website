import axios from "axios";
import { CourseType } from "../interfaces/ICourse";

export async function getCourses() {
  const url = process.env.NEXT_PUBLIC_STRAPI_URL + '/courses?populate=*';

  return axios.get(url).then((res) => {

    const coursesWithImages = res.data.data.map((course: CourseType) => {
      return setDefaultImage(course);
    });

    return coursesWithImages;
  });
}

export async function getCourse(courseID: string) {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + '/courses/' + courseID + '?populate=*';

    return axios.get(url).then((res) => {
        const course = res.data.data;
        return setDefaultImage(course);
    });
}

  
// Check if the image is null and replace it with the default image URL
function setDefaultImage(course: any) {

    var newCourse = course
    const image = newCourse.attributes.image.data;

    if (image === null) {
        newCourse.attributes.image = {
            data: {
                attributes: {
                    url: '/defaultCourseImage.png',
                },
            },
        };
    } else {
        newCourse.attributes.image = {
            data: {
                attributes: {
                    url: process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + newCourse.attributes.image.data.attributes.url,
                },
            },
        };
    }

    return newCourse
}