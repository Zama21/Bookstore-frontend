import { axiosInstance } from 'shared/api/apiInstance.js';

export class BookEditPartApi {
    static async addNewPage(bookPartId, prevPageId) {
        const bodyData = {
            prevPageId,
        };
        return axiosInstance
            .post(`/books/write/${bookPartId}/pages`, bodyData)
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }
    static async deletePage(bookPageId) {
        return axiosInstance
            .delete(`/books/write/pages/${bookPageId}`)
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }
    static async updatePage(bookPageId, content) {
        const bodyData = {
            content,
        };
        return axiosInstance
            .post(`/books/write/pages/${bookPageId}`, bodyData)
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }
}
