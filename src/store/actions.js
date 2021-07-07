import { mutations, actions} from './types/types'

export default {
    [actions.root.LOGIN]: (context) => {
        context.commit(mutations.root.LOGIN);
    },
    [actions.root.LOGOUT]: (context) => {
        context.commit(mutations.root.LOGOUT);
    }
}