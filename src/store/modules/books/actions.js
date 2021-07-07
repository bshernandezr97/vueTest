import { actions, mutations } from '../../types/types';
import { books } from '../../../fixtures/data'


export default {
    [actions.book.LOAD_BOOKS](context) {        
        context.commit(mutations.book.SET_BOOKS, books);
    }
}