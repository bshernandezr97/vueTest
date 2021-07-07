import { mutations } from '../../types/types';

export default {
    [mutations.book.SET_BOOKS]: (state, payload) => {
        state.books = payload;
    }
}