import { BookStatus } from 'modules/books/domain/enums/bookStatus.js';

export const BookStatusOptionsMap = {
    [BookStatus.Finished]: 'Завершена',
    [BookStatus.Frozen]: 'Заморожена',
    [BookStatus.Unfinished]: 'В процессе',
};

export const bookStatusOptions = Object.values(BookStatusOptionsMap);
