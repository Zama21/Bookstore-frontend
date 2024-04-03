import { axiosInstance } from 'shared/api/apiInstance.js';

export class BookPageApi {
    static async removeFromLibrary(bookId) {
        return axiosInstance.post(`/books/${bookId}/removeFromLibrary`).catch(error => {
            console.error('Ошибка запроса:', error);
        });
    }

    static async addToLibrary(bookId) {
        return axiosInstance.post(`/books/${bookId}/addToLibrary`).catch(error => {
            console.error('Ошибка запроса:', error);
        });
    }

    static async starBook(bookId) {
        return axiosInstance.post(`/books/${bookId}/star`).catch(error => {
            console.error('Ошибка запроса:', error);
        });
    }

    static async unstarBook(bookId) {
        return axiosInstance.post(`/books/${bookId}/unstar`).catch(error => {
            console.error('Ошибка запроса:', error);
        });
    }

    static async getBookInfo(bookId) {
        return axiosInstance.get(`/books/${bookId}`).catch(error => {
            console.error('Ошибка запроса:', error);
        });
    }
}
