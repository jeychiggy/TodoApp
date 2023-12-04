import axios, { AxiosError, AxiosResponse } from 'axios';

import {Alert} from "react-native";

interface RequestConfig {
    method?: string;
    url?: string;
    headers?: any;
}

interface ErrorResponse {
    code: number;
    messageTitle: string;
    messageBody: string | null;
}

interface SuccessHandler {
    (response: AxiosResponse): void;
}

interface ErrorHandler {
    (error: AxiosError): void;
}

interface Options {
    actionSuccess: any;
    actionFailure: any;
    dispatch: any;
    requestConfig: RequestConfig;
}

export default function handleRequest({actionSuccess, actionFailure, dispatch, requestConfig}: Options): Promise<any> {
    const handleSuccess: SuccessHandler = response => {
        const { data } = response;

        dispatch(actionSuccess(data));
        return Promise.resolve(data);
    };

    const handleError: ErrorHandler = error => {
        const { response } = error;
        let errorResponse: ErrorResponse | any;

        errorResponse = response.data;

        dispatch(actionFailure(errorResponse));

        // Alert.alert('Something went wrong', 'Please try again in a few minutes',[{text: 'Okay'}])

        return null;
    };

    return axios({
        baseURL: 'https://jsonplaceholder.typicode.com',
        timeout: 30000,
        ...requestConfig,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response: AxiosResponse) => handleSuccess(response))
        .catch((error: AxiosError) => handleError(error));
}
