import {NETWROK_TEST, NETWROK_TEST_FAILURE, NETWROK_TEST_SUCCESS} from "../../constants/network-test";


const initialState = {
    data: [],
    isFetching: false,
};

export default function networkTestReducer(state = initialState, action) {
    switch (action.type) {
        case NETWROK_TEST:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case NETWROK_TEST_SUCCESS:
            return {
                ...state,
                data: action.result,
                isFetching: false
            };
        case NETWROK_TEST_FAILURE:
            return {
                ...state,
                data: [],
                isFetching: false
            };
        default:
            return state;
    }
}