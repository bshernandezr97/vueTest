import { actions, mutations } from '../../types/types';

export default {
    [actions.cart.PROCESS_BUY]: (context) => {
        context.commit(mutations.cart.CLEAR_CART);
    }
}