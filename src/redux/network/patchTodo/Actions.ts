import handleRequest from "../handleRequest";
import {PATCH_TODO_FAILURE, PATCH_TODO_REQUEST, PATCH_TODO_SUCCESS} from "./Types";

export const patchTodoSuccess = (payload?:any) => ({
    type: PATCH_TODO_SUCCESS,
    payload
})

export const patchTodoFailure = (payload?:any) => ({
    type: PATCH_TODO_FAILURE,
    payload
})

export const patchTodoRequest =
    (payload = {}) =>
        (dispatch: (arg0: { type?: any; payload?: Record<string, never> }) => void) => {
            const { config = {}, ...params }: any = payload;

            dispatch({
                type: PATCH_TODO_REQUEST,
                payload: params,
            });

            return handleRequest({
                actionSuccess: patchTodoSuccess,
                actionFailure: patchTodoFailure,
                ...config,
                dispatch,
                requestConfig: {
                    method: 'patch',
                    url: `/users/${params.userId}/todos/${params.id}`,
                    data: {
                        completed: params.completed
                    },
                    ...config.requestConfig,
                },
            });
        }
