

const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case 'ADD_Transaction': {
            return [action.payload, ...state];
        }
        case 'DELETE': {
            return [...state.filter((transc) => transc.id !== action.payload)]
        }
        default:
            return state;
    }
})

export default TransactionReducer;