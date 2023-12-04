import {DELETE_TODO_SUCCESS, DELETE_TODO_REQUEST, DELETE_TODO_FAILURE} from "./Types";

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
        case DELETE_TODO_REQUEST:
            return {
                ...currentState,
                fetching: true,
                error: null,
                response: null,
                payload: action.payload,
            };

        case DELETE_TODO_SUCCESS:
            return {
                ...currentState,
                fetching: false,
                error: null,
                response: action.payload,
                payload: null,
            };

        case DELETE_TODO_FAILURE:
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
