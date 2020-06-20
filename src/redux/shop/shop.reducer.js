import ShopActionsTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isfetching: false,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ShopActionsTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isfetching: true
            }
        case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isfetching: true,
                collections: action.payload
            }
        case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isfetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;