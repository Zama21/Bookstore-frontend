import { axiosInstance } from 'shared/api/apiInstance.js';

export class BookReadPageApi {
    static async gettingPageRange(bookId, currentPage, pageFrom, pageTo) {
        return axiosInstance.get(
            `/books/${bookId}/pages?currentPage=${currentPage}&pageFrom=${pageFrom}&pageTo=${pageTo}`
        );
    }
    static async gettingChapterMetaInformation(bookId, partIndex, pagesCount) {
        return axiosInstance.get(`/books/${bookId}/part/${partIndex}?pagesCount=${pagesCount}`);
    }
}
