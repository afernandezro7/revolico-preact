import { types } from "./types";

const initialState = {
    count: 0
}


export const carReducer = (state, action) => {
    switch (action.type) {
        case types.resetCar: return initialState;
        case types.addItemCar: 
            return {
                ...state,
                count: state.count + action.payload.count
            };
        default: return state;
    }
};