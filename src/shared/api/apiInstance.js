import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://m130.ru:8007',
});
