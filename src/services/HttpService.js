import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID f094bbc83fa6f6c550227eb60a7e239f78c711a325e0f728c31a7156f00eca4a"
    }
})

export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",

})