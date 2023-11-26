import axios from "axios";

export async function getAllBlogs() {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/blogs?populate=*"
    return axios
        .get(url)
        .then(res => { 
            return res.data.data
        })
}

export async function getOneBlog( blogID: string ) {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/blogs/" + blogID + "?populate=*"
    return axios
        .get(url) 
        .then(res => { 
            return res.data.data
        })
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

export default getLatestBlogs;
