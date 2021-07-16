import axios from "axios";
const API_TICKET_MASTER = 'eyBd2aFJIOGbAPCA9FnIRSEcot2ZByAe';

export default axios.create({
    baseURL: "https://app.ticketmaster.com/discovery/v2/",
    params: {
        apikey: API_TICKET_MASTER,
        sort: 'relevance,desc',
    }
})