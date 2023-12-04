import * as Types from './Types'

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

type Action = {
    type: string;
    payload?: Partial<State>
}

interface State {
    todoArray: Todo[]
}

const initialState: State = {
    todoArray: []
}

export default (currentState: State = initialState, action: Action) => {
    const {payload: {
        todoArray
    } = {}} = action

    switch (action?.type) {
        case Types.TODOS_UPDATE:
            return{
                ...currentState,
                todoArray: todoArray || currentState.todoArray
            }

        case Types.TODOS_CLEAR:
            return {
                ...initialState
            }
        default:
            return currentState

    }
}
