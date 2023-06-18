import axios from "axios";

const BASE_URL = "https://youtube-data8.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "IN" },
    headers: {
        'X-RapidAPI-Key': 'be40c8b8f3msh4c69d48a7ae3451p1ab0adjsnc156539ca28c',
        'X-RapidAPI-Host': 'youtube-data8.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
