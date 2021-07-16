import axios from "axios";

const YT_API =  'AIzaSyDPTPHA69EJd5oApLMi3j3jx39oPFMesqI';

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        type: "video",
        key: YT_API
    },
    headers: {}
})