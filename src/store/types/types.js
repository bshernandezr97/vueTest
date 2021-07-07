export const mutations = {
    root: {
        LOGIN: 'login',
        LOGOUT: 'logout'
    }, 
    book: {
        SET_BOOKS: 'setBooks'
    },
    cart: {
        ADD_PRODUCT: 'addProduct',
        DELETE_PRODUCT: 'deleteProduct',
        CLEAR_CART: 'clearCart'
    }   
}

export const actions = {
    root: {
        LOGIN: 'login',
        LOGOUT: 'logout'
    },
    book: {
        LOAD_BOOKS: 'loadBooks'
    },
    cart: {
        PROCESS_BUY: 'buyProductsCart'
    }
}

export const getters = {
    root: {
        IS_LOGGED: 'isLogged'
    },
    book: {
        BOOKS_LIST: 'getBooksList'
    },
    cart: {
        ITEMS_LIST: 'getItemsList',
        NUMBER_ITEMS: 'getNumberItems',
        TOTAL_COST: 'getTotalCost'
    }
}