type ActionType = {
    type: 'TOOGLE_COLLAPSED'

}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOOGLE_COLLAPSED':
            let newState = {...state, collapsed: !state.collapsed};
            return newState
        default: throw new Error('Undefined type action')

    }
    return state;
}