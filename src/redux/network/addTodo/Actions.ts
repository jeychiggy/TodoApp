import handleRequest from "../handleRequest";
import {ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS} from "./Types";

export const addTodoSuccess = (payload?: any) => ({
    type: ADD_TODO_SUCCESS,
    payload
})

export const addTodoFailure = (payload?: any) => ({
    type: ADD_TODO_FAILURE,
    payload,
});

export const addTodoRequest =
    (payload = {}) =>
        (dispatch: (arg0: { type?: any; payload?: Record<string, never> }) => void) => {
            const { config = {}, ...params }: any = payload;

            dispatch({
                type: ADD_TODO_REQUEST,
                payload: params,
            });

            return handleRequest({
                actionSuccess: addTodoSuccess,
                actionFailure: addTodoFailure,
                ...config,
                dispatch,
                requestConfig: {
                    method: 'post',
                    url: `/users/${params.userId}/todos`,
                    data: {
                        title: params.title,
                        body: params.body,
                        userId: params.userId,
                        completed: params.completed
                    },
                    ...config.requestConfig,
                },
            });
        };
