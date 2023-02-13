import axios from "axios";

const blog = axios.create({
    baseURL: "https://forumapi.onrender.com/",
    headers: {
        "Content-Type": "application/json",
        
    },
})

export default blog;