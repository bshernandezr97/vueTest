import { mutations } from './types/types';


export default {
    [mutations.root.LOGIN]: (state) => {
        state.isLogged = true;
    },
    [mutations.root.LOGOUT]: (state) => {
        state.isLogged = false;
    }
}