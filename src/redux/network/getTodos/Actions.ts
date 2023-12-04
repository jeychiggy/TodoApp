import handleRequest from "../handleRequest";
import {GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "./Types";

export const getTodosSuccess = (payload?:any) => ({
    type: GET_TODOS_SUCCESS,
    payload
})

export const getTodosFailure = (payload?:any) => ({
    type: GET_TODOS_FAILURE,
    payload
})

export const getTodosRequest =
    (payload = {}) =>
        (dispatch: (arg0: { type?: any; payload?: Record<string, never> }) => void) => {
            const { config = {}, ...params }: any = payload;

            dispatch({
                type: GET_TODOS_REQUEST,
                payload: params,
            });

            return handleRequest({
                actionSuccess: getTodosSuccess,
                actionFailure: getTodosFailure,
                ...config,
                dispatch,
                requestConfig: {
                    method: 'get',
                    url: `/users/${params.userId}/todos`,
                    ...config.requestConfig,
                },
            });
        }
