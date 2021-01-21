const initHome = {
    food: [],
    NewTaste: [],
    popular: [],
    recomended: []
}

export const homeReducer = (state=initHome, action) => {
    if(action.type === 'SET_FOOD') {
        return {
            ...state,
            food: action.value
        }
    }
    if(action.type === 'SET_NEW_TASTE') {
        return {
            ...state,
            NewTaste: action.value
        }
    }
    if(action.type === 'SET_POPULAR') {
        return {
            ...state,
            popular: action.value
        }
    }
    if(action.type === 'SET_RECOMENDED') {
        return {
            ...state,
            recomended: action.value
        }
    }
    return state
}