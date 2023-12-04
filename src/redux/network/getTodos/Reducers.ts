import {GET_TODOS_SUCCESS, GET_TODOS_REQUEST, GET_TODOS_FAILURE} from "./Types";

type State = {
    fetching: boolean,
    error: null,
    response: null,
    payload: null
}

const initialState: State = {
    fetching: false,
    error: null,
    response: null,
    payload: null,
}

export default (currentState = initialState, action: { type?: any; payload?: any }) => {
    switch (action?.type) {
        case GET_TODOS_REQUEST:
            return {
                ...currentState,
                fetching: true,
                error: null,
                response: null,
                payload: action.payload,
            };

        case GET_TODOS_SUCCESS:
            return {
                ...currentState,
                fetching: false,
                error: null,
                response: action.payload,
                payload: null,
            };

        case GET_TODOS_FAILURE:
            return {
                ...currentState,
                fetching: false,
                error: action.payload,
                response: null,
                payload: null,
            };

        default:
            return currentState;
    }
};
