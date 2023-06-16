import {NETWORK_TEST} from "../../constants/network-test";


const initialState = {
    movies: [], isLoading: false,
};

const networkTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case NETWORK_TEST.START:
            return {
                ...state, isLoading: true
            };
        case NETWORK_TEST.SUCCESS:
            return {
                ...state, movies: action.result.results, isLoading: false
            };
        case NETWORK_TEST.FAILURE:
            return {
                ...state, isLoading: false
            };
        default:
            return state;
    }
}

export default networkTestReducer;