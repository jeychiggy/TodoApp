import {ADD_TODO_SUCCESS, ADD_TODO_REQUEST, ADD_TODO_FAILURE} from "./Types";

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
        case ADD_TODO_REQUEST:
            return {
                ...currentState,
                fetching: true,
                error: null,
                response: null,
                payload: action.payload,
            };

        case ADD_TODO_SUCCESS:
            return {
                ...currentState,
                fetching: false,
                error: null,
                response: action.payload,
                payload: null,
            };

        case ADD_TODO_FAILURE:
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
