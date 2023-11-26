import axios from "axios";

export async function sendApplication(formData: any) {
    try {
        const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/applications"
        const response = await axios.post(url, formData);
    
        if (response.status === 200) {
          console.log('Application submitted successfully:', response.data);
        } else {
          console.error('Failed to submit application:', response.status, response.data);
        }
    } catch (error) {
        console.error('Error submitting application:', error);
    }
}