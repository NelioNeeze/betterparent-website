import axios from "axios";

export async function getAllBlogs() {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/blogs?populate=*"
    return axios.get(url).then((res) => {

        const coursesWithImages = res.data.data.map((blog: any) => {
            return setDefaultImage(blog);
        });
        
        return coursesWithImages;
    });
        
}

export async function getOneBlog( blogID: string ) {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/blogs/" + blogID + "?populate=*"
    return axios.get(url).then((res) => {
        const blog = res.data.data;
        return setDefaultImage(blog);
    });
}

export async function getLatestBlogs() {
    try {
        const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/blogs?populate=*&pagination[limit]=3&sort[0]=createdAt:desc"
        const response = await axios.get(url);

        const latestBlogs = response.data.data;

        return latestBlogs;
    } catch (error) {
        console.error('Error fetching latest blogs:', error);
        throw error;
    }
};

export async function getLatestBlogsofCoach(coachID: string) {
    // Only return the blogs of the given coach here
    // Not implemented yet
    return getLatestBlogs
};

// Check if the image is null and replace it with the default image URL
function setDefaultImage(blog: any) {

    var newBlog = blog
    console.log("setDefaultimage:", blog)
    const image = newBlog.attributes.image.data;

    if (image === null ) {
        newBlog.attributes.image = {
            data: {
                attributes: {
                    url: '/defaultCourseImage.png',
                },
            }
        };
    } else if (image?.attributes?.url === "/defaultCourseImage.png") {
        console.log("Jwefjhbwefkbwef")
        return newBlog
    } else {
        newBlog.attributes.image = {
            data: {
                attributes: {
                    url: process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + newBlog.attributes.image.data.attributes.url,
                },
            },
        };
    }

    return newBlog
}