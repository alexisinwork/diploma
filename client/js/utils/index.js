export function createReducer (initialState, reducerMap) {
    return (state = initialState, action = {}) => {
        const reducer = reducerMap[action.type];

        return reducer ? { ...state, ...reducer(state, action.payload) } : state;
    };
}

export function capitalize(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}
