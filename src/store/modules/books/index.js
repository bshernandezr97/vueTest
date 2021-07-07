import bookActions from './actions';
import bookGetters from './getters';
import bookMutations from './mutations';


export default {
    namespaced: true,
    state() {
        return {
            books: []
        }
    },
    mutations: bookMutations,
    actions: bookActions,
    getters: bookGetters
}