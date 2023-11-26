import axios from "axios";

export async function getAgb() {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/agbs"
    return axios
        .get(url) 
        .then(res => { 
            return res.data.data[0].attributes
        })
}

export async function getImpress() {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/impresses"
    return axios
        .get(url) 
        .then(res => { 
            return res.data.data[0].attributes
        })
}

export async function getDataProtection() {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + "/data-protections"
    return axios
        .get(url) 
        .then(res => { 
            return res.data.data[0].attributes
        })
}