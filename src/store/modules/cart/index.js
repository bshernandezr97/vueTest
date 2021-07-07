import cartActions from './actions';
import cartMutations from './mutations';
import cartGetters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            items: []
        }
    },
    mutations: cartMutations,
    actions: cartActions,
    getters: cartGetters
}