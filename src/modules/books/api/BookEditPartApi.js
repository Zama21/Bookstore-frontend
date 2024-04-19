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

    static async updateTittlePart(bookPartId, title) {
        const bodyData = {
            title,
        };

        console.log(bookPartId, title);
        return axiosInstance
            .post(`/books/write/parts/${bookPartId}`, bodyData)
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }

    static async deletePart(bookPartId) {
        return axiosInstance
            .delete(`/books/write/parts/${bookPartId}`)
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }
    static async addNewPart(bookPartId, title) {
        const bodyData = {
            title,
        };
        return axiosInstance
            .post(`/books/write/${bookPartId}/parts`, bodyData)
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }
    static async changeOrderParts(partsIds, bookId) {
        const bodyData = {
            partsIds,
        };

        return axiosInstance
            .post(`/books/write/${bookId}/parts/order`, bodyData)
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }
}
