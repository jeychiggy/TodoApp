import * as Types from './Types';

export const userUpdate = (payload: any) => ({
    type: Types.USER_UPDATE,
    payload,
});

export const userClear = (payload: any) => ({
    type: Types.USER_CLEAR,
    payload,
});
