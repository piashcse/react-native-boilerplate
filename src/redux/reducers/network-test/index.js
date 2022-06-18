import {NETWORK_TEST} from "../../constants/network-test";


const initialState = {
    data: [], isFetching: false,
};

export default function networkTestReducer(state = initialState, action) {
    switch (action.type) {
        case NETWORK_TEST.START:
            return {
                ...state, isFetching: true
            };
        case NETWORK_TEST.SUCCESS:
            return {
                ...state, data: action.result, isFetching: false
            };
        case NETWORK_TEST.FAILURE:
            return {
                ...state, isFetching: false
            };
        default:
            return state;
    }
}