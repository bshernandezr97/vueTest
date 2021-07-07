import { createStore } from 'vuex';
import { getters } from './types/types'
import rootMutations from './mutations';
import rootActions from './actions';
import bookModule from './modules/books/index';
import cartModule from './modules/cart/index'


export default createStore ({
    modules: {
        cart: cartModule,
        book: bookModule
    },
    state() {
        return {
            isLogged : false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: {
        [getters.root.IS_LOGGED]: (state) => {
            return state.isLogged;
        }
    }
})