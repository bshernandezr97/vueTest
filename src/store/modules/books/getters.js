import { getters } from '../../types/types';

export default {
    [getters.book.BOOKS_LIST]: (state) => {
        return state.books;
    }
}