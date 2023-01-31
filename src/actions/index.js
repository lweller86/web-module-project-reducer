export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const ADD_TO_MEMORY = "ADD_TO_MEMORY"
export const MEMORY_RECALL = "MEMORY_RECALL"
export const MEMORY_CLEAR = "MEMORY_CLEAR"
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator });
}
export const addToMemory = (total) => {
    return ({ type: ADD_TO_MEMORY, payload: total });
}
export const memoryRecall = (memory) => {
    return ({ type: MEMORY_RECALL, payload: memory });
}
export const memoryClear = (memory) => {
    return ({ type: MEMORY_CLEAR, payload: memory })
}
export const clearDisplay = (total) => {
    return ({ type: CLEAR_DISPLAY, payload: total })
}
