import { getters } from '../../types/types'


export default {
    [getters.cart.ITEMS_LIST]: (state) => {
        return state.items;
    },
    [getters.cart.NUMBER_ITEMS]: (state) => {
        return state.items.length;
    },
    [getters.cart.TOTAL_COST]: (state) => {
        let cost = 0;
        for (const item of state.items) {
            cost += item.price;
        }
        return cost;
    }
}