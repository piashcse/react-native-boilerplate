import {NETWORK_TEST} from "../../constants/network-test";


const initialState = {
    data: [], isLoading: false,
};

 const networkTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case NETWORK_TEST.START:
            return {
                ...state, isLoading: true
            };
        case NETWORK_TEST.SUCCESS:
            return {
                ...state, data: action.result, isLoading: false
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