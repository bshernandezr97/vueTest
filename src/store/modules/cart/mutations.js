import { mutations } from '../../types/types';

export default {
    [mutations.cart.ADD_PRODUCT]: (state, payload) => {
        state.items = [ payload, ...state.items];
    },
    [mutations.cart.DELETE_PRODUCT]: (state, payload) => {
        state.items = state.items.filter(i => i.id !== payload);
    },
    [mutations.cart.CLEAR_CART]: (state) => {
        state.items = [];
    }
}