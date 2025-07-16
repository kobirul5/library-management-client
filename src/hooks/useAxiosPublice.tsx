import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://library-management-two-gold.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;