import handleRequest from "../handleRequest";
import {DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS} from "./Types";

export const deleteTodoSuccess = (payload?: any) => ({
    type: DELETE_TODO_SUCCESS,
    payload
})

export const deleteTodoFailure = (payload?: any) => ({
    type: DELETE_TODO_FAILURE,
    payload,
});

export const deleteTodoRequest =
    (payload = {}) =>
        (dispatch: (arg0: { type?: any; payload?: Record<string, never> }) => void) => {
            const { config = {}, ...params }: any = payload;

            dispatch({
                type: DELETE_TODO_REQUEST,
                payload: params,
            });

            return handleRequest({
                actionSuccess: deleteTodoSuccess,
                actionFailure: deleteTodoFailure,
                ...config,
                dispatch,
                requestConfig: {
                    method: 'delete',
                    url: `/users/${params.userId}/todos/${params.id}`,
                    ...config.requestConfig,
                },
            });
        };
