import { BookStatus } from '../domain/enums/bookStatus.js';

export const BookStatusTextMap = {
    [BookStatus.Finished]: 'Полный текст',
    [BookStatus.Unfinished]: 'В процессе',
    [BookStatus.Frozen]: 'Заморожена',
};
