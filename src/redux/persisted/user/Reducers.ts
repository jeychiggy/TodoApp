import {USER_CLEAR, USER_UPDATE} from "./Types";

type State = {
    userId: number | null,
    hasUsedAppBefore: boolean,
    initialLoad: boolean
}

type Action = {
    type: string;
    payload?: Partial<State>
}

const initialState: State = {
    userId: null,
    hasUsedAppBefore: false,
    initialLoad: true
}

export default (currentState: State = initialState, action: Action) => {
    switch (action.type) {
        case USER_UPDATE:
            return {
                ...currentState,
                userId: action.payload.userId || currentState.userId,
                hasUsedAppBefore: action.payload.hasUsedAppBefore || currentState.hasUsedAppBefore,
                initialLoad: action.payload.initialLoad || currentState.initialLoad,
            }
        case USER_CLEAR:
            return {
                ...initialState
            }

        default:
            return currentState

    }
}
