import handleRequest from "../handleRequest";
import {UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS} from "./Types";

export const updateTodoSuccess = (payload?:any) => ({
    type: UPDATE_TODO_SUCCESS,
    payload
})

export const updateTodoFailure = (payload?:any) => ({
    type: UPDATE_TODO_FAILURE,
    payload
})

export const updateTodoRequest =
    (payload = {}) =>
        (dispatch: (arg0: { type?: any; payload?: Record<string, never> }) => void) => {
            const { config = {}, ...params }: any = payload;

            dispatch({
                type: UPDATE_TODO_REQUEST,
                payload: params,
            });

            return handleRequest({
                actionSuccess: updateTodoSuccess,
                actionFailure: updateTodoFailure,
                ...config,
                dispatch,
                requestConfig: {
                    method: 'put',
                    url: `/users/${params.userId}/todos/${params.id}`,
                    data: {
                        title: params.title,
                        body: params.body,
                        userId: params.userId,
                        completed: params.completed
                    },
                    ...config.requestConfig,
                },
            });
        }
