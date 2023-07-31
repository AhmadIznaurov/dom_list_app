const initialState = {
    todos: [],
    loading: false
}


export const todosReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/load/start':
            return {
                ...state,
                loading: true
            }
        case 'todos/load/success':
            return {
                ...state,
                loading: false,
                todos: action.payload
            }

        default:
            return state;
    }
}