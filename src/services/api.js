import axios from "axios";

const apiProducts = axios.create({
    baseURL: "https://dummyjson.com",
})

export default apiProducts