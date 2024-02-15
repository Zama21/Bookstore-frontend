import axios from 'axios';
import { getAuthToken } from '../../modules/auth/domain/lib/authToken.js';

export const axiosInstance = axios.create({
    baseURL: 'http://m130.ru:8007',
    headers: {
        Authorization: `Bearer ${getAuthToken()}`,
    },
});
