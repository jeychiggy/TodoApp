import * as Types from './Types'

export const todosUpdate = (payload: any) => ({
    type: Types.TODOS_UPDATE,
    payload,
})

export const todosClear = (payload: any) => ({
    type: Types.TODOS_CLEAR,
    payload,
})
